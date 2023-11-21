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
    <form action="/search" className="flex flex-wrap justify-between md:flex-row">
      <input type="text" name="query" placeholder="Search"
       className="w-full h-12 px-4 text-sm text-text3 bg-white border border-gray-200 rounded-lg xl:transition-all xl:duration-200 xl:w-24 xl:focus:w-28 2xl:w-32 2xl:focus:w-44 xl:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-contrast dark:placeholder-gray-400 focus:ring-opacity-20">
      </input>
    </form>
  )
}