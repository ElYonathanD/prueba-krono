import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './styles.css';

const settings = {
  dots: true,
  infinite: true,
  autoplay:true,
  autoplaySpeed:4000,
  pauseOnHover:true,
};

const PublicityCarousel = ()=> {
  return (
    <div className="containerCarousel">
      <Slider className="slider" {...settings}>
      <figure className="figure-carousel">
           <img src="https://invictamexico.com/cdn/shop/files/MAS_DE_MIL_MODELOS__banner-principal-desk-1920x650.jpg?v=1698240844" />
         </figure>
         <figure className="figure-carousel">
           <img src="https://invictamexico.com/cdn/shop/files/banner_mexico_banner-principal-desk-1920x650_copia_616847a2-b13a-4606-a627-129b63294826.jpg?v=1698100973" />
         </figure>
         <figure className="figure-carousel">
           <img src="https://invictamexico.com/cdn/shop/files/FLASH_SALE_banner-principal-desk-1920x650.jpg?v=1698156154" />
         </figure>
         <figure className="figure-carousel">
           <img src=" https://invictamexico.com/cdn/shop/files/HASTA_70_OFF_banner-principal-desk-1920x650_copia.jpg?v=1696286584" />
         </figure>
         <figure className="figure-carousel">
           <img src=" https://invictamexico.com/cdn/shop/files/DESDE_999_banner-principal-desk-1920x650_copia_960d7454-f3ec-42da-8e17-940b92687f3a.jpg?v=1698248316" />
         </figure>
         <figure className="figure-carousel">
           <img src=" https://invictamexico.com/cdn/shop/files/jm_banner_mexico_banner-prin-1920x600.jpg?v=1696978648" />
         </figure> 
      </Slider>
    </div>
  );
}

export default PublicityCarousel;
