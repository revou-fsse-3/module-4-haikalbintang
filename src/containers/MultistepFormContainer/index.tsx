import { useFormik } from 'formik'
import { Button, Card, Input, Page, Text } from '../../components'
import * as yup from 'yup'
import { useMultistepForm } from '../../hooks'

interface FormProps {
  name: string
  age: number
  hobby: string
}

const MultistepContainer = () => {
  const { currentStepIndex, steps, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <div>One</div>,
    <div>Two</div>,
    <div>Three</div>,
  ])

  const formMik = useFormik({
    initialValues: {
      name: '',
      age: 0,
      hobby: '',
    },
    onSubmit: (values: FormProps) => console.log(values),
    validationSchema: yup.object({
      name: yup.string().required(),
      age: yup.number().positive().integer().required(),
      hobby: yup.string().required(),
    }),
  })

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Card border>
        <div className="mt-1 sm:mx-auto sm:w-80 sm:max-w-sm">
          <form onSubmit={formMik.handleSubmit}>
            <Page currentPage={currentStepIndex + 1} totalPage={steps.length} />
            <div>
              <div>
                <label>Nama</label>
                <Input
                  name={'name'}
                  value={formMik.values.name}
                  onChange={formMik.handleChange('name')}
                  autoFocus
                  type="text"
                />
                <div className="">{formMik.errors.name && <Text>{formMik.errors.name}</Text>}</div>
              </div>
              <div>
                <label>Umur</label>{' '}
                <Input
                  name={'age'}
                  value={formMik.values.age}
                  onChange={formMik.handleChange('age')}
                  type="number"
                  min={1}
                />
                {formMik.errors.age && <Text>{formMik.errors.age}</Text>}
              </div>
              <div>
                <label>Hobi</label>{' '}
                <Input name={'hobby'} value={formMik.values.hobby} onChange={formMik.handleChange('hobby')} />
                {formMik.errors.hobby && <Text>{formMik.errors.hobby}</Text>}
              </div>
            </div>
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
      </Card>
    </div>
  )
}

export default MultistepContainer
