import { useSessionStorage } from "../hooks/useSessionStorage";
import myPokeListReducer from "../reducer/myPokeListReducer";
import { createContext, useReducer, useEffect } from "react";

export const MyPokeListContext = createContext();

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
      state && setLocalState([...state, catched]);
    },
  };

  return (
    <MyPokeListContext.Provider value={{ state, dispatcher }}>
      {children}
    </MyPokeListContext.Provider>
  );
}
