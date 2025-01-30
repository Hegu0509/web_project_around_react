import logo from "../../images/logo_around.svg";
import lineHeader from "../../images/line_header.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logotipo Around US" className="header__logo" />
      <img
        src={lineHeader}
        alt="Linea para el encabezado"
        className="header__line"
      />
    </header>
  );
}
