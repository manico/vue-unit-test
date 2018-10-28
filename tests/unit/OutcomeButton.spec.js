import { shallowMount } from '@vue/test-utils';
import OutcomeButton from '@/components/OutcomeButton.vue';

describe('OutcomeButton.vue', () => {
  it('is a vue instance', () => {
    const wrapper = shallowMount(OutcomeButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
