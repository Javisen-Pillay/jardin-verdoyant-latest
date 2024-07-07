import React from 'react';
import './customerservice.scss'; 

function CustomerService() {
  return (
    <div className="customer-service-page">
      <header>
        <h1>Customer Service</h1>
      </header>
      <main>
        <p>
          We are here to help you with any questions or concerns you may have. Please feel free to contact us through the following methods:
        </p>
        <h2>Email</h2>
        <p>
          You can reach our customer service team at <a href="mailto:support@jardinverdoyant.com">support@jardinverdoyant.com</a>.
        </p>
        <h2>Phone</h2>
        <p>
          For immediate assistance, please call us at (123) 456-7890. Our phone lines are open Monday to Friday, 9 AM to 5 PM.
        </p>
        <h2>Mailing Address</h2>
        <p>
          Jardin Verdoyant<br />
          123 Greenway Blvd<br />
          Ottawa, ON, Canada<br />
          K1A 0B1
        </p>
      </main>
    </div>
  );
}

export default CustomerService;
