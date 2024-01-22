import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  color?: string
}

const Button = ({ label, color, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`my-2 rounded-md ${color} ?? bg-indigo-600 px-3 py-2 text-m font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {label}
    </button>
  )
}

export default Button
