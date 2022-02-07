import { ErrorMessage, useField } from "formik"

interface Props {
  label: string
  name: string
  [x: string]: any
}

export const CustomCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label>
        <input type='checkbox' {...field} {...props} />
        {label}
      </label>
      {/* {meta.touched && meta.error && (
        <span className='error'>{meta.error}</span>
      )} */}
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}

export default CustomCheckbox
