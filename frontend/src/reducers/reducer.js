const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_THEME":
      console.log("update theme " + JSON.stringify(action));
      return {
        ...state,
        darkmode: action.darkmode,
      };
    default:
      console.log("Default " + JSON.stringify(action));
      return state;
  }
};

export default Reducer;
