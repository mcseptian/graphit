export default function myPokeListReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      const newItem = {
        nick: payload.nick,
        name: payload.name,
        image: payload.image,
        id: payload.id,
        date: payload.date,
      };
      if (state === null) return [newItem];
      return [...state, newItem];
    case "REMOVE_ITEM":
      if (state === null) return state;
      const newState = state.filter((item) => item.date !== payload.date);
      return newState;
    default:
      return state;
  }
}
