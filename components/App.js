import { useSessionStorage } from "../hooks/useSessionStorage";
import myPokeListReducer from "../reducer/myPokeListReducer";
import { createContext, useReducer, useEffect, useState } from "react";

export const MyPokeListContext = createContext();
export const ModalContext = createContext();

export default function App({ children }) {
  const [localState, setLocalState] = useSessionStorage("data", []);

  const [state, dispatch] = useReducer(myPokeListReducer, localState);

  const dispatcher = {
    removePokemon: function (date) {
      const remove = {
        date: date,
      };
      dispatch({
        type: "REMOVE_ITEM",
        payload: remove,
      });
      state && setLocalState(state.filter((item) => item.date !== date));
    },
    catchPokemon: function (id, image, name, nick) {
      const catched = {
        nick: nick,
        name: name,
        image: image,
        id: id,
        date: Date.now(),
      };
      dispatch({
        type: "ADD_ITEM",
        payload: catched,
      });
      state !== null
        ? setLocalState([...state, catched])
        : setLocalState([catched]);
    },
  };

  const [modalState, setModalState] = useState(false);

  const modalDispatcher = {
    toggleModal: function () {
      setModalState(!modalState);
    },
  };

  return (
    <MyPokeListContext.Provider value={{ state, dispatcher }}>
      <ModalContext.Provider value={{ modalState, modalDispatcher }}>
        {children}
      </ModalContext.Provider>
    </MyPokeListContext.Provider>
  );
}
