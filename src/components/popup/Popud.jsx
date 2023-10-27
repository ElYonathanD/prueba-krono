import { useEffect } from 'react'
import './styles.css'
import { useState } from 'react'

const Popud = () => {
    const [showPopup, setShowPopup] = useState(false)
    useEffect(()=>{
        setShowPopup(true)
    }, [])
  return (

    <>
        {showPopup && 
        <section className='popup'>
            <article className='container-popup'>
                <img className='img-crocs' src="images/Crocs-img.png" alt="Crocs de colores" />
                <div className='info-form'>
                    <button onClick={()=> setShowPopup(false)} className='btn-close-popup'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#000000" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                    </button>
                    <h2>¡Suscribete a las novedades de nuestro club Crocs</h2>
                    <p>Obtén envío gratis en la compra de tus primeros Crocs</p>
                    <form >
                        <input className='input-email' type="email" name="email" placeholder="Ingresa tu correo" required/>
                        <br />
                        <div className='autorization'>
                            <input type="checkbox" name="data-treatment" required/>
                            <label >Autorizo el tratamiento de mis datos personales</label>                       
                        </div>
                        <button className='btn-suscribe'>Suscribirme</button>
                    </form>
                    <p>Mantente al dia con nuestras ofertas imperdibles</p>
                </div>
            </article>
        </section>
        }
    </>
  )
}

export default Popud