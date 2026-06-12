const ProductList = ({ products, deleteProduct }) => {
  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product._id}>
            <img src={product.image} alt={product.title}  />
          <h3>{product.title}</h3>
          <h3>{product.description}</h3>
          <h3>{product.category}</h3>
          <h3>{product.price}</h3>

          <img
            src={product.image}
            alt={product.title}
            width="100"
          />

          <button onClick={() => deleteProduct(product._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;