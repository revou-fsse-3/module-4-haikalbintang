import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Card, Text } from '../../components'
import * as yup from 'yup'
import { useFormik } from 'formik'

interface FormProps {
  name?: string
  is_active?: boolean
}
interface Category {
  id: string
  name: string
  is_active: boolean
}

const CategoryContainer = () => {
  const token = localStorage.getItem('token')
  const [categories, setCategories] = useState([])
  const fetchCategories = async () => {
    const response = await fetch('https://mock-api.arikmpt.com/api/category', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    setCategories(data.data)
    // console.log(data.data.name);
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleDelete = (id: string) => async () => {
    try {
      const response = await fetch(`https://mock-api.arikmpt.com/api/category/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      // console.log(deleteCategory);
      fetchCategories()
    } catch (error) {
      console.log(error)
    }
  }

  const onCreateCategory = async (data: FormProps) => {
    try {
      const response = await fetch('https://mock-api.arikmpt.com/api/category/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: data.name,
          is_active: data.is_active,
        }),
      })

      const newCategory = await response.json()
      fetchCategories()
      console.log(newCategory)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (id: string) => async () => {
    try {
      const response = await fetch(`https://mock-api.arikmpt.com/api/category/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      const getCategory = await response.json()

      console.log(getCategory)
    } catch (error) {
      console.log(error)
    }
  }

  const formMik = useFormik({
    initialValues: {
      name: '',
      is_active: true,
    },
    onSubmit: (values, { resetForm }) => {
      onCreateCategory(values)
      resetForm()
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      is_active: yup.boolean().required(),
    }),
  })
  const { errors, values, handleChange, handleSubmit } = formMik
  const { name, is_active } = values

  if (!token) {
    return (
      <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <Card border>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: '32px',
                  marginBottom: '15px',
                }}
              >
                Category
              </h1>
            </div>
            <div className="mt-1 sm:mx-auto sm:w-80 sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                <div>
                  <div className="mb-4">
                    <label>Name</label>
                    <div>
                      <input
                        autoFocus
                        value={name}
                        name="name"
                        type="text"
                        onChange={handleChange('name')}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="text-red-600">{errors.name && <Text>{errors.name}</Text>}</div>
                  </div>
                  <div>
                    <label>Active?</label>
                    <div className="flex">
                      <label>
                        <input
                          value="true"
                          name="is_active"
                          type="radio"
                          onChange={handleChange('is_active')}
                          checked={is_active}
                          className="m-1"
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          value="false"
                          name="is_active"
                          type="radio"
                          onChange={handleChange('is_active')}
                          checked={is_active}
                          className="m-1 ml-4"
                        />
                        No
                      </label>
                    </div>
                    <div className="text-red-600">{errors.is_active && <Text>{errors.is_active}</Text>}</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '20px',
                    }}
                  >
                    <Button label={'Sign In'} />
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h2
                style={{
                  fontSize: '24px',
                  marginBottom: '15px',
                }}
              >
                Member
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* {categories.map((category: Category, id) => {
                return (
                  <div key={category.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        alt={`monster ${category.name}`}
                        src={`https://robohash.org/${id}?set=set2&size=180x180`}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">ID: {category.id}</h3>
                        <p className="mt-1 text-sm text-gray-500">Nama: {category.name}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{category.is_active}</p>
                    </div>

                    <div className="action-group">
                      <button onClick={handleEdit(category.id)}>Edit</button>
                      <button onClick={handleDelete(category.id)}>Pecat</button>
                    </div>
                  </div>
                )
              })} */}
            </div>
          </div>
        </div>
      </>
    )
  }
  return <Navigate to="/sign-in" />
}

export default CategoryContainer
