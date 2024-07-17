// Import styles and components
import './css/style.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Main function to render components
const Main = (): string => {
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
    ${Footer()}
  `;
};

// Function to handle toggling of "Read More" content
const handleReadMoreToggle = (): void => {
  const readMoreButton = document.getElementById('readMoreButton');
  const moreContent = document.querySelector('.more-content') as HTMLElement | null;

  if (readMoreButton && moreContent) {
    readMoreButton.addEventListener('click', () => {
      // Toggle the display of the additional content
      if (moreContent.style.display === 'none' || !moreContent.style.display) {
        moreContent.style.display = 'block';
        readMoreButton.textContent = 'Read Less';
      } else {
        moreContent.style.display = 'none';
        readMoreButton.textContent = 'Read More...';
      }

      // Ensure the button is moved below the expanded content
      if (moreContent.style.display === 'block') {
        // Scroll to the expanded content
        moreContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
};

// Function to handle menu toggle
const handleMenuToggle = (): void => {
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const nav = document.querySelector('nav');

  if (menuIcon && closeIcon && nav) {
    menuIcon.addEventListener('click', () => {
      nav.style.display = 'flex';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', () => {
      nav.style.display = 'none';
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
    });
  }
};

// Render Main into the #app div after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector<HTMLDivElement>('#app');
  if (appContainer) {
    appContainer.innerHTML = Main();

    // Hide all sections except Home initially
    document.querySelectorAll<HTMLElement>('section').forEach(section => {
      if (section.id !== 'home') {
        section.style.display = 'none';
      } else {
        section.style.display = 'flex';
        section.style.backgroundColor = '#31065a';
        section.style.color = 'white';
        section.style.height = '78vh';
      }
    });

    // Add event listeners to navigation links
    document.querySelectorAll<HTMLAnchorElement>('nav ul li a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href')!.substring(1);
        document.querySelectorAll<HTMLElement>('section').forEach(section => {
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
        // Hide the navigation on small screens after clicking a link
        const nav = document.querySelector('nav');
        if (window.innerWidth <= 768 && nav) {
          nav.style.display = 'none';
          document.getElementById('closeIcon')!.style.display = 'none';
          document.getElementById('menuIcon')!.style.display = 'block';
        }
      });
    });

    // Add event listener to logo
    document.getElementById('logo')!.addEventListener('click', () => {
      document.querySelectorAll<HTMLElement>('section').forEach(section => {
        section.style.display = 'none';
      });
      const homeSection = document.getElementById('home');
      homeSection!.style.display = 'flex';
      homeSection!.style.backgroundColor = '#31065a';
      homeSection!.style.color = 'white';
      homeSection!.style.height = '78vh';
      // Hide the navigation on small screens after clicking the logo
      const nav = document.querySelector('nav');
      if (window.innerWidth <= 768 && nav) {
        nav.style.display = 'none';
        document.getElementById('closeIcon')!.style.display = 'none';
        document.getElementById('menuIcon')!.style.display = 'block';
      }
    });

    // Image rotation logic
    const imageUrls = [
      '/src/assets/web.jpg',
      '/src/assets/portfolio.jpg',
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
        }, 1500);
      }, 3000);
    }

    // Initialize "Read More" toggle functionality
    handleReadMoreToggle();

    // Initialize menu toggle functionality
    handleMenuToggle();

    // Add submit event listener to contact form
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };

      try {
        const response = await fetch('https://my-laravel-project.vercel.app/api/messages', {
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
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  }
});
