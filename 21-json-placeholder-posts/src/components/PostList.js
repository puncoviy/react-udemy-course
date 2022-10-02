import { useEffect, useState } from 'react'
import { Post } from './Post'

export function PostList() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                .then((response) => response.json())
                .then((allPosts) => setPosts(allPosts))
                .catch((error) => setError(error.message))
                .finally(() => setLoading(false))
        }, 1000)
        // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        //     .then((response) => response.json())
        //     .then((allPosts) => setPosts(allPosts))
        //     .catch((error) => setError(error.message))
        //     .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h1>All posts</h1>
            <hr />

            {loading ? (
                <div className="loading">sec pls...🧐</div>
            ) : (
                posts.map((post) => <Post key={post.id} {...post} />)
            )}

            {error && <div>Error: {error}</div>}
        </div>
    )
}
