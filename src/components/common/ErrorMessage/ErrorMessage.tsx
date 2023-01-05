import { Message, MessageProps } from 'semantic-ui-react'

type ErrorMessageProps = MessageProps

const ErrorMessage = (props: ErrorMessageProps) => (
  <Message
    error
    header="Произошла ошибка."
    content={props.message || 'Пожалуйста, проверьте введённые данные и повторите попытку.'}
    {...props}
  />
)

export default ErrorMessage