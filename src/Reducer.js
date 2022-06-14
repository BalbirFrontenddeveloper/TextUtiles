const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TEXTAREASTATE":
            return {
                ...state,
                setText: action.payload
            }
    }
    return {
        state
    };
};

export default reducer;