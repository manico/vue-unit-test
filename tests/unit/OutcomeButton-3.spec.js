import { shallowMount } from '@vue/test-utils';
import OutcomeButton from '@/components/OutcomeButton.vue';

describe('OutcomeButton.vue', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(OutcomeButton, {
      propsData: {
        id: '10/250/4000',
        odd: 1.45,
      },
    });
  });

  it('previous odd is unset', () => {
    expect(wrapper.vm.previousOdd).toBeFalsy();
  });

  it('previous odd is set', () => {
    wrapper.setProps({
      odd: 2.45,
    });

    expect(wrapper.vm.previousOdd).toBe(1.45);
  });

  it('change is up', () => {
    wrapper.setProps({
      odd: 2.45,
    });

    expect(wrapper.vm.change).toBe('up');
  });

  it('change is down', () => {
    wrapper.setProps({
      odd: 2.45,
    });

    wrapper.setProps({
      odd: 1.45,
    });

    expect(wrapper.vm.change).toBe('down');
  });

  it('check label', () => {
    wrapper.setProps({
      odd: 2,
      label: 'Liverpool',
    });

    expect(wrapper.vm.label).toEqual('Liverpool');
  });

  it('check odd format', () => {
    wrapper.setProps({
      odd: 2,
    });

    expect(wrapper.vm.oddFormat).toEqual('2.00');
  });

  it('check style', () => {
    wrapper.setProps({
      odd: 2,
      width: 100,
      fontSize: 2,
    });

    expect(wrapper.vm.style).toEqual({
      width: '100px',
      fontSize: '2em',
    });
  });

});
