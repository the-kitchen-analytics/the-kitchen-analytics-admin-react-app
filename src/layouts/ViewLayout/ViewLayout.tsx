import { Grid, Header, Icon, SemanticICONS } from 'semantic-ui-react'

interface ViewLayoutProps {
  header?: React.ReactNode,
  subheader?: React.ReactNode,
  icon?: Icon | SemanticICONS
  content?: React.ReactNode
  children?: React.ReactNode
}

const ViewLayout = (props: ViewLayoutProps) => (
  <Grid stackable>
    <Grid.Row>
      <Grid.Column>
        <Header as='h2'>
          {
            props.icon && <Icon name={props.icon as SemanticICONS} />
          }
          <Header.Content>
            {
              props.header
            }
            {
              props.subheader && <Header.Subheader>{props.subheader}</Header.Subheader>
            }
          </Header.Content>
        </Header>
      </Grid.Column>
    </Grid.Row>
    {
      props.content || props.children
    }
  </Grid>
)

export default ViewLayout