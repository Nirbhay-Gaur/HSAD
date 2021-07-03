import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./footer.module.css";
import cx from "classnames";
import qr_code from "../../resources/images/Whatsapp_QR_Code.webp";
import ModalComponent from "../modal/modal";

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row className={cx(styles.footer, "no-gutters py-3")}>
        <Col md={7}>
          <div className={styles.footer_sec}>
            <div className={styles.footer_nav}>
              <ul>
                <li>
                  <a href="/in/sitemap" target="_blank">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="/in/privacy" target="_blank">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/in/legal" target="_blank">
                    legal
                  </a>
                </li>
                <li>
                  <a href="#terms-and-conditions" onClick={handleShow}>
                    *T&amp;C Apply
                  </a>
                </li>
              </ul>
            </div>
            <p>Copyright © 2009-2021 LG Electronics. All Rights Reserved</p>
            <p>
              <a href="https://www.lg.com/in" target="_blank" rel="noreferrer">
                This is LG Electronics' official homepage. If you want to
                connect to LG Corp, or other LG affiliates, please click
              </a>
            </p>
          </div>
        </Col>
        <Col md={5} className="text-right">
          <img src={qr_code} alt="whatsapp qr code" />
        </Col>
      </Row>
      <ModalComponent show={show} onHide={handleClose} />
    </div>
  );
}

export default Footer;
