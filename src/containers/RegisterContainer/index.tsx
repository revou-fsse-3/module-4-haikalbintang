import * as yup from 'yup'
import { useFormik } from 'formik'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, Card, Text } from '../../components'

const RegisterContainer = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const submitSignUp = async (account: { name: string; email: string; password: string }) => {
    const response = await fetch('https://mock-api.arikmpt.com/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: account.name,
        email: account.email,
        password: account.password,
      }),
    })

    const data = await response.json()
    console.log(data)
    navigate('../../login')
  }

  const formMik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      submitSignUp(values)
      console.log(values)
      resetForm()
      alert('Time to Login')
    },
    validationSchema: yup.object({
      name: yup.string().required('Please fill the username'),
      email: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is invalid')
        .required('Please fill the email address'),
      password: yup.string().required('Please fill the password'),
    }),
  })

  const { errors, values, handleChange, handleSubmit } = formMik
  const { name, email, password } = values

  if (!token) {
    return (
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
              Register
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
                <div className="mb-4">
                  <label>Email address</label>
                  <div>
                    <input
                      value={email}
                      name="email"
                      type="email"
                      onChange={handleChange('email')}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="text-red-600">{errors.email && <Text>{errors.email}</Text>}</div>
                </div>
                <div>
                  <label>Password</label>
                  <div>
                    <input
                      value={password}
                      name="password"
                      type="password"
                      onChange={handleChange('password')}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="text-red-600">{errors.password && <Text>{errors.password}</Text>}</div>
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
                  <Button label={'Sign Up'} />
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    )
  } else {
    return <Navigate to="/category" />
  }
}

export default RegisterContainer
