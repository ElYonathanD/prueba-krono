import opinions from '../../data/opinions.js'
import './styles.css'

const CustomerOpinions = () => {
  return (
    <section className='section-opinions'>
        <h2>Dejamos que los clientes sean quienes hablen por nosotros</h2>
        <article className='opinions'>
            {
                opinions.map(opinion =>(
                    <div key={opinion.id} className='opinion'>
                        <h3>{opinion.title}</h3>
                        <p>{opinion.text}</p>
                        <p className='autor'>{opinion.autor}</p>
                        <p>{opinion.product}</p>
                    </div>
                ))
            }
        </article>
    </section>
  )
}

export default CustomerOpinions