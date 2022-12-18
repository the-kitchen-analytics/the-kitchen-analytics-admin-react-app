import { Message } from "semantic-ui-react";

class ErrorMessageProps {
  message: string

  constructor(message: string) {
    this.message = message
  }
}

const ErrorMessage = (props: ErrorMessageProps) => (
  <Message
    error
    header="Произошла ошибка."
    content={props.message || "Пожалуйста, проверьте введённые данные и повторите попытку."}
  />
);

export default ErrorMessage;