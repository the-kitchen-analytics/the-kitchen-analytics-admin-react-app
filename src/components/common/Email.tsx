interface EmailProps {
  to: string,
  displayName?: string
}

const Email = (props: EmailProps) => (
  <a href={`mailto:${props.to}`}>{props.displayName || props.to}</a>
)

export default Email