import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces";

const useShoppingCart = () => {
  const [shopppingCart, setShopppingCart] = useState<
    { [key: string]: ProductInCart }
  >({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShopppingCart(prev => {
      const productInCart: ProductInCart = prev[product.id] || { ...product, count: 0 }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...prev,
          [product.id]: productInCart
        }
      }
      const { [product.id]: toDelete, ...rest } = prev
      return rest

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prev
      //   return rest
      // } else return {
      //   ...prev,
      //   [product.id]: { ...product, count }
      // }

    })
  }

  return { shopppingCart, onProductCountChange }
}

export default useShoppingCart
