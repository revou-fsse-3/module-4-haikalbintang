import { useFormik } from 'formik'
import { Heading2, Input, Text } from '../../../components'
import * as yup from 'yup'
import { FormData } from '..'

interface AddressData {
  streetAddress: string
  city: string
  state: string
  zipCode: string
}

interface AddressFormProps extends AddressData {
  updateFields: (fields: Partial<AddressData>) => void
}

const AddressForm = ({ streetAddress, city, state, zipCode, updateFields }: AddressFormProps) => {
  // updateFields({ fullName: 'John Doe', emailAddress: 'john.doe@email.com' })

  const formMik = useFormik({
    initialValues: {
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
    },
    onSubmit: (values: AddressData) => console.log(values),
    validationSchema: yup.object({
      streetAddress: yup.string().required('Street Address is a required field'),
      city: yup.string().required('City is a required field'),
      state: yup.string().required('State is a required field'),
      zipCode: yup.string().required('Zip Code is a required field'),
    }),
  })

  return (
    <div>
      <Heading2 title={'Address Information'} />
      <div>
        <div className="mb-4">
          <label>Street Address</label>
          <Input
            name={'streetAddress'}
            value={formMik.values.streetAddress}
            onChange={formMik.handleChange('streetAddress')}
            autoFocus
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
          <div className="text-red-600">
            {formMik.errors.streetAddress && <Text>{formMik.errors.streetAddress}</Text>}
          </div>
        </div>
        <div className="mb-4">
          <label>City</label>{' '}
          <Input
            name={'city'}
            value={formMik.values.city}
            onChange={formMik.handleChange('city')}
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{formMik.errors.city && <Text>{formMik.errors.city}</Text>}</div>
        </div>
        <div className="mb-4">
          <label>State</label>{' '}
          <Input
            name={'state'}
            value={formMik.values.state}
            onChange={formMik.handleChange('state')}
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{formMik.errors.state && <Text>{formMik.errors.state}</Text>}</div>
        </div>
        <div>
          <label>Zip Code</label>{' '}
          <Input
            name={'zipCode'}
            value={formMik.values.zipCode}
            onChange={formMik.handleChange('zipCode')}
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{formMik.errors.zipCode && <Text>{formMik.errors.zipCode}</Text>}</div>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
