import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import api from "./../utils/api";

import { CurrentUserContext } from "./../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        // console.log(user);
        setCurrentUser(user);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        // console.log(res);
        setCards(res);
      })
      .catch(console.error);
  }, []);

  function handleUpdateUser(user) {
    api.updateUser(user).then((newUser) => {
      setCurrentUser(newUser);
      handleClosePopup();
    });
  }

  function handleUpdateAvatar(avatar) {
    api
      .updateAvatar(avatar)
      .then((updateUser) => {
        setCurrentUser(updateUser);
      })
      .then(() => {
        handleClosePopup();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => {
        handleClosePopup();
      })
      .catch((error) => {
        console.log("Invalid", error);
      });
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          popup,
          cards,
          handleUpdateUser,
          handleUpdateAvatar,
          handleCardLike,
          handleCardDelete,
          handleAddPlaceSubmit,
        }}
      >
        <div className="page">
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
          />
          <Footer />
          <script type="module" src="./index.js"></script>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
