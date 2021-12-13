import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

class NotasSalidas extends React.Component {
    //Render
    render() {
        return (
            <Container className="border my-5 p-4 shadow">
                <Form onSubmit={this.handleSubmit}>
                    <header className="mb-3 text-center text-primary">
                        <h1>Registro Nota de Salida</h1>
                    </header>
                    <Form.Group className="mb-3">
                        <Form.Label>Tangible</Form.Label>
                        <Form.Control type="text" placeholder="Tangible" />
                    </Form.Group>
                    <Row>
                        <Form.Group className="col-sm mb-3">
                            <Form.Label>Fecha Salida</Form.Label>
                            <Form.Control type="date" placeholder="Fecha Salida" />
                        </Form.Group>
                        <Form.Group className="col-sm mb-3">
                            <Form.Label>Estado Retiro</Form.Label>
                            <Form.Control as="select">
                                <option value="false">No Retirado</option>
                                <option value="true">Retirado</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="col-sm mb-3">
                            <Form.Label>¿Retorna?</Form.Label> <br />
                            <Form.Control as="select">
                                <option value="true">Si</option>
                                <option value="false">No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="col-sm mb-3">
                            <Form.Label>Fecha Retorno</Form.Label>
                            <Form.Control type="date" placeholder="Fecha Salida" />
                        </Form.Group>
                        <Form.Group className="col-sm mb-3">
                            <Form.Label>Estado Retorno</Form.Label>
                            <Form.Control as="select">
                                <option value="false">No Retornado</option>
                                <option value="true">Retornado</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="col-sm mb-3">
                            <Form.Label>Usuario Autorizador</Form.Label>
                            <Form.Control as="select">
                                <option value="usuario1">Usuario 1</option>
                                <option value="usuario2">Usuario 2</option>
                                <option value="usuario3">Usuario 3</option>
                                <option value="usuario4">Usuario 4</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="col-sm mb-3">
                            <Form.Label>Usuario quien retira</Form.Label>
                            <Form.Control as="select">
                                <option value="usuario1">Usuario 1</option>
                                <option value="usuario2">Usuario 2</option>
                                <option value="usuario3">Usuario 3</option>
                                <option value="usuario4">Usuario 4</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Observaciones</Form.Label>
                        <Form.Control as="textarea" row={5} placeholder="Observaciones" />
                    </Form.Group>
                    <Form.Group>
                        <Button className="btn-block" type="submit">
                            Registrar
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default NotasSalidas;