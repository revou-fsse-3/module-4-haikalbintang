import { Button, Card, Heading1, Page } from '../../components'
import AddressForm from './AddressForm'
import UserForm from './UserForm'
import AccountForm from './AccountForm'
import { Form, Formik, useFormik } from 'formik'
import * as yup from 'yup'
import { useMultistepForm } from '../../hooks'

export interface FormData {
  fullName: string
  emailAddress: string
  dateOfBirth: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  username: string
  password: string
}

const initialValues = {
  fullName: '',
  emailAddress: '',
  dateOfBirth: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  username: '',
  password: '',
}

const onSubmit = (values: FormData) => {
  console.log(values)
  alert('Registration succeed!')
}

const validationSchema = yup.object({
  fullName: yup.string().required('Full Name is a required field'),
  emailAddress: yup.string().email('Please enter a valid email').required('Email Address is a required field'),
  dateOfBirth: yup.date().required('Date of Birth is a required field'),
  streetAddress: yup.string().required('Street Address is a required field'),
  city: yup.string().required('City is a required field'),
  state: yup.string().required('State is a required field'),
  zipCode: yup.string().required('Zip Code is a required field'),
  username: yup.string().required('Username is a required field'),
  password: yup.string().required('Password is a required field'),
})

const MultistepContainer = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  console.log(formik.values)

  const { currentStepIndex, steps, isFirstStep, isLastStep, back, next, step } = useMultistepForm([
    <UserForm formik={formik} />,
    <AddressForm formik={formik} />,
    <AccountForm formik={formik} />,
  ])

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Card border>
          <div className="relative">
            <Heading1 title={'Form'} />
            <div className="mt-1 sm:mx-auto sm:w-80 sm:max-w-sm">
              <Page currentPage={currentStepIndex + 1} totalPage={steps.length} />
              <Form>
                {step}
                <div className=" flex mt-4 gap-4 justify-end ">
                  {!isFirstStep && <Button onClick={back} label={'Back'} type={'button'} />}
                  {isLastStep ? (
                    <Button onClick={next} label={'Submit'} type={'submit'} />
                  ) : (
                    <Button onClick={next} label={'Next'} type={'submit'} />
                  )}
                </div>
              </Form>
            </div>
          </div>
        </Card>
      </div>
    </Formik>
  )
}

export default MultistepContainer
