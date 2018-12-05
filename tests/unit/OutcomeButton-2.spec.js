import { shallowMount } from '@vue/test-utils';
import OutcomeButton from '@/components/OutcomeButton.vue';

describe('OutcomeButton.vue', () => {
  it('previous odd is unset', () => {
    const wrapper = shallowMount(OutcomeButton, {
      propsData: {
        id: '10/250/4000',
        odd: 1.45,
      },
    });

    expect(wrapper.vm.previousOdd).toBeFalsy();
  });

  it('previous odd is set', () => {
    const wrapper = shallowMount(OutcomeButton, {
      propsData: {
        id: '10/250/4000',
        odd: 1.45,
      },
    });

    wrapper.setProps({
      odd: 2.45,
    });

    expect(wrapper.vm.previousOdd).toBe(1.45);
  });

  it('change is up', () => {
    const wrapper = shallowMount(OutcomeButton, {
      propsData: {
        id: '10/250/4000',
        odd: 1.45,
      },
    });

    wrapper.setProps({
      odd: 2.45,
    });

    expect(wrapper.vm.change).toBe('up');
  });

  it('change is down', () => {
    const wrapper = shallowMount(OutcomeButton, {
      propsData: {
        id: '10/250/4000',
        odd: 1.45,
      },
    });

    wrapper.setProps({
      odd: 2.45,
    });

    wrapper.setProps({
      odd: 1.45,
    });

    expect(wrapper.vm.change).toBe('down');
  });
});
