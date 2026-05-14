
import { Card } from "react-bootstrap";
import BotonTodos from "./BotonTodos";

const PropDefault = ({ nombre, rol = "user" }) => {
  return (
    <Card className="text-center mb-3">
      <Card.Body>
        <Card.Title>Componente Prop Default</Card.Title>
        <Card.Text>
          <p>Nombre: {nombre}</p>
          <p>Rol: {rol}</p>
          <p>Este componente recibe props: {JSON.stringify({ nombre, rol })}</p>
        </Card.Text>
        <BotonTodos variante="primary" data="Default" />
      </Card.Body>
    </Card>
  );
};

export default PropDefault;