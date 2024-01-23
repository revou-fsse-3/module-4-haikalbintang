import { useFormik } from 'formik'
import { Heading2, Input, Text } from '../../../components'
import * as yup from 'yup'

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

  const formik = useFormik({
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

  const { errors } = formik

  return (
    <div>
      <Heading2 title={'Address Information'} />
      <div>
        <div className="mb-4">
          <label>Street Address</label>
          <Input
            name={'streetAddress'}
            value={streetAddress}
            onChange={(e) => updateFields({ streetAddress: e.target.value })}
            autoFocus
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
          <div className="text-red-600">{errors.streetAddress && <Text>{errors.streetAddress}</Text>}</div>
        </div>
        <div className="mb-4">
          <label>City</label>{' '}
          <Input
            name={'city'}
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.city && <Text>{errors.city}</Text>}</div>
        </div>
        <div className="mb-4">
          <label>State</label>{' '}
          <Input
            name={'state'}
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.state && <Text>{errors.state}</Text>}</div>
        </div>
        <div>
          <label>Zip Code</label>{' '}
          <Input
            name={'zipCode'}
            value={zipCode}
            onChange={(e) => updateFields({ zipCode: e.target.value })}
            type="number"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.zipCode && <Text>{errors.zipCode}</Text>}</div>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
