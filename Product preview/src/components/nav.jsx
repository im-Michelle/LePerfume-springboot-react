import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
    position: fixed;
    z-index: 2;
    flex-direction: row;
    height: 7vh;
    width: 100%;
    background-color: #111;
`

const NameContainer = styled.div`
  margin: 7px 0 0 20px;
`

const LePerfume = styled(Link)`
  font-size: 50px;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  text-decoration: none;
`

const NavBar = () => {
  return (
    <Nav>
        <NameContainer>
          <LePerfume to="/">Le Perfume</LePerfume>
        </NameContainer>
    </Nav>
  )
}

export default NavBar;
