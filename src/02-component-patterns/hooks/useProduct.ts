import { useEffect, useRef, useState } from "react";
import { onChangeArgs } from "../interfaces";
import { Product } from '../interfaces/index';

interface Args {
  product: Product
  onChange?: (args: onChangeArgs) => void
  count?: number
}

const useProduct = ({ product, onChange, count = 0 }: Args) => {
  const [counter, setCounter] = useState(count);

  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(count)
  }, [count]);


  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product })
    }
    const newCounter = Math.max(counter + value, 0)
    setCounter(newCounter)
    onChange && onChange({ count: newCounter, product })
  }

  return {
    counter,
    increaseBy
  }
}

export default useProduct
