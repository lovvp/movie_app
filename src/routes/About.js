import React from 'react'
//Router 안에 있는 모든 Component 들은 모두 props 를 가짐 (history, location, match)
function About(props) {
  console.log(props)
  return <span>About this page: I built it because I love movies</span>
}

export default About;