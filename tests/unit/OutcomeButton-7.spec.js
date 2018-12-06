import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import OutcomeButton from '@/components/OutcomeButton.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('OutcomeButton.vue', () => {

  let actions;
  let store;
  beforeEach(() => {
    actions = {
      changeUser: jest.fn(),
    };

    store = new Vuex.Store({
      state: {},
      actions,
    });
  })

  it('has triggered user change', () => {
    const wrapper = shallowMount(OutcomeButton, {
      store,
      localVue,
      propsData: {
        id: '10/250/4000',
      },
    });

    wrapper.trigger('click');

    expect(actions.changeUser).toHaveBeenCalled();
  });

});
