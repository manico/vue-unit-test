import mutations from '@/store/mutations';

describe('Store Mutations', () => {

  it('adds match to matches state', () => {
    const state = {
      matches: [
        { id: '1/10', name: 'Arsenal - Liverpool', active: true, bets: [] },
      ],
    };

    mutations.addMatch(state, {
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
