const ModelReducer = (state, data) => {
    switch (data.action) {
        case "Add": {
            if (!Object.prototype.hasOwnProperty.call(state.model, data.body.title)) state.model[data.body.title] = data.body.model;
            return { ...state };
        }
        case 'Clear': {
            return { model: {} }
        }
        default: {
            return state;
        }
    }
}

export default ModelReducer;