import { useState } from "react";
import trash from "../images/icons/trash.svg";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />

        <script type="module" src="./index.js"></script>
      </div>
    </>
  );
}

export default App;
