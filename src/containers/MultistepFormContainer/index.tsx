import { useFormik } from 'formik'
import { Button, Card, Page } from '../../components'
import * as yup from 'yup'
import { useMultistepForm } from '../../hooks'
import AddressForm from './AddressForm'
import UserForm from './UserForm'
import AccountForm from './AccountForm'
import { useState } from 'react'

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

const INITIAL_DATA: FormData = {
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

const MultistepContainer = () => {
  const [data, setData] = useState(INITIAL_DATA)
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { currentStepIndex, steps, isFirstStep, isLastStep, back, next, step } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ])

  const formMik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      dateOfBirth: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      username: '',
      password: '',
    },
    onSubmit: (values: FormData) => console.log(values),
    validationSchema: yup.object({
      fullName: yup.string().required(),
      emailAddress: yup.string().required(),
      dateOfBirth: yup.string().required(),
      streetAddress: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      zipCode: yup.string().required(),
      username: yup.string().required(),
      password: yup.string().required(),
    }),
  })

  return (
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
            <h1
              style={{
                fontSize: '32px',
                marginBottom: '15px',
              }}
            >
              Form
            </h1>
          </div>
          <div className="mt-1 sm:mx-auto sm:w-80 sm:max-w-sm">
            <form onSubmit={formMik.handleSubmit}>
              <Page currentPage={currentStepIndex + 1} totalPage={steps.length} />
              {currentStepIndex === 0 && <UserForm />}
              {currentStepIndex === 1 && <AddressForm />}
              {currentStepIndex === 2 && <AccountForm />}
              <div className=" flex mt-2 gap-4 justify-end ">
                {!isFirstStep && <Button onClick={back} label={'Back'} type={'button'} />}
                {isLastStep ? (
                  <Button onClick={next} label={'Submit'} type={'submit'} />
                ) : (
                  <Button onClick={next} label={'Next'} type={'button'} />
                )}
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MultistepContainer
