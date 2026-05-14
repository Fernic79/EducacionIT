
import { Card } from "react-bootstrap";
import BotonTodos from "./BotonTodos";

const PropStandard = ( props ) => {
  return (
    <Card className="text-center mb-3">
      {/*<Card.Header>{props.title}</Card.Header> */}
      <Card.Body>
        <h5 className="card-title">Componente Prop Standard</h5>
        <h2>{props.nombre}</h2>
        <p>{props.rol}</p>
        <p>Este componente recibe los datos de los argumentos.</p>
          {/* Llamamos al componente hijo */}
          <BotonTodos variante="danger" data="Borrar" />
        {/*<Card.Text>Recibe los datos de los argumentos.</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default PropStandard;