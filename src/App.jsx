import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Section } from './components/section'
import { Footer } from './components/footer'
import img1 from './assets/nosotros.jpeg'
import img2 from './assets/servicio.jpeg'
import img3 from './assets/contratar.jpeg'
import img4 from './assets/galeria1.jpeg'
import img5 from './assets/galeria2.jpeg'
import wpp from './assets/wpp.png'
import './css/article.css'
import Carousel from 'react-bootstrap/Carousel';
function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Section name="NNOSOTROS" id="nosotros" />
      <div className="article-container">
        <img src={img1} alt="" />
        <div className="article-txt">
          <h1>Sobre nosotros</h1>
          <p>
            Nuestro servicio de alquiler de vajillas para meriendas y desayunos tiene como objetivo principal la creación de mesas elegantes y originales que realzan tus momentos especiales.
          </p>
          <p>
            Como emprendedora, este camino no ha sido sencillo, ya que implicó invertir recursos sin tener certeza sobre el éxito de esta idea. Sin embargo, estoy emocionada por el resultado hasta ahora, ya que hemos tenido una gran respuesta de nuestros clientes.

          </p>
          <p>

          Estamos comprometidos en seguir creciendo y ofreciendo experiencias únicas en cada merienda. Gracias por ser parte de nuestro emocionante viaje.

          </p>
        </div>
      </div>
      <Section name="SERVICIO" id="servicio" />
      <div className="article-container">
        <div className="article-txt">
          <h1>Incluye</h1>
          <p>
            Por persona:
            <br />
            - Taza y plato<br />
            - Plato de postre<br />
            - Cuchara<br />
            - Plato de sitio<br />
            - Copa<br />
            - Servilletas<br />
            - Tetera<br />
            - Azucarera<br />
            - Bandejas para comida<br />
            - Jarras termicas<br />
            - Jarra para bebida fria<br />
            - Centro de mesa<br />
            - Manteleria
          </p>
        </div>
        <img src={img2} alt="" />
      </div>
      <Section name="GALERIA" id="galeria" />
      <div className="article-container p-0">
      <Carousel>
      <Carousel.Item interval={1200}>
        <img src={img1} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={1200}>
      <img src={img2} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
      <img src={img3} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
      <img src={img4} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1200}>
      <img src={img5} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <Section name="CONTACTO" id="contacto" />
      <div className="article-container ">
      <img src={img3} alt="" />
        <div className="article-txt">
          <p>
            Este servicio incluye armado y presentacion de mesa horas previas al evento. Horario a acordar segun disponibilidad.
          </p>
          <p>
            Se solicitara una seña del 50% de la totalidad del Alquiler y el resto a abonar al inicio de la preparacion de mesa del evento.
          </p>
          <p>En caso de ruptura o faltante de alguno de los objetos, se debera abonar un monto correspondiente a c/u.</p>
          <p>
            Una vez finalizado el evento nos encargaremos del retirado y lavado de vajilla.
          </p>
          <p>VALOR POR PERSONA $1000</p>
          <div className='wpp'>
            <button className='btn-wpp'>
              <a href="https://www.wa.link/274q6n" target='blank'>
                CONTACTAR
              </a>
              </button>
            <img src={wpp} alt=""/>
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default App
