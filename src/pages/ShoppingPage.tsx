/* Components */
import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage
} from '../components/product';
/* Data Mock */
import products from '../data/products';

const product = products[0];

const ShoppingPage = () => {

  return (
    <div>
      <h3> Marketplace Demo </h3>
      <hr />
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
    </div>
  );
};

export default ShoppingPage;
