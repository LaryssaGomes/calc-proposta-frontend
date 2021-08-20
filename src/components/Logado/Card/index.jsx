import React from "react";
import "./styles.scss";
import { Card, Col, Row, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLightningFill } from "react-icons/bs";

export default class CardProposal extends React.Component {
  render() {
    return (
      <>
        <div className="home-title">
          <Card.Title>Lista de propostas</Card.Title>
        </div>

        <div className="cards-proposal-container" id="scroll">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title> Periodo</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>Fonte de energia</Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
                <Col>
                  <Card.Title> Submercado </Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
              </Row>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>R$ 100.000,00</Card.Title>
                </Col>
                <Col>
                  <span className="icon">
                    <BsLightningFill /> Lista de cargas
                    <div id="items-change">dado</div>
                  </span>
                </Col>
              </Row>
              <Col className="buttons">
                <Button variant="primary">Contratado</Button>
              </Col>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title> Periodo</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>Fonte de energia</Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
                <Col>
                  <Card.Title> Submercado </Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
              </Row>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>R$ 100.000,00</Card.Title>
                </Col>
                <Col>
                  <span className="icon">
                    <BsLightningFill /> Lista de cargas
                    <div id="items-change">dado</div>
                  </span>
                </Col>
              </Row>
              <Col className="buttons">
                <Button variant="primary">Contratado</Button>
              </Col>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title> Periodo</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>Fonte de energia</Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
                <Col>
                  <Card.Title> Submercado </Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
              </Row>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>R$ 100.000,00</Card.Title>
                </Col>
                <Col>
                  <span className="icon">
                    <BsLightningFill /> Lista de cargas
                    <div id="items-change">
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Carga</th>
                            <th>Consumo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </span>
                </Col>
              </Row>
              <Col className="buttons">
                <Button variant="primary">Contratado</Button>
              </Col>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title> Periodo</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>Fonte de energia</Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
                <Col>
                  <Card.Title> Submercado </Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
              </Row>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>R$ 100.000,00</Card.Title>
                </Col>
                <Col>
                  <span className="icon">
                    <BsLightningFill /> Lista de cargas
                    <div id="items-change">dado</div>
                  </span>
                </Col>
              </Row>
              <Col className="buttons">
                <Button variant="primary">Contratado</Button>
              </Col>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title> Periodo</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>Fonte de energia</Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
                <Col>
                  <Card.Title> Submercado </Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
              </Row>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>R$ 100.000,00</Card.Title>
                </Col>
                <Col>
                  <span className="icon">
                    <BsLightningFill /> Lista de cargas
                    <div id="items-change">dado</div>
                  </span>
                </Col>
              </Row>
              <Col className="buttons">
                <Button variant="primary">Contratado</Button>
              </Col>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title> Periodo</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>Fonte de energia</Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
                <Col>
                  <Card.Title> Submercado </Card.Title>
                  <Card.Text>Some quick</Card.Text>
                </Col>
              </Row>
              <Row className="item-fonte">
                <Col>
                  <Card.Title>R$ 100.000,00</Card.Title>
                </Col>
                <Col>
                  <span className="icon">
                    <BsLightningFill /> Lista de cargas
                    <div id="items-change">
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Carga</th>
                            <th>Consumo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </span>
                </Col>
              </Row>
              <Col className="buttons">
                <Button variant="primary">Contratado</Button>
              </Col>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
