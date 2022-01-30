import useComponents from "../components";
import products from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

const Shopping = () => {
  const { ProductImage, ProductTitle, ProductButtons, ProductCard } = useComponents()
  const { shopppingCart, onProductCountChange } = useShoppingCart()

  return <div>
    <h1>Shopping Store</h1>
    <hr />

    <div style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }}>
      {/* <ProductCard product={product1} className="bg-dark text-white">
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title title="Coffee" className="text-bold" />
        <ProductCard.Buttons className="custom-buttons" />
      </ProductCard> */}

      {products.map(product => {
        const productInCart = shopppingCart[product.id]

        return (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            count={productInCart?.count}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)"
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        )
      })}



      {/* <ProductCard
        product={product}
        style={{
          backgroundColor: "#70D1F8"
        }}
      >
        <ProductImage
          style={{
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)"
          }}
        />
        <ProductTitle style={{
          fontWeight: "bold"
        }}
        />
        <ProductButtons style={{
          display: "flex",
          justifyContent: "end"
        }}
        />
      </ProductCard> */}
    </div>

    <div className="shopping-cart">
      {Object.values(shopppingCart).map(product => (
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          style={{ width: "100px" }}
          onChange={onProductCountChange}
          count={product.count}
        >
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)"
            }}
          />
          <ProductButtons
            className="custom-buttons"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </ProductCard>
      ))}

    </div>
  </div>;
};

export default Shopping;
