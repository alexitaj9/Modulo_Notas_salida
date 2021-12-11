import React, { useState } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

export default function Usuarios() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    
      <Container className="border my-5 p-4 shadow">
        <Form>
          <header className="mb-3 text-center text-primary">
            <h1>REGISTRO DE USUARIOS</h1>
          </header>
          <Row>
            <Form.Group className="col-sm mb-3">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="John"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="col-sm mb-3">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                placeholder="Doe"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="col-sm mb-3">
              <label htmlFor="identificacion">Identificación</label>
              <input
                type="text"
                name="identificacion"
                id="identificacion"
                placeholder="cc"
                value={identificacion}
                onChange={(e) => setIdentificacion(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-sm mb-3">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                name="telefono"
                id="telefono"
                placeholder="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="col-sm mb-3">
              <label htmlFor="centroCosto">Centro de costo</label>
              <select>
                <option value="proyecto1">Proyecto 1</option>
                <option value="proyecto2">Proyecto 2</option>
                <option selected value="proyecto3">
                  Proyecto 3
                </option>
                <option value="proyecto4">Proyecto 3</option>
              </select>
            </Form.Group>
            <Form.Group className="col-sm mb-3">
              <label htmlFor="rol">Rol de usuario</label>
              <select>
                <option value="admin">Administrador</option>
                <option value="usuario">Usuario</option>
                <option selected value="administrativo">
                  Administrativo
                </option>
                <option value="operativo">Operativo</option>
              </select>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="col-sm mb-6">
              <label htmlFor="correo">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="col-sm mb-6">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Form.Group>
          <Button className="btn-block" type="submit">
            Cancelar
          </Button>
          <Button className="btn-block" type="submit">
            Registrar
          </Button>
          </Form.Group>
        </Form>
      </Container>
   
  );
}
