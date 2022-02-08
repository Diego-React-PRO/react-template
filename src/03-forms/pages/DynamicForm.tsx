import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup'
import CustomTextField from '../components/CustomTextField';
import { CustomSelect } from '../components';

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const field of formJson) {
  initialValues[field.name] = field.value
  if (!field.validations) continue

  let schema = Yup.string()

  for (const rule of field.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Campo requerido')
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Debe tener al menos ${(rule as any).value || 2} caracteres`)
    }

    if (rule.type === 'email') {
      schema = schema.email('El formato del email no es válido')
    }
  }

  requiredFields[field.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ label, name, type, placeholder, options }) => {
              if (type === "text" || type === "email" || type === "password") {
                return (
                  <CustomTextField
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                  />
                )
              } else if (type === "select") {
                return (
                  <CustomSelect
                    key={name}
                    label={label}
                    name={name}
                  >
                    <option value=''>Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>{label}</option>
                    ))}
                  </CustomSelect>
                )
              }
            })}

            <button type='submit'>Send</button>
          </Form>
        )}

      </Formik>
    </div >
  )
}

export default DynamicForm
