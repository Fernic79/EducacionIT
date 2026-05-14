
import { Button } from "react-bootstrap";

const BotonTodos = ({ variante, data }) => {
  return (
    <Button variant={variante} className="mt-5">
      {data}
    </Button>
  );
};

export default BotonTodos;