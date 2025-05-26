interface InputOtpProps {
  id: string
  value: string
  placeholder?: string
  className?: string
  errorMessage?: string
  onChange: (id: string, value: string) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>, id: string) => void
  inputRef?: (element: HTMLInputElement | null) => void 
}
import { memo } from 'react'

const InputOtp: React.FC<InputOtpProps> = memo((props) => {
  return (
    <input
      type="text"
      maxLength={1}
      className={props.className}
      value={props.value}
      onChange={(event) => {
        if (/^\d?$/.test(event.target.value)) {
          props.onChange(props.id, event.target.value)
        }
      }}
      onKeyDown={(event) => props.onKeyDown(event, props.id)}
      ref={(element) => {
        if (props.inputRef) {
          props.inputRef(element)
        }
      }}
    />
  )
})

export default InputOtp