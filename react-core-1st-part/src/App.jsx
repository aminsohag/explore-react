import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';

function App() {
 
  const actors = ['salman shaw', 'manna', 'sakib khan', 'dipjol']

  const singers = [
    {name : 'md abul', age : 32},
    {name : 'md babul', age : 25},
    {name : 'md kabul', age : 41},
    {name : 'md bulbul', age : 52}
  ]

  return (
    <>
      <h1> react</h1>
      <Singer></Singer>
      {
        singers.map(singer => <Singer></Singer>)
      }
      {/* <Actor name="Bappa raj"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      {/* <Todo task="{core concepts}" isDone={true}></Todo>
      <Todo task="{core js conce}" isDone={false}></Todo>
      <Todo task="{core react js}" isDone={true}></Todo> */}
      {/* <Person></Person>
      <Device name="amri" price="14"></Device>
      <Device name="samir" price="15"></Device>
      <Device name="kamir" price="16"></Device>
      <Student grade="7" score="25"></Student>
      <Student grade="12" score="35"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Person() {
  const age= 25;
  const money = 20;
  const person = {name : 'sakib', age : 12}
  return (

    <h3>I am a {person.name} Student with {money} money {age + money}</h3>

  )
}

function Device(props) {
  console.log(props);
  return <h3>This is a : {props.name} price: {props.price}</h3>
}


const {grade, score} = { grade : '7', score : '25' }
function Student( {grade = 1, score = 0} ) {
  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Class : {grade}</p>
      <p>Mark : {score}</p>
    </div>

  )
}

function Developer(){
  const stylus = {
    margin: '20px',
    padding: '16px',
    borderRadius: '12px',
    border: '2px solid tomato'
  }
  return (
   
    <div style={stylus}>
      <h2>Devo devo</h2>
      <p>coding : </p>
    </div>

  )
}

export default App
