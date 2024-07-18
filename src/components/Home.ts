export const Home = () => {
  return `
    <section id="home">
      <div class="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p><strong style="color:#d34d05;">Hi, It's me</strong><br>
        <strong style="font-size:30px;">Rachael Adebisi <br></strong> and I'm a <strong style="color:#d34d05;">FullStack Developer</strong></p>
        <span id='span'>
          Full-Stack Developer👨‍💻 | Web & Software Development | Transforming Ideas into High-Performance<br />
          Solutions | Specializing in Frontend & Backend Development | Let's connect!
        </span>
        <br />
        <a style="text-align:center" id="hireMeButton" href="/src/assets/cv.pdf" download>Download CV</a>
        <div id="social-icons">
          <a href="https://www.linkedin.com/in/rachael-adebisi-0b4543291" target="_blank" rel="noopener noreferrer">
            <img src="/images_linkdin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/rachelomo" target="_blank" rel="noopener noreferrer">
            <img src="/icons8-github.svg" alt="GitHub"/>
          </a>
        </div>
      </div>
      <div>
        <img id="rotatingImage" src="/coding-interface.png" alt="Rotating Image" />
      </div>
    </section>
  `;
};
