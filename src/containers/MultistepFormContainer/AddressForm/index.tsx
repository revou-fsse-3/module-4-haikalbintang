import { Field } from 'formik'
import { Heading2, Text } from '../../../components'

const AddressForm = ({ formik }: any) => {
  const { errors, touched, getFieldProps } = formik

  return (
    <div>
      <Heading2 title={'Address Information'} />
      <div>
        <div className="mb-4">
          <label htmlFor="streetAddress">Street Address</label>
          <Field
            autoFocus
            id={'streetAddress'}
            {...getFieldProps('streetAddress')}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
          <div className="text-red-600">
            {errors.streetAddress && touched.streetAddress ? <Text>{errors.streetAddress}</Text> : null}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <Field
            id={'city'}
            {...getFieldProps('city')}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
          <div className="text-red-600">{errors.city && touched.city ? <Text>{errors.city}</Text> : null}</div>
        </div>
        <div className="mb-4">
          <label htmlFor="state">State</label>{' '}
          <Field
            id={'state'}
            {...getFieldProps('state')}
            type="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.state && touched.state ? <Text>{errors.state}</Text> : null}</div>
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code</label>{' '}
          <Field
            id={'zipCode'}
            {...getFieldProps('zipCode')}
            type="number"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="text-red-600">{errors.zipCode && touched.zipCode ? <Text>{errors.zipCode}</Text> : null}</div>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
