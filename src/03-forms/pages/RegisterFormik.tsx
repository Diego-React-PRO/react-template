import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { CustomTextField } from '../components'
import '../styles/styles.css'

export const RegisterFormik = () => {
  return (
    <div>
      <h1>Register Formik page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe tener al menos 2 caracteres')
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Email no tiene un formato válido')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'Debe tener al menos 6 caracteres')
            .required('Requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
            .required('Requerido')
        })}
      >
        {({ handleReset }) => (
          <Form>
            <CustomTextField
              label='Name'
              name='name'
              placeholder='Diego'
            />

            <CustomTextField
              label='Email address'
              name='email'
              type='email'
              placeholder='your@email.com'
            />

            <CustomTextField
              label='Password'
              name='password1'
              type='password'
              placeholder='******'
            />

            <CustomTextField
              label='Confirm password'
              name='password2'
              type='password'
              placeholder='******'
            />

            <button type='submit'>Send</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormik
