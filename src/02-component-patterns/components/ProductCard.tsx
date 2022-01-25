import { createContext } from 'react';
import useProduct from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces';
import styles from '../styles/styles.module.css'

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>

      <div className={styles.productCard}>
        {/* <ProductImage img={img} title={title} />

<ProductTitle title={title} />

<ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        {children}
      </div>
    </Provider >
  )
}

export default ProductCard
