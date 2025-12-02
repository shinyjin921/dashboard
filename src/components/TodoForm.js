import { useState } from "react"

const TodoForm = ({onSave}) => {
  const [task,setTask] = useState('');
  const handlesubmit = (e) =>{
    e.preventDefault(); //기존 기능 방지
    onSave(task);
    setTask('');
    // const handlekeydown = (e) =>{
    //   if(e.code === 'keyA'){
    //     setView(task);
    //   }
    // }
  }
  return (
    <div id="todo-form">
      <h2>할일 내용을 입력하세요</h2>
      <form onSubmit={handlesubmit}>
      <input
      type="text"
      value={task}
      onChange={(e)=>{setTask(e.target.value)}}
      // onKeyDown={handlekeydown}
      />
      </form>
    </div>
  )
}

export default TodoForm