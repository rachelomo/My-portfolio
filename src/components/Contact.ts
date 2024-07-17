export const Contact = () => {
  return `
    <section id="contact">
      <div class="about-header">
        <h2 class='col'>Contact <span>Me</span></h2>
      </div>
      <div class="contact-info">
        <p>Feel free to reach out to me through the following contact information:</p>
        <ul>
          <li>Phone: 08172892533</li>
          <li>Phone: 09049816706</li>
          <li>Email: <a href="mailto:adebisirachael41@gmail.com">adebisirachael41@gmail.com</a></li>
        </ul>
      </div>
      <div class="contact-form">
        <h3>Send a Message</h3>
        <form id="contactForm">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required>

          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone">

          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" required>

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  `;
};
