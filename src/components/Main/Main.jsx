import NewCard from "../NewCard/NewCard";
import Popup from "./components/Popup/Popup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import avatar from "../../images/avatar.png";
import pen from "../../images/icons/pen.png";
import editButton from "../../images/icons/edit.svg";
import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile" id="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img
              src={avatar}
              alt="Foto de Jacques Cousteau"
              className="profile__avatar"
            />
            <div className="overlay">
              <img
                src={pen}
                alt="Icono editar foto"
                className="profile__avatar-icon"
                onClick={() => handleOpenPopup(editAvatarPopup)}
              />
            </div>
          </div>

          <div className="profile__info-column">
            <div className="profile__info-row">
              <p className="profile__info-name">Jacques Cousteau</p>
              <button
                className="profile__info-edit-button"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              >
                <img src={editButton} alt="Icono editar" />
              </button>
            </div>

            <p className="profile__info-occupation">Explorador</p>
          </div>
        </div>
        <button
          className="profile__info-add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          +
        </button>
      </section>

      <section>
        <ul className="place-grid">
          {cards.map((card) => (
            <Card onClick={handleOpenPopup} key={card._id} card={card} />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
