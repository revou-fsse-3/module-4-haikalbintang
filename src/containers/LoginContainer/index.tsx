import { Button, Card, Text } from '../../components'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Navigate, useNavigate } from 'react-router-dom'

const LoginContainer = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const submitSignIn = async (user: { email: any; password: any }) => {
    try {
      const response = await fetch('https://mock-api.arikmpt.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      })

      const data = await response.json()
      console.log(data)
      if (data?.data.token) {
        localStorage.setItem('token', data.data.token)
      }
      navigate('../../category')
    } catch (err) {
      alert('Please recheck the email and password!')
    }
  }

  const formMik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      submitSignIn(values)
      resetForm()
      alert('Login successfully! Now you can add Category')
    },
    validationSchema: yup.object({
      email: yup.string().email('invalid email format').required('Please fill the email address'),
      password: yup.string().required('Please fill the password'),
    }),
  })

  const { errors, values, handleChange, handleSubmit } = formMik
  const { email, password } = values

  if (token) {
    return <Navigate to="/category" />
  } else {
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
              Login
            </h1>
          </div>
          <div className="mt-1 sm:mx-auto sm:w-80 sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
              <div>
                <div className="mb-4">
                  <label>Email address</label>
                  <div>
                    <input
                      autoFocus
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
                  <Button label={'Login'} />
                </div>
              </div>
            </form>
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm">
                Don't have account?{' '}
                <a className="text-blue-600" href="/register">
                  Register
                </a>{' '}
              </p>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default LoginContainer
