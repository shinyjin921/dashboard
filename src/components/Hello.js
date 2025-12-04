import { useEffect } from "react"

const Hello = ({user,onLogout}) => {
  return (
    <div id="hello-page">
      <p> {user}님 안녕하세요,오늘의 할일은 무엇인가요?</p>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  )
}

export default Hello