import { createLocalVue, shallowMount } from '@vue/test-utils';;
import identifialble from '@/mixins/identifialble';

const localVue = createLocalVue();

const component = {
  data() {
    return {
    };
  },
  mixins: [
    identifialble,
  ],
  render(h) {
    return h('div');
  },
};


describe('bindable mixin', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(component, {
      localVue,
      propsData: {
        id: '10/250/4000',
      },
    });
  });

  it('id property is set', () => {
    expect(wrapper.vm.id).toEqual('10/250/4000');
  });

});
