import {useState} from 'react'

const ProductForm = ({addProducts}) => {
    const [formdata, setFormdata] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''   

    })
    const handleChange = (e) => {
        setFormdata({...formdata, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
          addProducts(formdata)
        setFormdata({
            title: '',
            price: '',
            description: '',
            category: '',
            image: ''
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type = "text" name = "title" placeholder='Enter Title....' value={formdata.title} onChange={handleChange} />
            <input type = "number" name = "price" placeholder=' Enter Price....' value={formdata.price} onChange={handleChange} />
            <input type = "text" name = "description" placeholder='Enter Description' value={formdata.description} onChange={handleChange} />
            <input type = "text" name = "category" placeholder='Enter Category' value={formdata.category} onChange={handleChange} />
            <input type = "text" name = "image" placeholder='Enter Image URL' value={formdata.image} onChange={handleChange} />
            <button type = "submit">Add Product</button>
        </form>
    </div>
  )
}

export default ProductForm