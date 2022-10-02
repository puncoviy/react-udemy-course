export function Post({ userId, title, body }) {
    return (
        <div className="post">
            <div className="post-author">
                <span>{userId}</span>
            </div>
            <div className="post-text">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}
