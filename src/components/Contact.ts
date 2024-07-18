export const Contact = () => {
  return `
    <section id="contact">
      <div class="about-header">
        <h2 style='color:white'>Contact</h2>
      </div>
      <div class="contact-container">
      
        <div class="contact-info">
         
          <p><img src="/src/assets/email.svg" alt="Logo" class="logo" id="logo" style="width:7%"/>
     <a href="mailto:adebisirachael41@gmail.com">adebisirachael41@gmail.com</a></p>
        <div style="position:relative">
    <img src="/src/assets/phone.png" alt="Logo" class="logo" id="logo" style="height: auto; filter: hue-rotate(60deg) saturate(100%);" />
    <div style="position:absolute; top: 50%; left: 40%; transform: translate(-50%, -50%); text-align: center;">
        <span><a href="tel:+08172892533">08172892533</a></span>
        <span><a href="tel:+09049816706">09049816706</a></span>
    </div>
</div>
        </div>
        <div class="contact-form-container">
          <h2>Contact Form</h2>
          <form id="contactForm">
            <div class="form-group">
              <label for="name"></label>
              <input type="text" id="name" name="name" required value="Full Name">
            </div>
            <div class="form-group">
              <label for="email"></label>
              <input type="email" id="email" name="email" required value="Email Address">
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="phone"></label>
                <input type="tel" id="phone" name="phone" required value="Phone Number">
              </div>
              <div class="form-group">
                <label for="subject"></label>
                <input type="text" id="subject" name="subject" required value="Subject">
              </div>
            </div>
            <div class="form-group">
              <label for="message"></label>
              <textarea id="message" name="message" required value="Your Message"></textarea>
            </div>
            <div class="form-submit">
             <button type="submit">Send</button>
            </div>
           
          </form>
        </div>
      </div>
    </section>
  `;
};
