export default function ContactPage() {
  return (
    <div className="inner-page">
      <div className="page-container">
        <div className="inner-hero">
          <span className="eyebrow">CONTACT</span>
          <h1>
            Let's talk about
            <br />
            <em>your project.</em>
          </h1>
          <p>
            For product questions, showroom visits, project enquiries and
            distributor conversations.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <span>CALL</span>
            <a href="tel:+233240000000">+233 24 000 00 00</a>
          </div>
          <div className="contact-card">
            <span>EMAIL</span>
            <a href="mailto:services@marrksc.com">services@marrksc.com</a>
          </div>
          <div className="contact-card">
            <span>SHOWROOM</span>
            <strong>Sogakope, Volta Region, Ghana</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
