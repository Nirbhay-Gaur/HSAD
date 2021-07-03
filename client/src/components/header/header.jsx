import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./header.module.css";
import lg_logo from "../../resources/images/lg_logo.webp";
import header_bg_desktop from "../../resources/images/header-bg-desktop.jpg";
import header_bg_mobile from "../../resources/images/header-bg-mobile.webp";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  let header_bg;
  isMobile ? (header_bg = header_bg_mobile) : (header_bg = header_bg_desktop);

  return (
    <Row className="no-gutters">
      <Col className={styles.header_wrapper}>
        <img
          src={header_bg}
          alt="background for header"
          className={styles.header_bg}
        />
        <div className={styles.logo}>
          <a href="https://lg.com/in" target="_blank" rel="noreferrer">
            <img src={lg_logo} alt="lg logo" />
          </a>
        </div>
        <div className={styles.header_text}>
          <h2>TOGETHER WE CAN MAKE LIFE BETTER</h2>
          <p>
            Shop your favourite LG products from comfort and safety of your
            home.
          </p>
          <div className={styles.header_btn}>
            <a href="#register-now">Register Now</a>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
