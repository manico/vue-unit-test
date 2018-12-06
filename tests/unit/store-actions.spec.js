import actions from '@/store/actions';

describe('Store Actions', () => {

  it('adds match to matches state', () => {
    const state = {
      matches: [
        { id: '1/10', name: 'Arsenal - Liverpool', active: true, bets: [] },
      ],
    };

    const mockCommit = (name, payload) => {
      state.matches.push(payload.match);
    };

    actions.addMatch({ commit: mockCommit }, {
      match: {
        id: '1/13',
        name: 'Hajduk - Dinamo',
        active: true,
        bets: [],
      },
    });

    expect(state.matches.length).toBe(2);
  });

});
