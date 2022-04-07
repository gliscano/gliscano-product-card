import * as React from 'react';
import renderer from 'react-test-renderer'
import ProductCard from '../../src/components/product/ProductCard';
import { product1 } from '../data/products';

const { act } = renderer;

describe('Product Card', () => {
  test ('Display component', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <h4>Product Card</h4>
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('increase counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          ({ count, increaseBy }) => (
            <>
              <h4>Product Card</h4>
              <span>{ count }</span>
              <button onClick={() => increaseBy(1)}></button>
            </>
          )
        }
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe("1");
  });
});