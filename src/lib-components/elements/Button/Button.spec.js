import { mount } from '@vue/test-utils';
import Button from './index';

const factory = (component, options) => {
  return mount(component, { ...options });
};

describe('Button.vue', () => {
  it('Renderiza o texto passado no slot default', () => {
    const text = 'click me';

    const wrapper = factory(Button, {
      slots: {
        default: text
      }
    });

    expect(wrapper.text()).toMatch(text);
  });
});
