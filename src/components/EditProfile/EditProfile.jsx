import line from "../../images/input_line.png";
export default function EditProfile() {
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
          />

          <img
            src={line}
            alt="Linea de caja de texto"
            className="form__input-line"
          />
          <span className="form__input-error inputLink-error"></span>
        </div>

        <button type="submit" className="form__button">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
