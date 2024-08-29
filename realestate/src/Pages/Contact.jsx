import React, { useState } from "react";
import alertify from "alertifyjs";
import Hero from "../Components/Hero";

const Contact = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    contactSubject: "",
    contactMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name: formData.customerName,
      email: formData.customerEmail,
      subject: formData.contactSubject,
      message: formData.contactMessage,
    };

    fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post işlemi başarılı:", data);
        alertify.success("Your message has been sent successfully.");
      })
      .catch((error) => {
        console.error("Hata:", error);
        alertify.error("There was an error sending your message.");
      });

    setFormData({
      customerName: "",
      customerEmail: "",
      contactSubject: "",
      contactMessage: "",
    });
  };

  return (
    <>
      <Hero slug="iletisim" />

      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <iframe
              style={{ border: "0", width: "100%", height: "270px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48187.25889997915!2d28.605433318698317!3d40.987968956771944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fc19deb0b3b%3A0xdf4ea093f30983c6!2zQmV5bGlrZMO8esO8L8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1724096763086!5m2!1sen!2str"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Adres</h3>
                  <p>Cumhuriyet Meydanı, Beylikdüzü, İstanbul</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Telefon</h3>
                  <p>+9 5589 55488 55</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>info@info.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="customerName"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="customerEmail"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.customerEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      name="contactSubject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.contactSubject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="contactMessage"
                      rows="6"
                      placeholder="Message"
                      value={formData.contactMessage}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit">Gönder</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
