import { Link } from "react-router-dom";
import "./BannerItem.css";

const BannerItem = ({ item, isImageLeft }) => (
  <div
    className={`row align-items-center banner-row ${
      isImageLeft ? "image-left" : "image-right"
    }`}
  >
    {isImageLeft ? (
      <>
        <div className="col-md-4">
          <img src={item.img} alt={item.title} className="img-fluid rounded" />
        </div>
        <div className="banner-content col-md-8">
          <h5 className="banner-title text-center">{item.title}</h5>
          <span className="banner-text">{item.span}</span>
          <Link to={""} className="btn btn-primary btn-sm">
            Ver!
          </Link>
        </div>
      </>
    ) : (
      <>
        <div className="banner-content col-md-8">
          <h5 className="banner-title text-center">{item.title}</h5>
          <span className="banner-text">{item.span}</span>
          <Link to={""} className="btn btn-primary btn-sm">
            Ver!
          </Link>
        </div>
        <div className="col-md-4">
          <img src={item.img} alt={item.title} className="img-fluid rounded" />
        </div>
      </>
    )}
  </div>
);

export default BannerItem;
