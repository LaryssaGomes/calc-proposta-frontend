import React from "react";
import "./styles.scss";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLightningFill } from "react-icons/bs";
export default class CardProposal extends React.Component {
  render() {
    return (
      <div className="cards-proposal-container">
        <Card style={{ width: "18rem" }} className="mb-3">
          <Card.Body>
            <Card.Title> Periodo</Card.Title>
            <Card.Text>Some quick example text</Card.Text>
            <Row>
              <Col>
                <Card.Title>Fonte de energia</Card.Title>
                <Card.Text>Some quick</Card.Text>
              </Col>
              <Col>
                <Card.Title> Submercado </Card.Title>
                <Card.Text>Some quick</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Title>R$ 100.000,00</Card.Title>
              </Col>
              <Col>
                <span className="icon">
                  <BsLightningFill />
                </span>
              </Col>
            </Row>
            <Col className="buttons">
              <button className=" btn-delete">Excluir</button>
              <button className=" btn-hire">Contratar</button>
            </Col>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
