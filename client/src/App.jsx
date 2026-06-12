import { useEffect,useState } from "react"
import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList"
import API from "./services/api"



const App = () => {

  const [products, setProducts] = useState([])

  const fetchData = async() => {
    const res = await API.get('/products')
    setProducts(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const addProducts = async(data) => {
    await API.post('/products', data)
    fetchData()
  }
  const deleteProduct = async(id) => {
    await API.delete(`/products/${id}`)
    fetchData()
  }
  return (

    <div>
      <h1>welcome to the product app</h1>
      <ProductForm  addProducts={addProducts} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  )
}

export default App