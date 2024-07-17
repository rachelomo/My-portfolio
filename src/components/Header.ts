export const Header = () => {
  return `
    <header>
      <img src="/src/assets/logo.png" alt="Logo" class="logo" id="logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
       <div><button id="hireButton">Hire Me</button></div>
      </nav>
    </header>
  `;
}
