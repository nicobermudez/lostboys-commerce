import React from 'react'
import Cart from './Cart'
import lostboys from "../../images/lostboys.png"
import styled from "@emotion/styled"
import { useNavigation } from "react-navigation-hooks"

const HeaderContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "40px",
})

const Logo = styled.img({
  width: "50px",
})


const Header = () => {
  const { navigate } = useNavigation();
  return (
    <div>
      <HeaderContainer>
        <Logo src={lostboys} alt="Lost Boys" />
        <Cart />
      </HeaderContainer>
    </div>
  )
}

export default Header
