import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import "../style/Contact.css";

function Contact() {
  const navigate = useNavigate();
  const [data, setdata] = useState([
    {
      firstName: "",
      secondName: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      message: "",
    },
  ]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(data);
    var jsonData = {
      firstName: data.firstName,
      secondName: data.secondName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      website: data.website,
      message: data.message,
    };
    
    axios("https://ec2-3-27-43-100.ap-southeast-2.compute.amazonaws.com:8080/enquiryNow/", {
        method: "POST",
        data: JSON.stringify(jsonData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        alert("Form Submitted Successfully");
      })
      .catch((error) => {
        alert("Form Not Submitted Successfully Please Try Sometimes");
      });

      navigate("/");

  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Header />
      <Nav />
      <section className="enq-container">
        <div className="enq-div-container">
          <div className="enqury">
            <h1>Contact Us</h1>
          </div>
          <div className="enqury-content">
            <div className="talk-us">
              <div>
                <h1>Talk to Us?</h1>
                <h3>
                  You have questions and we have answers. Contact us today,
                  we’re here to help.
                </h3>
              </div>
              <div className="space"></div>
              <div className="form">
                <div className="form-row">
                  <div className="firstName">
                    <input
                      type="text"
                      name="firstName"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="First Name"
                      onChange={handleChange}
                      value={data.firstName}
                    />
                  </div>
                  <div className="secondName">
                    <input
                      type="text"
                      name="secondName"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Second Name"
                      onChange={handleChange}
                      value={data.secondName}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="email">
                    <input
                      type="text"
                      name="email"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your Email"
                      onChange={handleChange}
                      value={data.email}
                    />
                  </div>
                  <div className="phone">
                    <input
                      type="text"
                      name="phone"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your Phone"
                      onChange={handleChange}
                      value={data.phone}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="company">
                    <input
                      type="text"
                      name="company"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your Company"
                      onChange={handleChange}
                      value={data.company}
                    />
                  </div>
                  <div className="website">
                    <input
                      type="text"
                      name="website"
                      size="40"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Website"
                      onChange={handleChange}
                      value={data.website}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="message">
                    <textarea
                      name="message"
                      cols="80"
                      rows="10"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Message"
                      onChange={handleChange}
                      value={data.message}
                    ></textarea>
                  </div>
                </div>

                <div className="space"></div>
                <div className="footerspace"></div>
              </div>
              <div className="form-row">
                <div className="submit">
                  <button>Submit</button>
                </div>
              </div>
            </div>
            <div className="talk-us1">
              <div className="cont">
                <h3>Mithra Engineering & Enterprises</h3>
                <h5>No:1/119 GANDHI STREET,</h5>
                <h5>PERIYAKOTTTUMULAI,VIRUDHACHALAM TALUK,CUDDALORE DIST,</h5>
                <h5>TAMIL NADU -606103</h5>
                <h5>Mobile:+91-8122652043/+91-7904757806</h5>
                <h5>E-mail: meenquiry74@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="footerspace"></div>
      </section>
    </form>
  );
}

export default Contact;
