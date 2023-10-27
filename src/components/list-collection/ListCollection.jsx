import collections from '../../data/collections.js'
import './styles.css'

const ListCollection = () => {
  return (
    <>
        <section >
            <h2 className='title-collections-invicta'>escoge tu estilo invicta</h2>
            <div className='collections-invicta'>
                {
                    collections.map(collection =>(
                        <div key={collection.id} className='item-collection'>
                            <a href="#">
                                <img src={collection.img} alt={collection.collection} />
                                <p className='name-collection'>{collection.collection}</p>
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
        <section >
            <h2 className='title-collections-invicta'>colecciones</h2>
            <article className='other-collections'>
                <div className='collection'>
                    <a href="#">
                        <img src="images/collection1.png" alt="Tres relejos de collecion aviator" />
                        <p>Relojes colección aviator desde $1,500</p>
                    </a>
                </div>
                <div className='collection'>
                    <a href="#">
                        <img src="images/collection2.png" alt="Reloj automatico dorado" />
                        <p>Relojes automaticos desde $2,599</p>
                    </a>
                </div>
                <div className='collection'>
                    <a href="#">
                        <img src="images/collection3.png" alt="Reloj bold naranja" />
                        <p>Colección bold hasta 70%off</p>
                    </a>
                </div>
            </article>
        </section>
    </>
  )
}

export default ListCollection