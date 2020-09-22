import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotion';

export const initalState={
       dishes: DISHES,
      comments:COMMENTS,
      promotion:PROMOTIONS,
      leaders:LEADERS
}

export const Reducer= (state = initalState,action) =>{
    return state;
}