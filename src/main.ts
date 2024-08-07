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
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

const toastConfig: ToastrOptions = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  onclick: undefined,  
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 5000,
  extendedTimeOut: 1000,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
};

toastr.options = toastConfig;

toastr.success('This is a success message!');

const updateTitle = (title: string) => {
  document.title = `RachaelWebPortfolio/${title}`;
};

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

// "Read More" Function 
const handleReadMoreToggle = (): void => {
  const readMoreButton = document.getElementById('readMoreButton');
  const moreContent = document.querySelector('.more-content') as HTMLElement | null;

  if (readMoreButton && moreContent) {
    readMoreButton.addEventListener('click', () => {
      if (moreContent.style.display === 'none' || !moreContent.style.display) {
        moreContent.style.display = 'block';
        readMoreButton.textContent = 'Read Less';
      } else {
        moreContent.style.display = 'none';
        readMoreButton.textContent = 'Read More...';
      }

      if (moreContent.style.display === 'block') {
        moreContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
};

// Menu toggle Function
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

// Render
document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector<HTMLDivElement>('#app');
  if (appContainer) {
    appContainer.innerHTML = Main();
    document.querySelectorAll<HTMLElement>('section').forEach(section => {
      if (section.id !== 'home') {
        section.style.display = 'none';
      } else {
        section.style.display = 'flex';
        section.style.backgroundColor = '#31065a';
        section.style.color = 'white';
        section.style.height = '78vh';
        updateTitle('Home');
      }
    });

    // Add listeners navigation
    document.querySelectorAll<HTMLAnchorElement>('nav ul li a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href')!.substring(1);
        document.querySelectorAll<HTMLElement>('section').forEach(section => {
          section.style.display = 'none';
        });
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          if (targetId === 'home') {
            targetSection.style.display = 'flex';
            targetSection.style.backgroundColor = '#31065a';
            targetSection.style.color = 'white';
            targetSection.style.height = '78vh';
          } else {
            targetSection.style.display = 'block';
          }
          updateTitle(targetId.charAt(0).toUpperCase() + targetId.slice(1));
        }
        const nav = document.querySelector('nav');
        if (window.innerWidth <= 768 && nav) {
          nav.style.display = 'none';
          document.getElementById('closeIcon')!.style.display = 'none';
          document.getElementById('menuIcon')!.style.display = 'block';
        }
      });
    });

    // Event listener to logo
    const logoElement = document.getElementById('logo');
    if (logoElement) {
      logoElement.addEventListener('click', () => {
        document.querySelectorAll<HTMLElement>('section').forEach(section => {
          section.style.display = 'none';
        });
        const homeSection = document.getElementById('home');
        if (homeSection) {
          homeSection.style.display = 'flex';
          homeSection.style.backgroundColor = '#31065a';
          homeSection.style.color = 'white';
          homeSection.style.height = '78vh';
        }
        updateTitle('Home');
        const nav = document.querySelector('nav');
        if (window.innerWidth <= 768 && nav) {
          nav.style.display = 'none';
          document.getElementById('closeIcon')!.style.display = 'none';
          document.getElementById('menuIcon')!.style.display = 'block';
        }
      });
    }

    // Image rotation logic
    const imageUrls = [
      "/coding-interface.png",
      '/code-text.png',
      "/development-and-coding.png"
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
      }, 4000);
    }

    handleReadMoreToggle();
    handleMenuToggle();

    const handleSubmit = async (event: Event) => {
      event.preventDefault();

      const form = document.getElementById('contactForm') as HTMLFormElement;
      const formData = new FormData(form);

      console.log('Form data:', Object.fromEntries(formData.entries()));

      try {
        const response = await fetch('https://formspree.io/f/xblrlvjq', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        toastr.success('Message sent successfully!');
        form.reset();
      } catch (error) {
        toastr.error('Error: Could not send message. Please try again later.');
        console.error('Error:', error);
      }
    };

    const formElement = document.getElementById('contactForm');
    if (formElement) {
      formElement.addEventListener('submit', handleSubmit);
    }
  }
});
