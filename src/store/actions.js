export default {
  addMatch({ commit }, { match }) {
    commit('addMatch', match);
  },
  changeUser({ commit }, { user }) {
    commit('changeUser', user);
  },
};
