
import { Card } from "react-bootstrap";
//importamos a otro componente hijo
import BotonTodos from "./BotonTodos";

const PropDesestructurar = ({ pais, ciudad }) => {
  return (
    <Card className="text-center mb-3">
      <Card.Header>{pais}</Card.Header>
      <Card.Body>
        <Card.Title>Componente Prop Desestructurar</Card.Title>
        <Card.Text>{ciudad}</Card.Text>
        {/* Llamamos al componente hijo */}
        <BotonTodos variante="primary" data="comprar" />
      </Card.Body>
    </Card>
  );
};

export default PropDesestructurar;