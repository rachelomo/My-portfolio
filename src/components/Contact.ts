export const Contact = () => {
  return `
    <section id="contact">
      <div class="about-header">
        <h2 class='col'>Contact <span>Me</span></h2>
      </div>
      <p>Feel free to reach out to me through the following contact information:</p>
      <div class="contact-content">
        <div class="contact-info">
          <ul>
            <li style="display: flex; align-items: center;">
              <img src="/src/assets/phone.png" alt="Logo" class="logo" id="logo" style="width: 20px; height: 20px; filter: hue-rotate(60deg) saturate(100%);" />
              <div style="margin-left: 10px;">
                <p style="margin: 0;">08172892533</p>
                <p style="margin: 0;">09049816706</p>
              </div>
            </li>
            <li>   <img src="/src/assets/email.svg" alt="Logo" class="logo" id="logo" style="width: 20px; height: 20px; filter: hue-rotate(60deg) saturate(100%);" />
            <a href="mailto:adebisirachael41@gmail.com">adebisirachael41@gmail.com</a></li>
          </ul>
        </div>
        <div class="contact-form">
          <h3>Send a Message</h3>
          <form id="contactForm">
             <label for="text"></label>
            <input value="Full Name" type="text" id="name" name="name" required style="background-color: #43366a; color: white;>
             <label for="email"></label>
            <input value="Email Address" type="email" id="email" name="email" required style="background-color: #43366a; color: white;">
  
       <div style="display:flex"> 
       <div> 
          <label for="phone"></label>
            <input value="Phone Number" type="tel" id="phone" name="phone" style="background-color: #43366a; color: white;">
         </div>
         <div> 
            <label for="subject"></label>
            <input value="Subject" type="text" id="subject" name="subject" required style="background-color: #43366a; color: white;">
         </div>
         </div>
         <div style="display="flex, flex-direction-column">
         <div>   <label for="message"></label>
            <textarea value="Message" id="message" name="message" rows="5" required style="background-color: #43366a; color: white;"></textarea>
  </div>
  <div>
            <button type="submit">Send</button>
          </form>
        </div>
        </div>
        </div>
      </div>
    </section>
  `;
};
