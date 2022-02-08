import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { CustomTextField, CustomSelect, CustomCheckbox } from "../components";
import '../styles/styles.css'

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Email no tiene un formato válido')
            .required('Requerido'),
          terms: Yup.boolean()
            .oneOf([true], 'Debe aceptar los términos y condicioness'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida')
            .required('Requerido')
        })}
      >
        {(formik) => (
          <Form>
            <CustomTextField
              label='First name'
              name='firstName'
              placeholder='Diego'
            />

            <CustomTextField
              label='Last name'
              name='lastName'
              placeholder='Pineda'
            />

            <CustomTextField
              label='Email address'
              name='email'
              type='email'
              placeholder='your@email.com'
            />

            <CustomSelect label='Job type' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Jr</option>
            </CustomSelect>

            <CustomCheckbox label='Terms & Conditions' name='terms' />

            <button type='submit'>Send</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikAbstract
