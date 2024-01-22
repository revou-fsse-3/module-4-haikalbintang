import { useFormik } from 'formik'
import { Heading2, Input, Text } from '../../../components'
import * as yup from 'yup'
import { FormData } from '..'

interface UserData {
  fullName: string
  emailAddress: string
  dateOfBirth: string
}

interface UserFormProps extends UserData {
  updateFields: (fields: Partial<UserData>) => void
}

const UserForm = () => {
  // updateFields({ fullName: 'John Doe', emailAddress: 'john.doe@email.com' })

  const formMik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      dateOfBirth: '',
    },
    onSubmit: (values: UserData) => console.log(values),
    validationSchema: yup.object({
      fullName: yup.string().required('Full Name is a required field'),
      emailAddress: yup.string().required('A Valid Email Address is a required field'),
      dateOfBirth: yup.string().required('Date of Birth is a required field'),
    }),
  })

  const { errors, values, handleChange, handleSubmit } = formMik
  const { fullName, emailAddress, dateOfBirth } = values

  return (
    <div>
      <Heading2 title={'Personal Information'} />
      <div>
        <div className="mb-4">
          <label>Full Name</label>
          <Input
            name={'fullName'}
            value={formMik.values.fullName}
            onChange={handleChange('fullName')}
            autoFocus
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
          <div className="text-red-600">{errors.fullName && <Text>{errors.fullName}</Text>}</div>
        </div>
        <div className="mb-4">
          <label>Email Address</label>{' '}
          <Input
            name={'emailAddress'}
            value={formMik.values.emailAddress}
            onChange={handleChange('emailAddress')}
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.emailAddress && <Text>{errors.emailAddress}</Text>}</div>
        </div>
        <div>
          <label>Date of Birth</label>{' '}
          <Input
            name={'dateOfBirth'}
            value={formMik.values.dateOfBirth}
            onChange={handleChange('dateOfBirth')}
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.dateOfBirth && <Text>{errors.dateOfBirth}</Text>}</div>
        </div>
      </div>
    </div>
  )
}

export default UserForm
