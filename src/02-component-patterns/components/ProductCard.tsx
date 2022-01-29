import { createContext, CSSProperties, ReactElement } from 'react';
import useProduct from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces';
import styles from '../styles/styles.module.css'

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
}

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>

      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {/* <ProductImage img={img} title={title} />

<ProductTitle title={title} />

<ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        {children}
      </div>
    </Provider >
  )
}

export default ProductCard
