import React, {useState} from 'react'
import ErrorModal from './components/modernAppComponents/errorModal/errorModal'
const color = {
  Error: 'rgb(255, 93, 93)',
  Warning: 'rgb(255, 191, 0)',
  Success: 'rgb(0, 255, 1)'
}
const data ={
  title: "Success",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, aliquid ducimus eius, fuga nemo ad fugiat facere quod expere.",
  color: color["Success"]
}
const data1 ={
  title: "Error",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, aliquid ducimus eius, fuga nemo ad fugiat facere quod expere.",
  color: color["Error"]
}
const data3 ={
  title: "Warning",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, aliquid ducimus eius, fuga nemo ad fugiat facere quod expere.",
  color: color["Warning"]
}


function ModernApp() {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open3, setOpen3] = useState(false)
  return (
    <div>
        <ErrorModal open={open1} setOpen={setOpen1} top={100} left={180} data={data1}/>
        <ErrorModal open={open3} setOpen={setOpen3} top={180} left={250} data={data3}/>
        <ErrorModal open={open} setOpen={setOpen} top={38} left={100} data={data}/>
        {/* <ErrorModal open={open} setOpen={setOpen} top={150} left={80} data={data1}/> */}
        <button onClick={() => {setOpen(!open); setOpen1(!open1);setOpen3(!open3) }}> Call Modall </button>
    </div>
  )
}

export default ModernApp