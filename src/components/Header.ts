export const Header = () => {
  return `
    <header>
      <img src="/Rachael-heart.png" alt="Logo" class="logo" id="logo" style="width: 100px; height: auto; filter: hue-rotate(60deg) saturate(100%);" />
      <span class="menu-icon" id="menuIcon">&#9776;</span>
      <span class="close-icon" id="closeIcon">&times;</span>
      <nav>
        <ul class="nav-list" id="navList">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <a href="mailto:Adebisirachael41@gmail.com"><button id="hirButton">Hire Me</button></a>
          </ul>
      </nav>
      <a href="mailto:Adebisirachael41@gmail.com"><button id="hireButton">Hire Me</button></a>
      </header>
  `;
};
