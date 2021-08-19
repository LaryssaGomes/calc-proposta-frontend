import React from "react";
import "./styles.scss";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
export default class FormRegisterProposal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      items: [
        {
          consumption: "",
          charge: "",
        },
      ],
      consumption: "",
      charge: "",
    };
  }
  // Obtendo o cadastro de cargas
  onConsumption = (event) => {
    this.setState({ consumption: event.target.value });
  };

  onCharge = (event) => {
    this.setState({ charge: event.target.value });
  };

  pushToItems = (event) => {
    event.preventDefault();

    this.setState({
      items: [
        ...this.state.items,
        {
          consumption: this.state.consumption,
          charge: this.state.charge,
        },
      ],
      consumption: "",
      charge: "",
      show: (this.state.show = false),
    });
  };

  removeFromItems = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    // Limitando a data de cadastro
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var currentDate = year + "-" + "0" + month;

    month = month + 1;

    if (month == 13) {
      month = 1;
      year = year + 1;
    }
    var minimumDate = year + "-" + "0" + month;

    return (
      <Form className="form-register">
        <div>
          <h1>Cadastro de proposta</h1>
          <Row className="mb-3" id="dates-submarket">
            <Form.Group as={Col} md="4">
              <Form.Label>Data inicio</Form.Label>
              <Form.Control type="month" min={currentDate} required />
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Data de termino</Form.Label>
              <Form.Control type="month" min={minimumDate} required />
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Submercado</Form.Label>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row id="row-media">
            <Col md="8">
              <Row id="register-charge">
                <Col className="title">Lista de Cargas</Col>
                <Col>
                  <Button
                    className="add-list-charge"
                    variant="primary"
                    onClick={() =>
                      this.setState({ show: (this.state.show = true) })
                    }
                  >
                    Adicionar Carga
                  </Button>

                  <Modal
                    className="modal-add-charge"
                    show={this.state.show}
                    onHide={() =>
                      this.setState({ show: (this.state.show = false) })
                    }
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Cadastro de carga</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Row className="mb-4">
                          <Form.Group as={Col} md="6">
                            <Form.Label>Carga</Form.Label>
                            <Form.Control type="text" onBlur={this.onCharge} />
                          </Form.Group>
                          <Form.Group as={Col} md="6">
                            <Form.Label>Consumo</Form.Label>
                            <Form.Control
                              type="text"
                              onBlur={this.onConsumption}
                            />
                          </Form.Group>
                        </Row>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() =>
                          this.setState({ show: (this.state.show = false) })
                        }
                      >
                        Fechar
                      </Button>
                      <Button variant="primary" onClick={this.pushToItems}>
                        Salvar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              </Row>
              <Row>
                <div className="list-charge mb-3">
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>
                        <div className="text">
                          <div>
                            <p>
                              <span>Carga:</span>

                              {item.charge}
                            </p>
                          </div>
                          <div>
                            <p>
                              <span>Consumo:</span> {item.consumption}
                            </p>
                          </div>
                        </div>
                        <div className="icon">
                          <span className="bstrash">
                            <BsTrash
                              index={index}
                              onClick={this.removeFromItems}
                            />
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Row>
            </Col>
            <Col md="4" className="line-2-right">
              <Form.Group>
                <Form.Label>Fonte de energia</Form.Label>
                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                  <option value="0">Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Valor</Form.Label>
                <Form.Control disabled="" value="R$" />
              </Form.Group>
            </Col>
          </Row>
          <div className="save">
            <Button>Salvar Proposta</Button>
          </div>
        </div>
      </Form>
    );
  }
}
