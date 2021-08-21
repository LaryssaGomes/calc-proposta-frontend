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
          {this.props.proposals.map((index, proposal) => {
            return (
              <Card className="mb-3" key={index}>
                <Card.Body>
                  <Card.Title>Periodo</Card.Title>
                  <Card.Text>
                    {proposal.data_inicio} - {proposal.data_fim}
                  </Card.Text>
                  <Row className="item-fonte">
                    <Col>
                      <Card.Title>Fonte de energia</Card.Title>
                      <Card.Text>{proposal.fonte_energia}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Title> Sub-mercado </Card.Title>
                      <Card.Text>{proposal.submercado}</Card.Text>
                    </Col>
                  </Row>
                  <Row className="item-fonte">
                    <Col>
                      <Card.Title>R$ {proposal.valor_proposta}</Card.Title>
                    </Col>
                    <Col>
                      <span className="icon">
                        <BsLightningFill /> Cargas
                        <div id="items-change">
                          <Table striped bordered hover size="sm">
                            <thead>
                              <tr>
                                <th>Carga</th>
                                <th>Consumo</th>
                              </tr>
                            </thead>
                            <tbody>
                              {proposal.cargas.map((index, carga) => {
                                return (
                                  <tr key={index}>
                                    <td>{carga.title}</td>
                                    <td>{carga.consumo}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </div>
                      </span>
                    </Col>
                  </Row>
                  {proposal.contratada ? (
                    <Col className="buttons">
                      <Button variant="primary">Contratado</Button>
                    </Col>
                  ) : (
                    <Col className="buttons">
                      <Button
                        onClick={(e) =>
                          this.props.removeProposal(e.target.value)
                        }
                        value={proposal.id_publico}
                      >
                        Fechar
                      </Button>
                      <Button
                        variant="primary"
                        onClick={(e) =>
                          this.props.contractProposal(e.target.value)
                        }
                        value={proposal.id_publico}
                      >
                        Contratar
                      </Button>
                    </Col>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </>
    );
  }
}
