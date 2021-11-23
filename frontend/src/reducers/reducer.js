const Reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_THEME':
            console.log(JSON.stringify(action))
            return {
                ...state,
                darkmode: action.darkmode
            };
            default: return state;
    };
};

export default Reducer;