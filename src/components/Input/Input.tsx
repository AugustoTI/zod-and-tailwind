import {
  forwardRef,
  type InputHTMLAttributes,
  type ForwardRefRenderFunction,
} from 'react'
import { type FieldError } from 'react-hook-form'
import { type IconType } from 'react-icons'
import clsx from 'clsx'

type InputBaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'>

export interface InputProps extends InputBaseProps {
  label: string
  labelId: string
  error?: FieldError
  Icon?: IconType
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, labelId, error, Icon, ...rest },
  ref,
) => {
  return (
    <div className="mb-4">
      <label htmlFor={labelId} className="mb-3 block text-sm font-semibold text-gray-100">
        {label}
      </label>
      <div className="relative mb-2">
        {!!Icon && (
          <Icon className="absolute inset-y-0 left-6 my-auto text-[1.5rem] text-gray-400" />
        )}
        <input
          id={labelId}
          className={clsx(
            'block w-full rounded border-2 border-solid border-transparent bg-gray-800 py-3 px-6 text-gray-100 outline-none transition-colors placeholder:text-gray-400 focus:border-cyan-300',
            !!error && 'focus:border-red-500',
            !!Icon && 'pl-[3.75rem]',
          )}
          ref={ref}
          {...rest}
        />
      </div>
      {!!error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  )
}

export const Input = forwardRef(InputBase)
