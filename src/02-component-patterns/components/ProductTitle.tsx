import { useContext } from 'react'
import { productContext } from './ProductCard';
import styles from '../styles/styles.module.css'

const ProductTitle = ({ title = "" }) => {
  const { product } = useContext(productContext)

  return (
    <span className={styles.productDescription}>{title ? title : product.title}</span>
  )
}

export default ProductTitle