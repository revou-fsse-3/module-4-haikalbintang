import { useFormik } from 'formik'
import { Heading2, Input, Text } from '../../../components'
import * as yup from 'yup'

interface UserData {
  fullName: string
  emailAddress: string
  dateOfBirth: string
}

interface UserFormProps extends UserData {
  updateFields: (fields: Partial<UserData>) => void
}

const UserForm = ({ fullName, emailAddress, dateOfBirth, updateFields }: UserFormProps) => {
  // updateFields({ fullName: 'John Doe', emailAddress: 'john.doe@email.com' })

  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      dateOfBirth: '',
    },
    onSubmit: (values: UserData) => console.log(values),
    validationSchema: yup.object({
      fullName: yup.string().required('Full Name is a required field'),
      emailAddress: yup.string().email('Please enter a valid email').required('Email Address is a required field'),
      dateOfBirth: yup.date().required('Date of Birth is a required field'),
    }),
  })

  const { errors, handleBlur } = formik

  return (
    <div>
      <Heading2 title={'Personal Information'} />
      <div>
        <div className="mb-4">
          <label>Full Name</label>
          <Input
            name={'fullName'}
            value={fullName}
            onChange={(e) => updateFields({ fullName: e.target.value })}
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
            value={emailAddress}
            onChange={(e) => updateFields({ emailAddress: e.target.value })}
            onBlur={handleBlur('emailAddress')}
            type="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.emailAddress && <Text>{errors.emailAddress}</Text>}</div>
        </div>
        <div>
          <label>Date of Birth</label>{' '}
          <Input
            name={'dateOfBirth'}
            value={dateOfBirth}
            onChange={(e) => updateFields({ dateOfBirth: e.target.value })}
            type="date"
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
