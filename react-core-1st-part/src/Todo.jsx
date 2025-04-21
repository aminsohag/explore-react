import React from 'react'

// export default function Todo({task}) {
//   return (
//     <div>
//       <li>Task : {task}</li>
//     </div>
//   )
// }


// conditional rendering option 1
// export default function Todo({task, isDone}) {
//     if(isDone === true){
//         return <li>finished: {task}</li>
//     }
//     else{
//         return <li>Work on : {task}</li>
//     }
  
// }


// conditional rendering option 
// export default function Todo({task, isDone}) {
//     if(isDone){
//         return <li>finished: {task}</li>
//     }    
//         return <li>Work on : {task}</li>

// }



// conditional rendering option 3 : ternary operator
// export default function Todo({task, isDone}) {
//       return (
//         <div>
//           <li>{isDone ? 'Finished' : 'Work on'} : {task}</li>
//         </div>
//       )
// }


// conditional rendering option 4 :  && operator
// export default function Todo({task, isDone}) {
//       return (
//         <div>
//           <li>{task}  {isDone &&  ': Done'}</li>
//         </div>
//       )
// }


// conditional rendering option 5 : || operator
export default function Todo({task, isDone}) {
      return (
        <div>
          <li>{task} {isDone || ':Do It'}</li>
        </div>
      )
}

