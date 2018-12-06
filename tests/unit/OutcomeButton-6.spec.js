import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import OutcomeButton from '@/components/OutcomeButton.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('OutcomeButton.vue', () => {

  let getters;
  let store;
  beforeEach(() => {
    getters = {
      user() {
        return {
          email: 'dummy@nsoft.com',
        };
      },
    };

    store = new Vuex.Store({
      getters,
    });
  })

  it('has valid user getter', () => {
    const wrapper = shallowMount(OutcomeButton, {
      store,
      localVue,
      propsData: {
        id: '10/250/4000',
      },
    });

    expect(wrapper.vm.user.email).toEqual('dummy@nsoft.com');
  });

});
