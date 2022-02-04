import { useEffect, useRef, useState } from "react";
import { Product, InitialValues, onChangeArgs } from "../interfaces";

interface Args {
  product: Product
  onChange?: (args: onChangeArgs) => void
  count?: number
  initialValues?: InitialValues
}

const useProduct = ({ product, onChange, count = 0, initialValues }: Args) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || count);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(count)
  }, [count]);

  useEffect(() => {
    isMounted.current = true
  }, [])

  const increaseBy = (value: number) => {
    const maxLimit = initialValues?.maxCount
      ? Math.min(counter + value, initialValues?.maxCount)
      : counter + value
    const newCounter = Math.max(maxLimit, 0)
    setCounter(newCounter)
    onChange && onChange({ count: newCounter, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || count)
  }

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,
    reset
  }
}

export default useProduct
