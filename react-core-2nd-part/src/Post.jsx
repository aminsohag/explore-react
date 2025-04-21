import './Post.css'

export default function Post({post}) {
const {userId, id, title, body} = post
  return (
    <div className='box'>
      <h2>User Id : {userId}</h2>
      <p>Id :{id} </p>
      <p>Title : {title}</p>
      <p>Description : {body}</p>
    </div>
  )
}
