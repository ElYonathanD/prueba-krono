import './styles.css'
import featured from '../../data/featured.js'
const Featured = () => {
  return (
    <section>
        <h2 className='title-featured'>
            Relojes destacados
        </h2>
        <article className='container-featured'>
          {featured.map(item =>(
            <div key={item.id} className='item-featured'>
              <a href="#">
                <img className='img-item-featured' src={item.img} alt={item.name} />
                <h3>{item.discount}%</h3>
                <h2>{item.name}</h2>
                <p className='price-before'>Antes ${item.price}</p>
                <p className='price-now'>Ahora ${item.price - (item.discount*item.price)/100 }</p>
              </a>
              <button className='btn-add-car'>Agregar al carrito</button>
            </div>
          ))}
        </article>
    </section>
  )
}

export default Featured