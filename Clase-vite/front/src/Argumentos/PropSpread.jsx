
import { Card } from "react-bootstrap";
import BotonTodos from "./BotonTodos";

const PropSpread = ({ curso, carrera, facu }) => {
  return (
    <Card className="text-center mb-3">
      <Card.Body>
        <Card.Title>Componente Prop Spread</Card.Title>
        <Card.Text>
          <p>Curso: {curso}</p>
          <p>Carrera: {carrera}</p>
          <p>Facultad: {facu}</p>
          <p>Este componente recibe props: {JSON.stringify({ curso, carrera, facu })}</p>
        </Card.Text>
        <BotonTodos variante="primary" data="Spread" />
      </Card.Body>
    </Card>
  );
};

export default PropSpread;