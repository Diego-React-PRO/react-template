import { ChangeEvent, useState } from "react"

const useForm = <T>(initialValues: T) => {
  const [formData, setFormData] = useState(initialValues);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const reset = () => {
    setFormData(initialValues)
  }

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    ...formData,
    onChange,
    isValidEmail,
    reset,
  }
}

export default useForm
