import { useEffect, useState, useRef } from 'react';
import { Product } from '../interfaces';
import { OnChangeArgs, InitialValues } from '../interfaces/index';

interface useProductArgs {
  product: Product;
  onChange?: (arg: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const [isMaxCounter, setIsMaxCounter] = useState<boolean>(false);
    const isMounted = useRef(false);
 
    const increaseBy = (value:number) => {
      let newCounter = Math.max(counter + value, 0);
      if ( initialValues?.maxCount) {
        newCounter = Math.min(newCounter, initialValues.maxCount);
        setIsMaxCounter(newCounter === initialValues.maxCount);
      }

      setCounter( newCounter );
      onChange && onChange({ count: newCounter, product });
    };

    const reset = () => {
      setCounter(initialValues?.count || value);
    };

    useEffect(() => {
      if ( !isMounted.current ) return;
      setCounter(value);
    }, [value]);

    useEffect(() => {
      isMounted.current = true;
    }, []);

    return {
        counter,
        isMaxCounter,
        increaseBy,
        reset,
    };
};