import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductImage, ProductTitle } from '../.';
import ProductCard from '../src/components/product/ProductCard';

const product =  {
  id: '1',
  title: 'Coffee Mug - 001',
  // img: './coffee-mug.png'
};

const App = () => {
  return (
    <>
      <ProductCard
        product={ product }
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({
            isMaxCountReached,
           }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons
                isMaxCounter={isMaxCountReached}
              />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
