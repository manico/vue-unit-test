import { filter } from 'lodash';

export default {
  matches(state) {
    return state.matches;
  },
  activeMatches(state) {
    return filter(state.matches, { active: true });
  },
  user(state) {
    return state.user;
  },
};
