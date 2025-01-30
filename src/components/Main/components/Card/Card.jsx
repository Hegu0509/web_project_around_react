import trashIcon from "../../../../images/icons/trash.svg";
import ImagePopup from "../ImagePopup/ImagePopup";
export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const imageComponent = {
    title: null,
    children: <ImagePopup card={props.card} />,
  };

  return (
    <li className="place-grid__element">
      <img
        src={trashIcon}
        alt="Icono Eliminar"
        className="place-grid__element-icon-trash"
      />

      <img
        className="place-grid__element-image"
        src={link}
        alt=""
        onClick={() => props.onClick(imageComponent)}
      />
      <div className="place-grid__element-row">
        <p className="place-grid__element-text">{name}</p>
        <div className="place-grid__element-column">
          <button
            className="place-grid__element-icon-like"
            type="button"
          ></button>
          <span className="place-grid__element-counter-like">0</span>
        </div>
      </div>
    </li>
  );
}
