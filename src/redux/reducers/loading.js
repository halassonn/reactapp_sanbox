const initialState = {
  id: "",
  open: false,
  ket: ""
};

export default function loadingreducers(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        open: action.payload.open,
        id: action.payload.id,
        ket: action.payload.ket
      };

    default:
      return state;
  }
}
