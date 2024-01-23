import { Button, Card, Heading1, Page } from '../../components'
// import { useMultistepForm } from '../../hooks'
import AddressForm from './AddressForm'
import UserForm from './UserForm'
import AccountForm from './AccountForm'
// import { FormEvent, useState } from 'react'
import { Form, Formik } from 'formik'
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
  streetAddress: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zipCode: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
})

const MultistepContainer = () => {
  // const [data, setData] = useState(INITIAL_DATA)
  // const updateFields = (fields: Partial<FormData>) => {
  //   setData((prev) => {
  //     return { ...prev, ...fields }
  //   })
  // }

  const { currentStepIndex, steps, isFirstStep, isLastStep, back, next, step } = useMultistepForm([
    <UserForm />,
    <AddressForm />,
    <AccountForm />,
  ])

  // const onSubmit = (e: FormEvent) => {
  //   e.preventDefault()
  //   if (!isLastStep) return next()
  //   alert('Succeed')
  //   console.log(data)
  // }

  // const { handleSubmit, isValid, dirty } = formik

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Card border>
          <div className="relative">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Heading1 title={'Form'} />
            </div>
            <div className="mt-1 sm:mx-auto sm:w-80 sm:max-w-sm">
              <Page currentPage={currentStepIndex + 1} totalPage={steps.length} />
              <Form>{step}</Form>
              <div className=" flex mt-4 gap-4 justify-end ">
                {!isFirstStep && <Button onClick={back} label={'Back'} type={'button'} />}
                {isLastStep ? (
                  <Button onClick={next} label={'Submit'} type={'submit'} />
                ) : (
                  <Button onClick={next} label={'Next'} type={'button'} />
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Formik>
  )
}

export default MultistepContainer
