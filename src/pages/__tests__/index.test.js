import Index from '..';
import renderer from 'react-test-renderer';
import * as expect from "expect";


describe('Page: index', () => {
  it('Render correctly', () => {
    const wrapper = renderer.create(<Index />);
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0];
    expect(outerLayer.type).toBe('div');
    expect(outerLayer.children.length).toBe(2);

  });
});
