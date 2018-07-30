import React from 'react'
import { Container, Grid, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Nav = props => {

  return(
    <Container className='nav-container'>
      <Grid columns={2}>
        <Grid.Column>
          <p className='nav-title'>Pain & Rehab Center</p>
          <p>2041 Martin Luther King Ave, (202) 610-0260</p>
        </Grid.Column>


        <Grid.Column textAlign='right'>
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <List horizontal>
            <List.Item>Home</List.Item>
            <List.Item>About the show</List.Item>
            <List.Item>Support the Show</List.Item>
            <List.Item>Live Shows</List.Item>
            <List.Item>Shop (Coming Soon)</List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Nav
