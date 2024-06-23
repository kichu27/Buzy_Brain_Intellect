import React from "react";
import "./styles/contact.css";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          For any inquiries, please reach out to us using the contact
          information below:
        </p>

        <div className="contact-info">
          <p>
            <strong>Address:</strong> A/2, Barakha Bahar, Naupada, Thane, -
            400602
          </p>
          <p>
            <strong>Email:</strong> info@buzybrainintellect.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9029023377
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://www.buzybrainintellect.com" target="_blank" rel="noopener noreferrer">
              www.buzybrainintellect.com
            </a>
          </p>

          <div className="socialmediacont">   

<div className="socialbox">

<a href="https://www.instagram.com/"><img src="src/components/images/instagram.png" alt="insta_icon" height={50} width={50}  /></a>

</div>

<div className="socialbox">

<a href="https://www.facebook.com/"><img src="src/components/images/facebook.png" alt="facebook_icon" height={50} width={50}  /></a>

</div>
<div className="socialbox">

<a href="https://in.linkedin.com/"><img src="src/components/images/linkedin.png" alt="linkeddin_icon" height={50} width={50}  /></a>

</div>
<div className="socialbox">

<a href="https://www.youtube.com/"><img src="src/components/images/youtube.png" alt="youtube_icon" height={50} width={50}  /></a>

</div>

        </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.609486136644!2d72.95082751736118!3d19.188546087687794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b918ca9d9177%3A0xff1a2d830fa07983!2sNaupada%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400602!5e0!3m2!1sen!2sin!4v1717151880478!5m2!1sen!2sin"
            width="1000"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

       
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
