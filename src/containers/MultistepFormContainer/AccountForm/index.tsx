import { useFormik } from 'formik'
import { Heading2, Input, Text } from '../../../components'
import * as yup from 'yup'

interface AccountData {
  username: string
  password: string
}

interface AddressFormProps extends AccountData {
  updateFields: (fields: Partial<AccountData>) => void
}

const AccountForm = ({ username, password, updateFields }: AddressFormProps) => {
  // updateFields({ fullName: 'John Doe', emailAddress: 'john.doe@email.com' })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values: AccountData) => console.log(values),
    validationSchema: yup.object({
      username: yup.string().required('Username is a required field'),
      password: yup.string().required('Password is a required field'),
    }),
  })

  const { errors } = formik

  return (
    <div>
      <Heading2 title={'Account Information'} />
      <div>
        <div className="mb-4">
          <label>Username</label>
          <Input
            name={'username'}
            value={username}
            onChange={(e) => updateFields({ username: e.target.value })}
            autoFocus
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
          <div className="text-red-600">{errors.username && <Text>{errors.username}</Text>}</div>
        </div>
        <div>
          <label>Password</label>{' '}
          <Input
            name={'password'}
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
            type="password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.password && <Text>{errors.password}</Text>}</div>
        </div>
      </div>
    </div>
  )
}

export default AccountForm
