import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <>
      <Header titulo="Galería de Imágenes con React" />
      <Container>
        <Row>
          <Col>
            <Card imagen="https://placedog.net/500" titulo="Perro chico" descripcion="Este es un perro que conocimos la semana pasada" />
          </Col>
          <Col>
            <Card imagen="https://placedog.net/501" titulo="Perro amigable" descripcion="Este es un perro que quisimos fotografiar" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card imagen="https://placedog.net/502" titulo="Perro encantador" descripcion="Este es un muy buen perro" />
          </Col>
          <Col>
            <Card imagen="https://placedog.net/503" titulo="Perro grande" descripcion="Este perro era desconocido para nsotros hasta el día dbe ayer" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card imagen="https://placedog.net/504" titulo="Perro hermano" descripcion="Este es un perro que tenía una hermana" />
          </Col>
          <Col>
            <Card imagen="https://placedog.net/505" titulo="Perro hermana" descripcion="Esta perrita tiene un hermano con el cual pasean" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default App;
