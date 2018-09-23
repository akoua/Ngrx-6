import { State } from "./app.state";

const initialState: State = {
    count: 0,
    title: 'Super compteur'
};
export function reducer(state: State = initialState, action) {
    console.log('in reducer', action);
    switch (action.type) {
        case 'INCREMENT':
            const newState = {
                // on clône state ici à l'aide du spread operator
                ...state,
                count: state.count + action.payload
            }
            console.log(newState);
            return newState;
        case 'DECREMENT':
            const newState2 = {
                ...state,
                count: state.count - action.payload
            }
            console.log(newState2);
            return newState2;

        default:
            return state;
    }
}