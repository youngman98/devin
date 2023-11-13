'use client'

import Link from 'next/link'
import styled from 'styled-components'

let Btn = styled.button`
  background: var(--btn-color);
  height: 50px;
  width: 50px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: auto;
  position: fixed;
  bottom: 0;
  right: 60px;
  border-radius: 50%;
`

function EditBtn() {
  return (
    <div>
      <Link href="/edit">
        <Btn>Edit</Btn>
      </Link>
    </div>
  )
}

export default EditBtn