import { CSSProperties, useContext } from 'react';
import { productContext } from './ProductCard';
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface Props {
  img?: string
  title?: string
  className?: string
  style?: CSSProperties
}

const ProductImage = ({ img, title, className, style }: Props) => {
  const { product } = useContext(productContext)
  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt={title}
    />
  )
}

export default ProductImage;
