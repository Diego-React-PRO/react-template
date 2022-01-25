import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductButtons from './ProductButtons';
import ProductCardHOC from './ProductCard';

const useComponents = () => {
  const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
  })

  return {
    ProductImage,
    ProductTitle,
    ProductButtons,
    ProductCard
  }
}

export default useComponents