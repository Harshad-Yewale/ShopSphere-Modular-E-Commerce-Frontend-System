<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <h1>ShopSphere – Modular E-Commerce Frontend System</h1>

  <p>
    ShopSphere is a frontend-focused e-commerce project built using HTML, CSS, and Vanilla JavaScript.
    The primary intent of this project was to strengthen my understanding of core frontend development concepts,
    including DOM manipulation, application state management, modular code organization, and structuring
    a multi-page web application.
  </p>

  <p>
    This project simulates a real-world e-commerce workflow, including product browsing, cart management,
    checkout flow, and order tracking. While developing ShopSphere, I focused on writing clean, modular,
    and maintainable JavaScript code, separating concerns across different modules, and applying
    object-oriented programming principles where appropriate.
  </p>

  <p>
    ShopSphere represents an important learning milestone in my journey toward building structured,
    scalable frontend applications and understanding how real-world frontend systems are organized.
  </p>

  <hr>

  <h2>Objectives</h2>
  <ul>
    <li>Strengthen understanding of core JavaScript fundamentals</li>
    <li>Practice DOM manipulation and event-driven programming</li>
    <li>Learn modular JavaScript using ES6 modules</li>
    <li>Implement cart functionality using object-oriented programming</li>
    <li>Understand application state management in frontend applications</li>
    <li>Build a structured, multi-page frontend system</li>
    <li>Apply separation of concerns and clean code organization</li>
  </ul>

  <hr>

  <h2>Features</h2>
  <ul>
    <li>Product listing page</li>
    <li>Add to cart functionality</li>
    <li>Cart state management using JavaScript class</li>
    <li>Checkout flow simulation</li>
    <li>Order summary and payment summary</li>
    <li>Order tracking interface</li>
    <li>Modular and organized code structure</li>
  </ul>

  <hr>

  <h2>Tech Stack</h2>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Vanilla JavaScript (ES6)</li>
  </ul>

  <hr>

  <h2>Project Structure</h2>

  <pre>
backend/
  products.json          → Simulated backend data source

data/
  products.js           → Product data module
  class-cart.js         → Cart management using OOP
  delivery.js           → Delivery logic module

Scripts/
  amazon.js             → Homepage logic
  checkout.js           → Checkout page logic

  checkout/
    ordersummary.js     → Order summary logic
    paymentsummary.js   → Payment calculation logic

  utility/
    money.js            → Currency formatting utilities

styles/
  → Application styling

images/
  → Product and UI images

HTML Pages:
  amazon.html           → Product listing page
  checkout.html         → Checkout page
  orders.html           → Orders page
  tracking.html         → Tracking page
  </pre>

  <hr>

  <h2>Key Concepts Demonstrated</h2>
  <ul>
    <li>DOM manipulation</li>
    <li>Event handling</li>
    <li>JavaScript classes and object-oriented programming</li>
    <li>Application state management</li>
    <li>Modular JavaScript architecture</li>
    <li>Separation of concerns</li>
    <li>Multi-page frontend application flow</li>
  </ul>

  <hr>

  <h2>How to Run</h2>
  <ol>
    <li>Clone the repository</li>
    <li>Open <strong>amazon.html</strong> in a web browser</li>
    <li>Navigate through the application pages</li>
  </ol>

  <hr>

  <h2>Learning Intent</h2>

  <p>
    The purpose of this project was not to replicate a production-ready e-commerce platform,
    but to build a structured frontend application while focusing on understanding how different
    parts of a frontend system interact.
  </p>

  <p>
    Through this project, I aimed to move beyond basic JavaScript usage and develop a deeper
    understanding of application structure, state handling, modular design, and frontend architecture.
  </p>

  <hr>

  <h2>Future Improvements</h2>
  <ul>
    <li>Connect to a real backend API</li>
    <li>Add persistent cart using local storage</li>
    <li>Add user authentication</li>
    <li>Improve UI responsiveness</li>
    <li>Convert to full-stack application</li>
  </ul>

  <hr>

  <p>
    This project reflects my continuous effort to improve my frontend development skills
    and build structured, maintainable applications.
  </p>

</body>
</html>
