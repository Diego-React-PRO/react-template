import { FormEvent, } from 'react'
import useForm from '../hooks/useForm'
import '../styles/styles.css'

export const Register = () => {
  const { name, email, password1, password2, onChange, isValidEmail, reset } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Register page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length === 0 && 'has-error'}`}
        />
        {name.trim().length === 0 && (
          <span>Este campo es requerido</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && (
          <span>Este campo es requerido</span>
        )}
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
          className={`${password1.trim().length === 0 && 'has-error'}`}
        />
        {password1.trim().length === 0 && (
          <span>Este campo es requerido</span>
        )}
        {password1.trim().length > 0 && password1.trim().length < 6 && (
          <span>La contraseña debe tener al menos 6 caracteres</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
          className={`${password2.trim().length === 0 && 'has-error'}`}
        />
        {password2.trim().length === 0 && (
          <span>Este campo es requerido</span>
        )}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  )
}

export default Register
