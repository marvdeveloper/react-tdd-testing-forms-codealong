import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [selectedSize, setSelectedSize] = useState("small");
  const [email, setEmail] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const handleSizeChange = (e) => setSelectedSize(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  const selectionMessage = `Your selection: ${selectedSize} ${pepperoniIsChecked ? "pepperoni" : "cheese"}`;

  return (
    <div>
      <h1>Place an Order</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        <div>
          <h3>Size</h3>
          <select aria-label="Select size" value={selectedSize} onChange={handleSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <h3>Contact Info</h3>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="email address"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit Order</button>
        </div>
      </form>

      {/* This is what the test is looking for */}
      <div>{selectionMessage}</div>

      {orderSubmitted && <div>Thanks for your order!</div>}
    </div>
  );
}

export default App;
