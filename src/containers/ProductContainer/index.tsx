import { useEffect, useState } from 'react'
import { Button, Card, Input, Text } from '../../components'
import { useFormik } from 'formik'

interface ProductData {
  id?: number
  title: string
  price: number
}

interface Response {
  products: ProductData[]
}

const ProductContainer = () => {
  const [products, setProducts] = useState<ProductData[]>([])

  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=10')
    const data: Response = await response.json()
    setProducts(data.products)
  }

  const formMik = useFormik({
    initialValues: {
      title: '',
      price: 0,
    },
    onSubmit: (data: ProductData) => submitProduct(data),
  })

  const submitProduct = async (form: ProductData) => {
    const response = await fetch('https://dummyjson.com/products/add', {
      headers: {
        Authorization: localStorage.getItem('token') ?? '',
      },
      method: 'POST',
      body: JSON.stringify({
        title: form.title,
        price: form.price,
      }),
    })
    const data: ProductData = await response.json()
    setProducts([...products, data])
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <Card border>
      <form onSubmit={formMik.handleSubmit}>
        <Card border={false}>
          <div>
            <Text>{'Title'}</Text>
            <Input value={formMik.values.title} onChange={formMik.handleChange('title')} />
          </div>
          <div>
            <Text>{'Price'}</Text>
            <Input value={formMik.values.price} onChange={formMik.handleChange('price')} />
          </div>
          <Button label={'submit'} type={'submit'} />
        </Card>
      </form>
      <Card border={false}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Card>
  )
}

export default ProductContainer
