import { Field } from 'formik'
import { Heading2, Text } from '../../../components'

const AccountForm = ({ formik }: any) => {
  const { errors, touched, getFieldProps } = formik

  return (
    <div>
      <Heading2 title={'Account Information'} />
      <div>
        <div className="mb-4">
          <label htmlFor="username">Username</label>{' '}
          <Field
            id={'username'}
            {...getFieldProps('username')}
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">
            {errors.username && touched.username ? <Text>{errors.username}</Text> : null}
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>{' '}
          <Field
            id={'password'}
            {...getFieldProps('password')}
            type="password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">
            {errors.password && touched.password ? <Text>{errors.password}</Text> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountForm
