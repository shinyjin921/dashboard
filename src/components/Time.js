import { useState } from "react"

const Time = () => {

  const todayTime = ()=>{
    const nowTime = new Date();
    const hour = nowTime.getHours(); 
    const minutes = nowTime.getMinutes();
    const seconds =nowTime.getSeconds();
    return <p>
      {hour} : {minutes} : {seconds}
    </p>;
  }

  const [now,setNow] = useState(todayTime);

  setInterval(()=>{setNow(todayTime)},1000);

  return (
    <div id="today">
      {now}
    </div>
  )
}

export default Time