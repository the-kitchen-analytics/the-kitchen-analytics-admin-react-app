<<<<<<< HEAD:src/components/Layout/Layout.tsx
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Segment, Grid, Container } from 'semantic-ui-react'
import ErrorMessage from '../ErrorMessage'
import NavigationBar from '../NavigationBar'

export default function Layout() {
=======
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Segment, Grid, Container } from "semantic-ui-react";
import ErrorMessage from "../../components/ErrorMessage";
import NavigationBar from "../../components/NavigationBar";

export default function MainLayout() {
>>>>>>> ab12f9b (Improve layout):src/layouts/MainLayout/MainLayout.tsx

  const [error] = useState('')

  return (
    <Container>
      <Grid centered padded stackable>
        {
          error && <ErrorMessage message={error} />
        }
        <Grid.Row>
          <Grid.Column widescreen={4}>
            <NavigationBar
              title={(
                <strong>The Kitchen Admin</strong>
              )}
            />
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Grid.Row>
              <Grid.Column>
                <Segment padded>
                  <Outlet />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}