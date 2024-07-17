// Import styles and components
import './css/style.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

// App function to render components
const App = () => {
  return `
    ${Header()}
    <div id="content">
      ${Home()}
      ${About()}
      ${Services()}
      ${Skills()}
      ${Portfolio()}
      ${Contact()}
    </div>
  `;
};

// Render App into the #app div
document.querySelector<HTMLDivElement>('#app')!.innerHTML = App();

// Hide all sections except Home initially
document.querySelectorAll('section').forEach(section => {
  if (section.id !== 'home') {
    section.style.display = 'none';
  } else {
    section.style.display = 'flex'; // Display home section as flex initially
    section.style.backgroundColor = '#31065a';
    section.style.color = 'white';
    section.style.height = '78vh';
  }
});

// Add event listeners to navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = (e.target as HTMLAnchorElement).getAttribute('href')!.substring(1);
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });
    const targetSection = document.getElementById(targetId);
    if (targetId === 'home') {
      targetSection!.style.display = 'flex';
      targetSection!.style.backgroundColor = '#31065a';
      targetSection!.style.color = 'white';
      targetSection!.style.height = '78vh';
    } else {
      targetSection!.style.display = 'block';
    }
  });
});

// Add event listener to logo
document.getElementById('logo')!.addEventListener('click', () => {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  const homeSection = document.getElementById('home');
  homeSection!.style.display = 'flex';
  homeSection!.style.backgroundColor = '#31065a';
  homeSection!.style.color = 'white';
  homeSection!.style.height = '78vh';
});

// Image rotation logic
const imageUrls = [
  '/src/assets/web.jpg',
  '/src/assets/images.jpg',
  '/src/assets/portfolio.jpg',
  // Add more image URLs here
];

let currentIndex = 0;
const rotatingImage = document.getElementById('rotatingImage') as HTMLImageElement;

if (rotatingImage) {
  setInterval(() => {
    rotatingImage.style.opacity = '0';
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % imageUrls.length;
      rotatingImage.src = imageUrls[currentIndex];
      rotatingImage.style.opacity = '1';
    }, 1000);
  }, 3000);
}


const contactForm = document.getElementById('contactForm') as HTMLFormElement;
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  try {
    const response = await fetch('https://your-laravel-api-url.vercel.app/api/messages', { // Use the deployed API URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      contactForm.reset();
    } else {
      alert('Failed to send the message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});