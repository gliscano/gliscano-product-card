// React
import React, { useContext, CSSProperties } from 'react';
// Context
import { ProductContext } from './ProductCard';
// Styles
import styles from '../../styles/styles.module.css';
// images
import noImage from '../../assets/no-image.jpg';

interface Props {
  img?: string,
  className?: string
  style?: CSSProperties
}

export const ProductImage = ({img, className, style}: Props) => {
    const { product } = useContext( ProductContext );
    let imgToShow: string;
  
    if (img) {
      imgToShow = img;
    } else if (product.img) {
      imgToShow = product.img;
    } else {
      imgToShow = noImage;
    }
  
    return (
      <img
        className={`${styles.productImg} ${className} `}
        style={style}
        src={imgToShow}
        alt="Product"
      />
    )
  };