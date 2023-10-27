import PublicityCarousel from "./components/carousel/PublicityCarousel";
import Collection from "./components/collection/Collection";
import CustomerOpinions from "./components/customer-opinions/CustomerOpinions";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import InvictaOffers from "./components/invicta-offers/InvictaOffers";
import Invicta from "./components/invicta/Invicta";
import ListCollection from "./components/list-collection/ListCollection";
import Navbar from "./components/navbar/Navbar";
import Popud from "./components/popup/Popud";
import WrapperAnnouncement from "./components/wrapper/WrapperAnnouncement";

const itemsWrapper = [
  { text: "EVITA EL RIESGO DE COMPRAR FALSIFICACIONES, TE INVITAMOS A COMPRAR EN NUESTRA TIENDA OFICIAL " },
  { text: "3 AÑOS DE GARANTIA INVICTA " },
  { text: "ÚNICOS DISTRIBUIDORES OFICIALES EN MÉXICO " },
  { text: "SEGURIDAD EN TU COMPRA "}
];

function App() {
  return (
    <>
      <header>
        <WrapperAnnouncement items={itemsWrapper} />
        <Navbar />
      </header>
      <PublicityCarousel />
      <InvictaOffers />
      <Collection />
      <Featured />
      <ListCollection />
      <Invicta />
      <CustomerOpinions />
      <Popud/>
      <Footer />
    </>
  );
}

export default App;
