'use client'

import styled from 'styled-components'

let Searchbar = styled.div`
  display: flex;
  width: 300px;
  height: auto;
  margin: auto;
  border-bottom: 1px solid black;
`

let SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 9px 45px 9px 15px;
  border: 0;
  outline: none;
  box-sizing: border-box;
`

let SearchIcon = styled.div`
  height: 37px;
  width: 37px;
  background: url(https://user-images.githubusercontent.com/75000376/274183298-b1f30ea3-6328-43d5-a489-ef745ff3af93.png) 50% 50% no-repeat;
  cursor: pointer
`

export default function Search() {
  return (
    <Searchbar className="Search">
      <SearchInput type="text" placeholder="Search"/>
      <SearchIcon className="Search-icon"></SearchIcon>
    </Searchbar>
  )
}