// React
import React, { CSSProperties, useContext } from 'react';
// Context
import { ProductContext } from './ProductCard';
// Styles
import styles from '../../styles/styles.module.css';
import '../../styles/custom-styles.css';

interface Props {
  className?: string;
  style?: CSSProperties;
  isMaxCounter?: boolean;
}

export const ProductButtons = ({ className, style, isMaxCounter }: Props) => {
    const { counter, increaseBy } = useContext( ProductContext );
  
    return (
      <div
        className={`${styles.buttonsContainer} ${className} `}
        style={style}
      >
        <button
          className={styles.buttonMinus}
          onClick={() => increaseBy(-1)}
        >
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button
          className={`${styles.buttonAdd} ${isMaxCounter && styles.disable}`}
          onClick={() => increaseBy(+1)}
          disabled={isMaxCounter}
        >
          +
        </button>
      </div>
    );
  };