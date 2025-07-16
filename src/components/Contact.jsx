import React from "react";
import styles from "./css/contact.module.css";
import Button from "../hooks/customButton";
import Swal from "sweetalert2";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0572d915-10f1-4a6a-a4ce-f7b7f16ba952");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
        draggable: true,
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContent}>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">FullName</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your Message here"
              rows="5"
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            variant="primary"
            size="medium"
            className={styles.button}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
