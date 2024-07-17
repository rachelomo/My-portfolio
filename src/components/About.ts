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
            As a full-stack developer, I have built a comprehensive and diverse skill set that enables<br>
             me to handle both front-end and back-end development tasks effectively. My journey in <br>
              this field includes working on a variety of projects, such as replicating an e-commerce <br> 
              website, collaborating on an  enrollment management system, and developing additional <br> 
                applications like Medhouse and Shopery-Org-Web. These 
            </span>
            <span>
               experiences have honed my <br>
                technical proficiency and collaborative skills, preparing me to tackle complex  <br> 
                development challenges. E-commerce Website Replication: Successfully replicated  <br>
                 an e-commerce <br>website using the PHP framework Laravel. This project showcased my <br>
             strong web development skills and deep understanding of e-commerce functionalities. <br>
            </span>
          <br><button id="readMoreButton">Read More...</button>
          <div class="more-content" style="display: none;">
            <!-- Hidden content initially -->
            <span>
                Collaborative Project - Enrollment Management System: Worked <br>
                 with two partners to develop an Enrollment Management System. <br>
                  The project ran smoothly, highlighting my ability to work <br>
                  effectively in a team and manage collaborative coding efforts.
            Medhouse: After presenting several projects, I initiated and developed <br>
             Medhouse. This project further solidified my full-stack development <br>
             skills and my capability to deliver complete web solutions.
            Shopery-Org-Web: Recently completed work on Shopery-Org-Web, <br>
            demonstrating my ongoing commitment to expanding my portfolio <br>
             and taking on new challenges in web development. These experiences <br>
              highlight my proficiency in full-stack development, my collaborative <br>
               work ethic, and my dedication to continuous learning and project completion.

        
            </span>
          </div>
        </div>
      </div>
    </section>
  `;
}
