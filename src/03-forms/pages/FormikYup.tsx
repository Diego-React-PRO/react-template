import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYup = () => {
  const { errors, handleSubmit, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(10, 'Debe tener 10 caracteres o menos')
        .required('Requerido'),
      email: Yup.string()
        .email('Email no tiene un formato válido')
        .required('Requerido'),
    })
  })

  return (
    <div>
      <h1>Formik Yup tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name</label>
        <input type='text' {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor='lastName'>Last name</label>
        <input type='text' {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email address</label>
        <input type='email' {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default FormikYup
