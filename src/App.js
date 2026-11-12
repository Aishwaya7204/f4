import {useState} from "react"
const App=()=>{
  const [count,setcount]=useState(10)
  const [name,setname]=useState("aishwarya")
  const [on,seton]=useState("")
  const add=()=>{
    setcount(count+1)
  }
  const sub=()=>{
    setcount(count-1)
  }
  const mul=()=>{
    setcount(count*2)
  }
  const div=()=>{
    setcount(count/2)
  }

  const changename=(e)=>{
    setname(e.target.value)

  }
  const n1=()=>{
    seton(name)
  }

  return(
    <>
    <h1>AIDSA</h1>
    <h1>{count}</h1>
    <button onClick={add}>Add</button>
    <button onClick={sub}>Sub</button>
    <button onClick={mul}>Mul</button>
    <button onClick={div}>Div</button>
    <h1>{name}</h1>
    <input onChange={changename} value={name}/>
    <h1>{on}</h1>
    <button onClick={n1}>Name</button>
    </>
  )
}
export default App