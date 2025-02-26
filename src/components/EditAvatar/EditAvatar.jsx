import React from "react";
import line from "../../images/input_line.png";
import { useRef } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = React.useContext(CurrentUserContext);

  const handleAvatarChange = () => {
    avatarRef.current.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateAvatar(avatarRef);
  };

  return (
    <form
      className="popup__form form"
      name="card-form"
      id="edit-avatar-form"
      onChange={handleAvatarChange}
      noValidate
    >
      <fieldset className="form__fieldset">
        <div className="form__element">
          <input
            type="url"
            id="inputLink"
            name="inputLink"
            ref={avatarRef}
            placeholder="Enlace de la imagen"
            className="form__input"
            required
          />

          <img
            src={line}
            alt="Linea de caja de texto"
            className="form__input-line"
          />
          <span className="form__input-error inputTitle-error"></span>
        </div>

        <button type="submit" className="form__button" onClick={handleSubmit}>
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
