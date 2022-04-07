import * as React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage } from '../../src/components/product/ProductImage';
import ProductCard from '../../src/components/product/ProductCard';
import { product2 } from '../data/products';

describe('Product Image', () => {
  test('Display Component with custom image', () => {
      const wrapper = renderer.create(
        <ProductImage img='https://gliscano.jpg' />
      );
      expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test ('Display component with the image of product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});