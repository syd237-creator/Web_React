import {CommentTriggerAction, Textaction} from './actions'
export const textState = {
}

export const commentTriggerState ={
  commentTrigger:true,
}

export const textReducer = (state, action) => {
    if (action.type === Textaction) {
      return {
        ...state,
        textValue: action.payload,
      };
    }
    return state;
};

export const commentTriggerReducer = (state, action) => {
  if (action.type === CommentTriggerAction) {
    return {
      ...state,
      commentTrigger: action.payload,
    };
  }
  return state;
};