import { ButtonProps, Form } from 'semantic-ui-react'

type ButtonWithProps = {
  Component: React.ElementType
  props?: ButtonProps
}

type ButtonGroupProps = {
  buttons: ButtonWithProps[]
}

const ButtonGroup = (props: ButtonGroupProps) => (
  <Form>
    <Form.Group widths={'equal'}>
      {
        props.buttons.map(({ Component, props }, i) => (
          <Form.Field key={i}>
            <Component fluid {...props} />
          </Form.Field>
        ))
      }
    </Form.Group>
  </Form>
)

export default ButtonGroup