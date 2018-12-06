import Vuex from 'vuex';
import { cloneDeep } from 'lodash';
import { createLocalVue } from '@vue/test-utils';
import storeConfig from '@/store/storeConfig';

describe('Store', () => {

  it('adds match to matches state', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store(cloneDeep(storeConfig));
    store.commit('addMatch', {
      match: {
        id: '1/13',
        name: 'Hajduk - Dinamo',
        active: true,
        bets: [],
      },
    });

    expect(store.state.matches.length).toBe(4);
  });

});
