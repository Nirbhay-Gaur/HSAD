import React from "react";
import { Modal } from "react-bootstrap";
import styles from "./modal.module.css";

function ModalComponent(props) {
  return (
    <div>
      <Modal size="lg" show={props.show} onHide={props.onHide}>
        <Modal.Header className={styles.modal_header} closeButton>
          Terms and Conditions:
        </Modal.Header>
        <Modal.Body className={styles.modal_body}>
          <ul>
            <li>
              Offers unless specifically mentioned otherwise are applicable from
              05th June'21 to 31st July'21.
            </li>
            <li>
              Assured Gift Voucher- Cumulative value of all vouchers against all
              products in the offer is upto Rs. 35000 only
            </li>
            <li>
              Each membership code (
              <a
                href="https://www.lg.com/in/buy-from-home/TNCPrebookingoffer-Luxury.xlsx"
                target="_blank"
                rel="noreferrer"
              >
                Luxury
              </a>
              ,{" "}
              <a
                href="https://www.lg.com/in/buy-from-home/TNCPrebookingoffer-Premium.xlsx"
                target="_blank"
                rel="noreferrer"
              >
                Premium
              </a>
              ,{" "}
              <a
                href="https://www.lg.com/in/buy-from-home/TNCPrebookingoffer-Stepup.xlsx"
                target="_blank"
                rel="noreferrer"
              >
                Step UP
              </a>
              ,{" "}
              <a
                href="https://www.lg.com/in/buy-from-home/TNCPrebookingoffer-Entry.xlsx"
                target="_blank"
                rel="noreferrer"
              >
                Entry
              </a>{" "}
              and{" "}
              <a
                href="https://www.lg.com/in/buy-from-home/TNCPrebookingoffer-Starter.xlsx"
                target="_blank"
                rel="noreferrer"
              >
                Starter
              </a>
              ) will be valid for a period of upto 6 months from the date of
              receiving the SMS. All of the offers/services are only redeemable
              via the LG Rewards Platform/Thriwe Application.
            </li>
            <li>The assured gift voucher program is powered by Thriwe. </li>
            <li>
              Different set of vouchers are available and are applicable on
              different products &amp; models.{" "}
            </li>
            <li>
              <a
                href="https://www.lg.com/in/buy-from-home/TNCPrebookingoffer-Giftvoucherdetails.xlsx"
                target="_blank"
                rel="noreferrer"
              >
                Vouchers can be redeemable till 31st of Aug 2021.
              </a>{" "}
              All the vouchers are provided by the 3rd party and any dispute
              will be entertained by individual companies. Process for
              redemption is provided under each voucher separately. To avoid any
              confusion please go through each company voucher condition.
            </li>
            <li>
              {" "}
              Customer should check thoroughly the offering /benefits in each
              voucher before making purchase decision. OLED exchange offer
              applicable on 139 cm (55) &amp; 164 cm (65) OLEDBX series only
              from 16th Apr'21 to 30th June'21.
            </li>
            <li>
              For offer applicability, post purchase of eligible model, Dealer /
              customer shall book TV installation request under exchange with LG
              Call Centre.
            </li>
            <li>
              TV Installation through LG Authorized Service is mandatory to
              Claim the Offer. Customer to handover old TV to LG authorized
              dealer along with E-waste consent form. Exchange at dealer
              discretion basis condition of Old TV.
            </li>
            <li>
              Pay{" "}
              <strong>
                24% and rest in 24 easy EMI's (applicable only of Home
                Appliances)
              </strong>{" "}
              - 7 months Down Payment roughly comes to 23.5% Down Payments and
              remaining is 24 EMI's. This scheme is applicable only on select LG
              Home appliance and through Bajaj finance only. Pay Rs 1 and rest
              in easy EMI - in this customer can take home LG product without
              down payment and has to pay balance amount in EMI.EMI schemes
              under specific products only at the sole discretion of financer.{" "}
            </li>
            <li>
              <strong>Upto 17.5% Cashback</strong> (Max Rs. 10500) is applicable
              on select models &amp; products only at selected outlet/channels
              only. Kindly check with store manager for all Cashback offer
              related details before making purchase decision. LG has tie with
              the only the following banks cards - Credit Card EMI - HDFC/ICICI/
              AXIS/AMEX/SCB/BOB/CITI/SBI ; Debit Card EMI - HDFC/ICICI/ AXIS;
              Credit Card Non EMI - BOB/SBI.
            </li>
            <li>
              Min Transaction INR 20000 (except for select models of WPR/MWO/
              CAV which is model based/W30 Pro Mobile) and Rs.14000 for select
              REF DC models.{" "}
            </li>
            <li>
              For purchase of a product eligible under this offer, payment is
              allowed only from one card (single payment cannot be divided
              between two or more cards).{" "}
            </li>
            <li>
              Three transactions per card are allowed during period
              (April-June). Cash back should appear on charge slip for
              applicability.
            </li>
            <li>
              {" "}
              2% customers buy down in Debit Card EMI &amp; 1% in Credit Card
              EMI for 9 months &amp; above tenure. Rs. 199 + GST charge
              applicable on HDFC bank cards for EMI transactions. Only models
              mapped on normal cash back are eligible for cash back on Non EMI,
              Offer Valid on 6 months &amp; above tenure for HDFC/ICICI/SCB
              &amp; HDFC bank has additional 8/10 month EMI option available.
            </li>
            <li>
              Cash back will be posted to consumer account after 90 days from
              end of offer period. Cash back offer is not from LG Side and
              bank/finance Company is solely liable and LGEIL expressly
              disclaims any liability/responsibility in any manner whatsoever.
              Offers may not be available on purchase from any other e-commerce
              websites other than the order booked through LG Electronics India
              Pvt. Ltd.
            </li>
            <li>
              {" "}
              Official website www.lgbrandstore.com. Online brand store
              facilities are Available in select cities only. Prices Mentioned
              are Per Unit and Inclusive of Taxes. LG reserves the right to
              modify, alter, withdraw or extend all offers at any point of time
              without any prior notice or justification or correspondence.
            </li>
            <li>
              LG decision regarding all matters under offers shall be final and
              binding. By participating in offers, the customer agrees to all
              the above terms &amp; Conditions and shall be treated as deemed
              consent under Privacy Laws. Gifts cannot be redeemed for cash at
              any point of time. Products are available for Purchase without
              offers also.{" "}
            </li>
            <li>
              The images shown here are for representation only and may differ
              from actual product.
            </li>
            <li>
              {" "}
              All disputes are to be settled / adjudicated in Delhi Courts only.
              Please ask the retailer/store manager for detailed offers, gifts
              etc. before purchase. For more information, please visit
              www.lg.com/in.
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComponent;
