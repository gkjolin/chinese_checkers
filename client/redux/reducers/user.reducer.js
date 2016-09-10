import { ADD_INFO, UPDATE_INFO } from 'ACTION/user.action';

const userInfo = {
  name: 233333
};

export default function(state = userInfo, action) {
  switch (action.type) {

    case ADD_INFO:
      return Object.assign({}, state, action.payload);

    case UPDATE_INFO:
      let oldState = state;
      oldState[action.key] = action.val;
      return oldState;

    default:
      return state;
  }
}