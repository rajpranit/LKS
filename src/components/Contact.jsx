import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you. Please reach out to us with any questions or to learn more about our work.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum lorem ac nisi convallis, in facilisis justo cursus. 
        Cras faucibus malesuada massa, a fermentum magna tempus nec. Pellentesque vitae tincidunt urna. Integer sollicitudin est ac libero placerat, 
        ac ultricies ligula vehicula. Proin ac ex eget metus volutpat dictum. Nullam nec massa eget ligula consequat fermentum a sit amet est. 
        Duis tincidunt magna eu libero aliquam, at vulputate neque scelerisque. Praesent viverra tellus et neque varius, eu iaculis felis viverra. 
        Mauris non nunc at sapien tincidunt laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
        Ut vitae risus et nunc pretium venenatis. Integer eget tortor non justo egestas varius. Fusce eu sapien et libero interdum ultricies non non justo.
      </p>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
