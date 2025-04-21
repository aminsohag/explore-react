import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'

function App() {

  // function handleClick(){
  //   alert('please first clicked')
  // }

  // const handleClick2 = () => {
  //   alert('please Second clicked')
  // }

  // const addToFive = (num) => {
  //   alert(num + 5);
  // }
  
  return (
    <>
      <h1>React Core Concepts</h1>

      <Posts></Posts>
      
      {/* <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button> 
      <button onClick={() => {alert('please Third Clicked')}}>Click Me 3</button>
      <button onClick={() => {addToFive(3)}}>Add To Five</button> */}
    </>
  )
}

export default App
