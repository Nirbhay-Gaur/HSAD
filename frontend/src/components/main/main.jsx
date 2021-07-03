import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import styles from "./main.module.css";

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

function Main() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
    product: "",
    productDropDown: "",
    modelDropDown: "",
    dealer_name: "",
    i_date: "",
    i_num: "",
  });

  let handleProductBtn = () => {
    document.getElementById("product").classList.toggle("d-block");
  };
  let handleModelBtn = () => {
    if (productData.includes(formData.productDropDown)) {
      document.getElementById("model").classList.toggle("d-block");
    }
  };

  let handleProductClick = (e) => {
    setFormData({
      ...formData,
      productDropDown: e.target.innerHTML,
    });
    handleProductBtn();
  };

  let handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIdSubmit = async () => {
    try {
      await axios.get(`api/form/${formData.id}`).then(({ data }) =>
        setFormData({
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          product: data.product,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>BUY FROM HOME</h2>
      </div>
      <div>
        <Container style={{ marginBottom: "5%" }}>
          <Row className={styles.row_1}>
            <Col>
              <Form autoComplete="false">
                <Form.Group>
                  <Form.Label className={styles.label}>
                    Enter the Unique Code. received via SMS Pre-Booking.
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="XXXXXXXXXXXXXXXXXXXXXXXX"
                    required
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
                <Row>
                  <Col md={6} lg={3}>
                    <Button
                      variant="outline-danger"
                      className={styles.btn}
                      style={{ width: "100%" }}
                      onClick={handleIdSubmit}
                    >
                      SUBMIT
                    </Button>
                  </Col>
                  <Col md={6} lg={3}>
                    <Button
                      variant="outline-danger"
                      className={styles.btn}
                      style={{ width: "100%" }}
                    >
                      FORGET UNIQUE CODE
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row className={styles.row_2}>
            <Col>
              <p>Post entry of unique code, data will reflect automatically.</p>
            </Col>
          </Row>
          <Form>
            <Row>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label className={styles.label}>
                    Customer Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="*Customer Name"
                    required
                    name="name"
                    value={formData.name}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label className={styles.label}>
                    Mobile Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="*Mobile Number"
                    required
                    name="mobile"
                    value={formData.mobile}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label className={styles.label}>Email ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email ID"
                    name="email"
                    value={formData.email}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label className={styles.label}>Product</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="*Product"
                    required
                    name="product"
                    value={formData.product}
                    disabled
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>
                  Enter the Purchase Details for verification &amp; E-Voucher
                  Claim
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={2}>
                <Form.Group>
                  <Form.Label className={styles.label}>Product</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="*Product"
                      required
                      name="productDropDown"
                      value={formData.productDropDown}
                      onChange={handleInputChange}
                    />

                    <Button
                      variant="outline-secondary"
                      className={styles.opt_btn}
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
              <Col md={6} lg={2}>
                <Form.Group>
                  <Form.Label className={styles.label}>Model Number</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="*Model Number"
                      required
                      name="modelDropDown"
                      value={formData.modelDropDown}
                      onChange={handleInputChange}
                    />

                    <Button
                      variant="outline-secondary"
                      className={styles.opt_btn}
                      onClick={handleModelBtn}
                    >
                      <IoMdArrowDropdown />
                    </Button>
                  </InputGroup>
                  <span id="model" className={styles.custom_dropdown}>
                    <span>
                      {/* <ul>
                        {stateData.map((data, i) => (
                          <li key={i} onClick={handleStateClick}>
                            {data}
                          </li>
                        ))}
                      </ul> */}
                    </span>
                  </span>
                </Form.Group>
              </Col>
              <Col md={6} lg={2}>
                <Form.Group>
                  <Form.Label className={styles.label}>Dealer Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="*Dealer Name"
                    required
                    name="dealer_name"
                    value={formData.dealer_name}
                    onChange={handleInputChange}
                  ></Form.Control>
                  <p className={styles.info}>(Type Minimum 3 char.)</p>
                </Form.Group>
              </Col>
              <Col md={6} lg={2}>
                <Form.Group>
                  <Form.Label className={styles.label}>Invoice Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="*Invoice Date"
                    required
                    name="i_date"
                    value={formData.i_date}
                    onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} lg={2}>
                <Form.Group>
                  <Form.Label className={styles.label}>
                    Invoice Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="*Invoice Number"
                    required
                    name="i_num"
                    value={formData.i_num}
                    onChange={handleInputChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} lg={2}>
                <Form.Label className={styles.label}>Invoice Upload</Form.Label>

                <Form.Group>
                  <Form.File className={styles.invoice} />
                  <p className={styles.info}>
                    (size 500KB and png/jpeg/jpg/pdf)
                  </p>
                </Form.Group>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <div style={{ textAlign: "right", fontSize: "1.3rem" }}>
                  + Click to add more products
                </div>
              </Col>
            </Row> */}
            <Row>
              <Col>
                <Button variant="outline-danger" className={styles.btn}>
                  SUBMIT YOUR DETAILS
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Main;
