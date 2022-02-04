import { createContext, CSSProperties } from 'react';
import useProduct from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces';
import styles from '../styles/styles.module.css'

export interface Props {
  product: Product
  // children?: ReactElement | ReactElement[]
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  count?: number
  initialValues?: InitialValues
}

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

const ProductCard = ({ children, product, className, style, onChange, count, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ product, onChange, count, initialValues })

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          count: counter,
          maxCount,
          isMaxCountReached,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  )
}

export default ProductCard
