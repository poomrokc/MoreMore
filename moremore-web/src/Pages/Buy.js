import React from "react";
import { Col,Row,Button } from "react-bootstrap";

const Buy = () => (
  <div>
    <br/>
    <br/>
    <Row>
    <Col sm={2}/>
    <Col sm={2}>
    <p align="left">Order Summary</p>
    <p align="left"> TU100 &nbsp;&nbsp;&nbsp; 20 บาท</p>
    <p align="left"> ค่าธรรมเนียม &nbsp;&nbsp;&nbsp; 5 บาท</p>
    <p align="left"> รวม &nbsp;&nbsp;&nbsp; 25 บาท</p>
    <br/>
    <br/>
    <p align="left">เลือกการชำระเงิน</p>
    <p align="left">True Wallet</p>
    <br/>
    <Button>ยืนยัน</Button>
    </Col>
    </Row>
  </div>
);

export default Buy;