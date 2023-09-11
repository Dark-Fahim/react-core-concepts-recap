import './Post.css'

export default function Post({ post }) {
    const { title, userId, body } = post
    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <h4>User Id: {userId}</h4>
            <p>{body}</p>
        </div>
    )
}