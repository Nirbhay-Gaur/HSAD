import React, { useState } from "react";
import { Form, Button, Row, Col, InputGroup, Modal } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import ModalComponent from "../../modal/modal";
import axios from "axios";
import styles from "./form.module.css";

const stateData = [
  "ANDAMAN and NICOBAR ISLANDS",
  "ANDHRA PRADESH",
  "ARUNACHAL PRADESH",
  "ASSAM",
  "BIHAR",
  "CHANDIGARH",
  "CHHATTISGARH",
  "DAMAN  and  DIU",
  "DELHI",
  "GOA",
  "GUJARAT",
  "HARYANA",
  "HIMACHAL PRADESH",
  "JAMMU and KASHMIR",
  "JHARKHAND",
  "KARNATAKA",
  "KERALA",
  "LAKSHADWEEP",
  "MADHYA PRADESH",
  "MAHARASHTRA",
  "MANIPUR",
  "MEGHALAYA",
  "MIZORAM",
  "NAGALAND",
  "ODISHA",
  "PONDICHERRY",
  "PUNJAB",
  "RAJASTHAN",
  "SIKKIM",
  "TAMIL NADU",
  "TELANGANA",
  "TRIPURA",
  "UTTAR PRADESH",
  "UTTARAKHAND",
  "WEST BENGAL",
];

const productData = [
  "Air Conditioner",
  "Refrigerator",
  "Washing Machine",
  "Dishwasher",
  "Styler",
  "Microwave Oven",
  "Water Purifiers",
  "Air purifier",
  "Television",
  "TONE (Earbuds)",
];

function FormComponent() {
  const [show, setShow] = useState(false);
  const [errorShow, setErrorShow] = useState({
    bool: false,
    message: "",
  });
  const [successShow, setSuccessShow] = useState({
    bool: false,
    message: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const trimValues = (object) => {
    Object.keys(object).map(
      (k) =>
        (object[k] =
          typeof object[k] == "string" ? object[k].trim() : object[k])
    );
    return object;
  };

  const errorFunc = (error) => {
    return (
      <Modal show={errorShow.bool} onHide={() => setErrorShow({ bool: false })}>
        <Modal.Header closeButton>{error}</Modal.Header>
      </Modal>
    );
  };
  const successFunc = (msg) => {
    return (
      <Modal
        show={successShow.bool}
        onHide={() => setSuccessShow({ bool: false })}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {msg}
          <br />
          Copy this id and visit the following page for further instructions:
        </Modal.Header>
        <Modal.Footer>
          <Button
            type="button"
            href="http://localhost:3000"
            target="_blank"
            rel="noreferrer"
            variant="outline-success"
          >
            Buy LG Products easily from home
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  function counterStart(counter) {
    setTimeout(function () {
      if (counter > 0) {
        counter = parseInt(counter) - parseInt(1);
        document.querySelector("#get-otp").setAttribute("disabled", true);
        document.querySelector(
          "#get-otp"
        ).innerHTML = `RESEND AFTER: ${counter}`;
        counterStart(counter);
      } else if (counter === 0) {
        document.querySelector("#get-otp").removeAttribute("disabled");
        document.querySelector("#get-otp").innerHTML = "GET OTP";
      }
    }, 1000);
  }

  const handleOtpBtn = async () => {
    const mobile = document.querySelector('[name="mobile"]');
    const name = document.querySelector('[name="name"]');

    if (name.checkValidity() === false) {
      setErrorShow({
        bool: true,
        message: "Please Enter Your Valid Full Name",
      });
    } else if (mobile.checkValidity() === false) {
      setErrorShow({
        bool: true,
        message: "Please Enter Valid Mobile Number",
      });
    } else {
      // disable OTP button
      counterStart(30);
      // Send mobile number to server
      try {
        await axios
          .post("/api/otp", {
            name: formData.name,
            mobile: formData.mobile,
          })
          .then(
            setErrorShow({
              bool: true,
              message: `OTP sent to ${formData.mobile}`,
            })
          );
      } catch (error) {
        setErrorShow({
          bool: true,
          message: `${error.response.data}`,
        });
      }
    }
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      trimValues(formData);

      try {
        await axios
          .post("/api/form", {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            otp: formData.otp,
            state: formData.state,
            city: formData.city,
            pincode: formData.pincode,
            product: formData.product,
          })
          .then((resp) => {
            setSuccessShow({
              bool: true,
              message: `${resp.data.message}`,
            });
            reset();
            setValidated(false);
            document.getElementById("myform").reset();
          });
      } catch (error) {
        setErrorShow({
          bool: true,
          message: `${error}`,
        });
      }

      // if (false) {
      //   setErrorShow({
      //     bool: true,
      //     message: "Submitted",
      //   });

      // } else {
      //   setErrorShow({
      //     bool: true,
      //     message: "Invalid or Expired OTP Entered",
      //   });
      //   setFormData({ ...formData, otp: "" });
      // }
    }
  };

  let handleStateBtn = () => {
    document.getElementById("state").classList.toggle("d-block");
  };
  let handleStateClick = (e) => {
    setFormData({
      ...formData,
      state: e.target.innerHTML,
    });
    handleStateBtn();
  };

  let handleProductBtn = () => {
    document.getElementById("product").classList.toggle("d-block");
  };
  let handleProductClick = (e) => {
    setFormData({
      ...formData,
      product: e.target.innerHTML,
    });
    handleProductBtn();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    state: "",
    city: "",
    pincode: "",
    product: "",
  });

  let handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let reset = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      otp: "",
      state: "",
      city: "",
      pincode: "",
      product: "",
    });
  };

  return (
    <div className={styles.form_card} id="register-now">
      {errorFunc(errorShow.message)}
      {successFunc(successShow.message)}
      <h3>Register Now</h3>
      <Form
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
        id="myform"
        validated={validated}
      >
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                pattern="[A-Z a-z]{1,100}"
                maxLength="100"
                minLength="2"
                placeholder="*Name"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid full name
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid email
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formMobileNumber">
              <Form.Control
                type="tel"
                placeholder="*Mobile Number"
                minLength="10"
                maxLength="10"
                pattern="[6789][0-9]{9}"
                required
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Mobile No. Should be Minimum 10 Digits
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Button
              variant="outline-danger"
              style={{ width: "100%" }}
              className={styles.form_btn}
              onClick={handleOtpBtn}
              id="get-otp"
            >
              GET OTP
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={styles.form_p}>
              ( DND numbers will not receive message, mention Email id )
            </p>
            <Form.Group controlId="formOTP">
              <Form.Control
                type="text"
                placeholder="*Enter OTP"
                minLength="6"
                maxLength="6"
                pattern="[0-9]{6}"
                required
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please Enter OTP sent on your mobile
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formState">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="*Select State"
                  required
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />

                <Button
                  variant="outline-danger"
                  className={styles.select_btn}
                  onClick={handleStateBtn}
                >
                  <IoMdArrowDropdown />
                </Button>
              </InputGroup>
              <span id="state" className={styles.custom_dropdown}>
                <span>
                  <ul>
                    {stateData.map((data, i) => (
                      <li key={i} onClick={handleStateClick}>
                        {data}
                      </li>
                    ))}
                  </ul>
                </span>
              </span>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formCity">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="*Select City"
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />

                <Button variant="outline-danger" className={styles.select_btn}>
                  <IoMdArrowDropdown />
                </Button>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formPinCode">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="*Select Pincode"
                  required
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />

                <Button variant="outline-danger" className={styles.select_btn}>
                  <IoMdArrowDropdown />
                </Button>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formProduct">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="*Select Product"
                  required
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                />

                <Button
                  variant="outline-danger"
                  className={styles.select_btn}
                  onClick={handleProductBtn}
                >
                  <IoMdArrowDropdown />
                </Button>
              </InputGroup>
              <span id="product" className={styles.custom_dropdown}>
                <span>
                  <ul>
                    {productData.map((data, i) => (
                      <li key={i} onClick={handleProductClick}>
                        {data}
                      </li>
                    ))}
                  </ul>
                </span>
              </span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formCheckbox">
              <Form.Check
                type="checkbox"
                required
                label='* By clicking"Submit", I have read, agreed and giving consent to the terms of use and the Privacy Policy'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className={styles.form_link}>
            <a href="https://www.lg.com/in/privacy">*Privacy Policy</a>
            &nbsp;&nbsp;
            <a href="#terms-and-conditions" onClick={handleShow}>
              *T&amp;C Apply
            </a>
          </Col>
        </Row>
        <Button
          variant="outline-danger"
          size="sm"
          type="submit"
          className={styles.form_btn}
        >
          SUBMIT
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="outline-danger"
          size="sm"
          type="reset"
          className={styles.form_btn}
          onClick={(e) => {
            setValidated(false);
            reset();
          }}
        >
          RESET
        </Button>
      </Form>
      <ModalComponent show={show} onHide={handleClose} />
    </div>
  );
}

export default FormComponent;
