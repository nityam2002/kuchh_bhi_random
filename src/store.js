import { createStore } from "redux";

const initialState = {
value: "",
};

function rootReducer(state = initialState, action) {
switch (action.type) {
case "SET_VALUE":
return {
...state,
value: action.payload,
};
default:
return state;
}
}

const store = createStore(rootReducer);

export default store;