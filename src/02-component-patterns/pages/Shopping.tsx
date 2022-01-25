import useComponents from "../components";


const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png"
}

const Shopping = () => {
  const { ProductImage, ProductTitle, ProductButtons, ProductCard } = useComponents()

  return <div>
    <h1>Shopping Store</h1>
    <hr />

    <div style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }}>
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title="Coffee" />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
    </div>
  </div>;
};

export default Shopping;
