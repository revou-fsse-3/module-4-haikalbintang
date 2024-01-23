import { Field, Form, useFormik } from 'formik'
import { Heading2, Text } from '../../../components'
import * as yup from 'yup'

interface UserData {
  fullName: string
  emailAddress: string
  dateOfBirth: string
}

// interface UserFormProps extends UserData {
//   updateFields: (fields: Partial<UserData>) => void
// }

const UserForm = () => {
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

  const { errors, touched, getFieldProps } = formik

  return (
    <div>
      <Heading2 title={'Personal Information'} />
      <div>
        <Form>
          <div className="mb-4">
            <label htmlFor="fullName">Full Name</label>
            <Field
              autoFocus
              id={'fullName'}
              {...getFieldProps('fullName')}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
            {/* <ErrorMessage name="fullName">{msg => <div>{msg}</div>}</ErrorMessage> */}
            <div className="text-red-600">
              {errors.fullName && touched.fullName ? <Text>{errors.fullName}</Text> : null}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="emailAddress">Email Address</label>{' '}
            <Field
              id={'emailAddress'}
              {...getFieldProps('emailAddress')}
              type="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="text-red-600">
              {errors.emailAddress && touched.emailAddress ? <Text>{errors.emailAddress}</Text> : null}
            </div>
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>{' '}
            <Field
              id={'dateOfBirth'}
              {...getFieldProps('dateOfBirth')}
              type="date"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="text-red-600">
              {errors.dateOfBirth && touched.dateOfBirth ? <Text>{errors.dateOfBirth}</Text> : null}
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default UserForm
