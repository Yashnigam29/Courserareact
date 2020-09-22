import { createStore } from "redux"
import { initalState, Reducer } from "./reducer"

export const configureStore =() =>{
    const store= createStore(
        Reducer,
        initalState
    )
 
    return store;
}