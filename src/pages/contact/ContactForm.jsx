import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import Header from "./../menu/Header";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdoyozwa");
  if (state.succeeded) {
    return (
      <p>
        Thank you for your feedback! We will take the time to asses your request
        and get back to you as soon as possible
      </p>
    );
  }
  return (
    <div>
      <Header />
      <div className="hunchoMan">
        <body style={{ background: "#E1373D" }}>
          <div className="formShit">
            <form onSubmit={handleSubmit}>
              <div className="formDivs">
                <label htmlFor="name">Name</label>
                <br></br>
                <input
                  style={{ borderRadius: "10px" }}
                  id="name"
                  type="name"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="formDivs">
                <label htmlFor="email">Email Address</label>
                <br></br>
                <input
                  style={{ borderRadius: "10px" }}
                  id="email"
                  type="email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="formDivs">
                <label htmlFor="email">Describe The Issue</label>
                <br></br>
                <textarea
                  style={{ borderRadius: "10px" }}
                  id="message"
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="formDivs">
                <button
                  style={{
                    borderRadius: "10px",
                    color: "white",
                    background: "#FFBE58",
                    fontWeight: "bold",
                  }}
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </body>
      </div>
    </div>
  );
}

export default ContactForm;
