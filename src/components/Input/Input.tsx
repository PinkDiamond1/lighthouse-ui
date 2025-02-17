import { FC, HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react';
import Typography from '../Typography/Typography';
import { UiMode } from '../../constants/enums';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  tooltip?: string
  error?: string
  className?: string
  uiMode?: UiMode
  inputStyle?: 'primary' | 'secondary'
  icon?: string
}

const Input: FC<InputProps> = ({ label, tooltip, type, error, className, uiMode, inputStyle = 'primary', icon,  ...props }) => {
  const [inputType, setType] = useState<HTMLInputTypeAttribute>(type || 'text')
  const isPasswordType = type === 'password'

  const generateInputStyle = () => {
    switch (inputStyle) {
      case 'secondary':
        return 'text-dark500 border-style p-2 bg-transparent'
      default:
        return `${uiMode === UiMode.LIGHT ? 'text-dark500 bg-dark10 border-dark500' : 'bg-transparent border-white placeholder:text-dark500'} font-light text-white border-b text-body md:text-subtitle1`
    }
  }

  const togglePassword = () => setType((prev) => (prev === 'password' ? 'text' : 'password'))
  return (
    <div className='space-y-4 w-full'>
      {label && (
        <div className='flex items-center space-x-2'>
          <Typography
            isBold
            family='font-archivo'
            color='text-dark500'
            className='uppercase md:text-caption1'
            type='text-caption2'
          >
            {label}
          </Typography>
          {tooltip && (
            <i className='bi-question-circle-fill text-caption2 md:text-caption1 text-dark500' />
          )}
        </div>
      )}
      <div className='relative w-full'>
        <input
          {...props}
          type={inputType}
          className={`${
            isPasswordType || icon ? 'pr-5' : ''
          } ${className ? className : ''} pb-2 w-full font-openSauce outline-none ${generateInputStyle()}`}
        />
        {isPasswordType ? (
          <i
            onClick={togglePassword}
            className={`cursor-pointer text-caption1 md:text-body ${
              inputType === 'password' ? 'bi-eye-slash-fill' : 'bi-eye-fill'
            } text-dark500 absolute right-0 top-1/2 -translate-y-1/2`}
          />
        ) : icon ? (
          <i className={`text-caption1 ${icon} text-dark500 absolute right-3 top-1/2 -translate-y-1/2`} />
        ) : null}
        <div className='absolute -bottom-6 left-0'>
          <Typography type='text-caption2' color='text-error' darkMode="dark:text-error" className='capitalize'>
            {error}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Input
