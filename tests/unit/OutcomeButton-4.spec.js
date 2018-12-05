import { shallowMount } from '@vue/test-utils';
import OutcomeButton from '@/components/OutcomeButton.vue';

describe('OutcomeButton.vue', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(OutcomeButton, {
      propsData: {
        id: '10/250/4000',
        label: 'Manchester City',
        odd: 1.45,
      },
    });
  });

  it('selected event is emitted', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().selected).toBeTruthy();
  });

  it('selected event is emitted with correct payload', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().selected[0][0]).toEqual({
      id: '10/250/4000',
      label: 'Manchester City',
      odd: 1.45,
      previousOdd: null,
    });
  });

});
