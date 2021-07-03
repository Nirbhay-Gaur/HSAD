import React from "react";
import { Col, Row } from "react-bootstrap";
import FormComponent from "./form/form";
import styles from "./main.module.css";
import exclusive_offers_desktop from "../../resources/images/exclusive_offers_desktop.webp";
import exclusive_offers_mobile from "../../resources/images/exclusive-offers_mobile.webp";
import sub_offer from "../../resources/images/sub_offer.webp";
import how_it_works_desktop from "../../resources/images/how_it_works_desktop.webp";
import how_it_works_mobile from "../../resources/images/how_it_works_mobile.webp";
import home_appliances from "../../resources/images/home_appliances.webp";
import home_entertainment from "../../resources/images/home_entertainment.webp";
import know_more from "../../resources/images/know_more.webp";
import { useMediaQuery } from "react-responsive";

function Main() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  let exclusive_offers;
  isMobile
    ? (exclusive_offers = exclusive_offers_mobile)
    : (exclusive_offers = exclusive_offers_desktop);
  let how_it_works;
  isMobile
    ? (how_it_works = how_it_works_mobile)
    : (how_it_works = how_it_works_desktop);

  const data = [
    {
      title: "Home Appliances",
      image: home_appliances,
      link: "https://www.lg.com/in/appliances",
    },
    {
      title: "Home Entertainment",
      image: home_entertainment,
      link: "https://www.lg.com/in/tv-audio",
    },
  ];

  return (
    <div className={styles.main_wrapper}>
      <Row className="no-gutters">
        <Col xs={12} lg={7}>
          <div className={styles.main_heading}>
            <h2>Exclusive Offers</h2>
          </div>
          <div className="text-center">
            <img
              src={exclusive_offers}
              alt="exclusive offers"
              className="img-fluid"
            />
            <img
              src={sub_offer}
              alt="upgrade responsibly"
              className="img-fluid mb-lg-0 mb-3"
            />
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <FormComponent />
        </Col>
      </Row>
      <Row className={styles.row_css}>
        <Col lg={8}>
          <div className="text-center">
            <img src={how_it_works} alt="how it works" className="img-fluid" />
          </div>
        </Col>
      </Row>
      <Row className={styles.row_css}>
        {data.map((data, i) => (
          <Col md={3} key={i} className={styles.row3_div}>
            <div>
              <h5>{data.title}</h5>
              <div>
                <img src={data.image} alt={data.title} className="img-fluid" />
              </div>
            </div>
            <div className={styles.know_more_btn}>
              <a href={data.link} target="_blank" rel="noreferrer">
                <img
                  src={know_more}
                  alt="click here to know more"
                  className="img-fluid"
                />
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Main;
