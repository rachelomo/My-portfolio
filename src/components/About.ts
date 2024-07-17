export const About = () => {
  return `
    <section id='about'>
      <div class="about-header">
        <h2 class='col'>About <span>Me</span></h2>
      </div>
      <div class="about-content">
        <div class="image-container">
          <img id="rotatingImage" src="/src/assets/web.jpg" alt="Rotating Image" />
        </div>
        <div class="text-content">
          <h2>FullStack Developer | Web <br> & Software Development</h2>
          <span>
        Dedicated Full Stack Developer with a robust skill set encompassing both front-end and <br>
        back-end development. Utilizing tools like React, Typescript, Node.js, and Next.js to create <br>
         dynamic, user-friendly web applications. Proficiency in developing responsive designs with <br>
          Tailwind CSS and Bootstrap ensures seamless user experiences across  devices.On the backend, <br>
           working with PHP and Laravel to build scalable, secure   server-side applications.
          </span>
            <div class="more-content" style="display: none, margin-top:"20px";">
            <!-- Hidden content initially -->
            <span>
            From crafting pixel-perfect interfaces to architecting complex server-side logic, 
             committed to delivering high-quality, efficient solutions tailored to client needs. 
              Let's connect to bring your next project to life with the expertise and passion  
              infused into every line of code.
            </span>
          </div>
          <br><button id="readMoreButton">Read More...</button>
        
        </div>
      </div>
    </section>
  `;
};
