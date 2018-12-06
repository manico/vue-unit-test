import getters from '@/store/getters';

describe('Store Getters', () => {

  it('has exact number of matches', () => {
    const state = {
      matches: [
        { id: '1/10', name: 'Arsenal - Liverpool', active: true, bets: [], },
        { id: '1/11', name: 'Manchester City - Aston Villa', active: true, bets: [], },
        { id: '1/12', name: 'Southampton - Gabela Polje', active: true, bets: [], },
      ],
    };

    expect(getters.matches(state).length).toBe(3);
  });

});
