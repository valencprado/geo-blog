import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
 
`

export default function Home(props) {
  return (
    <div>
  <Title>My page</Title>
  <img src={props.avatar_url}/>
  </div>
    )
}

export async function GetStaticProps(){
return{
  props: {
    avatar_url: "https://avatars.githubusercontent.com/u/85965282?v=4"
  }
}
}