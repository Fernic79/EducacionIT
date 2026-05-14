
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//Importamos los componentes hijos
import PropStandard from '../Argumentos/PropStandard'
import PropDesestructurar from '../Argumentos/PropDesestructurar'
import PropDefault from '../Argumentos/PropDefault'
import PropSpread from '../Argumentos/PropSpread'


const PropsVarios = () => {

  const estudiante = {
    curso: "1er Año",
    carrera: "Programación",
    facu: "UTN"
  }

  return (
    <Container>
          <h1 className="text-center">Props Varios</h1>
          {/* Llamamos al primer componente */}
            <PropStandard nombre= "Pepe" rol= "Dev" />
            <PropDesestructurar pais= "Argentina" ciudad= "Buenos Aires" />
            <PropDefault nombre= "María" />
            {/*llamamos a la funcion del componente PropSpread y le pasamos el objeto estudiante usando el operador spread*/}
            <PropSpread {...estudiante} />
          <p>Esta es una página que muestra diferentes props.</p>
    </Container>
  )
}

export default PropsVarios