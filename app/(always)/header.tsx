'use client'

import Link from 'next/link'
import styled from 'styled-components'
import Search from './../(tool)/search'

let HeaderBox = styled.div`
  height: 80px;
  width: 100%;
  top: 0;
  z-index: 10;
  background: var(--main-color);
`

let Container = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 65px;
  width: 100%;
  max-width: 100%;
`

let Logo = styled.div`
  height: 65px;
  width: 240px;
  background-image: url(https://user-images.githubusercontent.com/75000376/280461584-bac30866-f0a1-4f9b-a49b-2128703ab187.png);
  background-size: 100% 100%;
`

let Navbar = styled.ul`
  display: flex;
  align-items: center;
`

let NavbarLi = styled.li`
  position: relative;
  height: 100%;
  line-height: 65px;
  margin: 0 5px;
  padding: 0 15px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--box-hover);
    transform: scale(1.1);
  }
`
function Header() {
  return (
    <HeaderBox>
    <Container>
      <Link href="/"><Logo/></Link>
      <Search/>
      <Navbar>
        <Link href="/"><NavbarLi>Contact</NavbarLi></Link>
        <Link href="/"><NavbarLi>Github</NavbarLi></Link>
        <Link href="/"><NavbarLi>Portfolio</NavbarLi></Link>
      </Navbar>
    </Container>
    </HeaderBox>
  )
}

export default Header
