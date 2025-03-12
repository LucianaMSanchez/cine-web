import BannerItem from "../BannerItem/BannerItem";
import "./BottomBanner.css";

const items = [
  {
    id: 1,
    title: "Comidas & Bebidas",
    img: "https://www.shutterstock.com/image-vector/popcorn-drink-filmstrip-600nw-69929482.jpg",
    span: "Disfruta de la comodidad de ordenar desde tu móvil. Simplemente haz tu pedido antes de la película y estará listo a la hora seleccionada cuando llegues. ¡Sáltate la fila y disfruta del espectáculo!",
  },
  {
    id: 2,
    title: "Asientos VIP",
    img: "https://img.freepik.com/premium-vector/vip-member-golden-emblem_79145-245.jpg?semt=ais_hybrid",
    span: "Prepárate para disfrutar las películas como nunca antes. Vive la experiencia de los asientos VIP con toda la tecnología mejorada que te espera. ¡Prometemos el mejor espectáculo!",
  },
  {
    id: 3,
    title: "Ofertas Especiales",
    img: "https://img.freepik.com/premium-vector/special-weekend-deals-promotional-ecommerce-offer-design-marketing-symbol_1280603-2568.jpg",
    span: "Todos los fines de semana antes de las 4 p.m., las entradas de cine tienen un 25% de descuento sobre el precio base. ¡Siempre es un buen momento del día para ver una película y ahorrar!",
  },
];

const BottomBanner = () => {
  return (
    <div className="bottom-banner">
      <div className="container">
        {items.map((item, index) => (
          <BannerItem key={item.id} item={item} isImageLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default BottomBanner;
