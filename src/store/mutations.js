import { assign } from 'lodash';

export default {
  addMatch(state, match) {
    state.matches.push(match);
  },
  changeUser(state, user) {
    assign(state.user, user);
  },
};
