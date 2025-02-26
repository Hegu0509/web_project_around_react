import React from "react";
import line from "../../images/input_line.png";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser } = React.useContext(CurrentUserContext);
  const { handleUpdateUser } = React.useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios
    handleUpdateUser({ name, about: description }); // Actualiza la información del usuario
  };

  return (
    <form
      className="popup__form form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <fieldset className="form__fieldset">
        <div className="form__element">
          <input
            type="text"
            id="inputName"
            name="inputName"
            placeholder="Nombre"
            className="form__input"
            minLength="2"
            maxLength="40"
            required
            value={name}
            onChange={handleNameChange}
          />

          <img
            src={line}
            alt="Linea de caja de texto"
            className="form__input-line"
          />
          <span className="form__input-error inputTitle-error"></span>
        </div>

        <div className="form__element">
          <input
            type="text"
            id="inputAbout"
            name="inputAbout"
            placeholder="Acerca de mi"
            className="form__input"
            minLength="2"
            maxLength="200"
            required
            value={description}
            onChange={handleDescriptionChange}
          />

          <img
            src={line}
            alt="Linea de caja de texto"
            className="form__input-line"
          />
          <span className="form__input-error inputLink-error"></span>
        </div>

        <button type="submit" className="form__button" onClick={handleSubmit}>
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
