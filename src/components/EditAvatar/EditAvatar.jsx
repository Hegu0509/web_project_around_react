import line from "../../images/input_line.png";
export default function EditAvatar() {
  return (
    <form
      className="popup__form form"
      name="card-form"
      id="edit-avatar-form"
      noValidate
    >
      <fieldset className="form__fieldset">
        <div className="form__element">
          <input
            type="url"
            id="inputLink"
            name="inputLink"
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

        <button type="submit" className="form__button">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
