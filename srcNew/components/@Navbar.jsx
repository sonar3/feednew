import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
	<nav>
		<Link to="/">전체</Link>
		<Link to="/follow">팔로잉</Link>
		<Link to="/woman">우먼</Link>
		<Link to="/men">맨</Link>
		<Link to="/celleb">5월의 탑셀럽</Link>
	</nav>
  )
}
