import { useState } from "react";
import "./App.css";

const initialFormState = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false,
};

export default function App() {

  //TODO: Add your state fields here

  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialFormState);
  }
  

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (type === "checkbox") {
      setFormState({ ...formState, [name]: checked });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const contactOptions = ["phone", "email", "post", "none"]

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input 
            onChange={(e) => handleChange(e)}
            value={formState.name}
            type="text" 
            name="name" 
            required 
            />
          </label>
          <label>
            Address
            <input 
            onChange={(e) => handleChange(e)}
            value={formState.address}
            type="text" 
            name="address" 
            />
          </label>
          <label>
            Phone Number
            <input 
            onChange={(e) => handleChange(e)}
            value={formState.phone}
            type="tel" 
            name="phone" 
            />
          </label>

          <label>
            Email
            <input 
            onChange={(e) => handleChange(e)}
            value={formState.email}
            type="email" 
            name="email" 
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              onChange={(e) => handleChange(e)}
              value={formState.complaint}
              name="complaint"
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            {contactOptions.map((option) => 
              <label key={option}>
                {option}
                <input
                  onChange={(e) => handleChange(e)}
                  checked={formState.contact === option} 
                  type="radio" 
                  name="contact" 
                  value={option} 
                />
              </label>
            )}
          </div>

          <label>
            I agree you take my data, and do whatever
            <input 
            onChange={(e) => handleChange(e)}
            checked={formState.consent}
            type="checkbox" 
            name="consent" 
            id="consent" 
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
