import styled from 'styled-components'

let Toggle = styled.div`
  background-image: url(https://user-images.githubusercontent.com/75000376/274208746-8b9b3a22-db3e-4a9c-8262-b53e953fa7f2.png);
  background-size: cover;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: auto;
  position: fixed;
  bottom: 0;
  right: 0;
`

export default function Darkmode() {
  return(
    <Toggle/>
  )
}
