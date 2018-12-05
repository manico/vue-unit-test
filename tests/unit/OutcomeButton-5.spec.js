import { mount } from '@vue/test-utils';
import OutcomeButton from '@/components/OutcomeButton.vue';

describe('OutcomeButton.vue', () => {

  it('is rendered correctly', () => {
    const wrapper = mount(OutcomeButton, {
      propsData: {
        id: '10/250/4000',
        label: 'Manchester City',
        odd: 1.45,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

});
