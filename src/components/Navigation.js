import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  // a 태그를 입력할 시에는 새로고침이 발생 그 이유는 html 파일로 이동하기 때문
  // 따라서 Link를 써줘서 새로고침 발생안하게 바꾸어줌
  return (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
  )
}
export default Navigation;