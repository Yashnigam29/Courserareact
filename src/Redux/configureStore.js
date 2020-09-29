import { createForms } from "react-redux-form";
import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { initialFeedback } from "./form";
import { Leaders } from "./leader";
import { Promotions } from "./promotions";
import {  Reducer } from "./reducer"

export const configureStore =() =>{
    const store= createStore(
       combineReducers(
           {
           dishes:Dishes,
           promotion:Promotions,
           comments:Comments,
           leaders:Leaders,
           ...createForms({
               feedback:initialFeedback})
       }),  
       applyMiddleware(thunk,logger)
    )

 
    return store;
}