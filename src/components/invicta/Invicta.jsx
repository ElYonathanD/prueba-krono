import './styles.css'

const Invicta = () => {
  return (
    <section className="section-invicta">
      <div className='container-img'>
        <img className='img-watches' src="images/Invicta-dorado.png" alt="Dos relejes dorados" />
      </div>
        <div className='info-invicta'>
            <img src="images/Logo-negro.png" alt="Logo de invicta" />
            <p>
                Con más de 100 ubicaciones en todo el mundo,
                es fácil disfrutar de la mejor experiencia de comprar en línea en las <b>tiendas Invicta.</b> 
                Exhibiendo la mayor selección de relojes y accesorios,
                compra los últimos estilos para agregar a tu colección con precios y ofertas invencibles como nuestras ofertas para papá.
                Con el servicio legendario de nuestro equipo de expertos en relojes, te invitamos a ingresar al mundo de Invicta: Invencible en detalle.
            </p>
            <a href="#" className='btn-collection'>Ver más</a>
        </div>
    </section>
  )
}

export default Invicta