export const Home = () => {
  return `
    <section id="home">
      <div class="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, It's me<br>
        <strong>Rachael Adebisi <br></strong> and I'm a <strong>FullStack Developer</strong></p>
        <span id='span'>
          Full-Stack Developer👨‍💻 | Web & Software Development | Transforming Ideas into High-Performance<br />
          Solutions | Specializing in Frontend & Backend Development | Let's connect!
        </span>
        <br />
        <a id="hireMeButton" href="/src/assets/cv.pdf" download>Download CV</a>
        <div id="social-icons">
          <a href="https://www.linkedin.com/in/rachael-adebisi" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/icons8-linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/rachelomo" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/icons8-github.svg" alt="GitHub" />
          </a>
        </div>
      </div>
      <div>
        <img id="rotatingImage" src="/src/assets/web.jpg" alt="Rotating Image" />
      </div>
    </section>
  `;
}