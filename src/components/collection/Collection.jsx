import './styles.css'

const Collection = () => {
  return (
    <section className='section-collection'>
        <img className='img-collection' src="images/Reloj-bold.png" alt="Reloj negro coleccion Bold" />
        <article className='description'>
            <h2>
                Bolt
            </h2>
            <p>
                Colección <span className='invicta-bolt'>Invicta Bolt</span>: ¡Más que solo relojes, es una declaración de actitud y destreza!
                Esta es una de las colecciones más icónicas de Invicta, reconocida por su diseño robusto,
                una paleta de colores impresionante y una diversidad incomparable de estilos.
                Pero lo que realmente distingue a la colección Bolt son sus característicos pernos visibles en la caja y la correa,
                agregando un toque de audacia a su estética. Atrévete a destacar con el inconfundible estilo de Invicta Bolt ¡Compra el tuyo ahora!
            </p>
            <a className='btn-collection'>
                Ver más
            </a>
        </article>
    </section>
  )
}

export default Collection