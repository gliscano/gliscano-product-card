import * as React from 'react';
import renderer from 'react-test-renderer'
import ProductCard from '../../src/components/product/ProductCard';
import { ProductTitle } from '../../src/components/product/ProductTitle';
import { product1 } from '../data/products';

describe('Product Title', () => {
  test('Display Component with custom title', () => {
      const wrapper = renderer.create(
        <ProductTitle
            title="Custom Title"
            className='custom-class'
        />
      )
      expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test ('Display component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  })
});