/* React */
import React, { createContext, CSSProperties } from 'react';
import { useProduct } from '../../hooks/useProduct';
/* interfaces */
import { OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../../interfaces';
/* Styles */
import styles from '../../styles/styles.module.css';
import '../../styles/custom-styles.css';
import { InitialValues } from '../../interfaces/index';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

interface ProductCardProps {
  // children?: ReactElement | ReactElement[];
  children?: (arg: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (arg: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

const ProductCard = ({
  children,
  className,
  initialValues,
  product,
  style,
  value,
  onChange,
}: ProductCardProps) => {
  const { counter, isMaxCounter, increaseBy, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        { children && children({
            count: counter,
            isMaxCountReached: isMaxCounter,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset,
          })
        }
      </div>
    </Provider>
  );
};

export default ProductCard;