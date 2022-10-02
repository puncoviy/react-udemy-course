import { useEffect, useState } from 'react'
import { Post } from './Post'

export function PostList() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            ;(async () => {
                try {
                    const result = await fetch(
                        'https://jsonplaceholder.typicode.com/posts?_limit=10'
                    )
                    const posts = await result.json()
                    setPosts(posts)
                } catch (error) {
                    setError(error.message)
                }
                setLoading(false)
            })()
        }, 1000)
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    //             .then((response) => response.json())
    //             .then((allPosts) => setPosts(allPosts))
    //             .catch((error) => setError(error.message))
    //             .finally(() => setLoading(false))
    //     }, 1000)
    // }, [])

    return (
        <div>
            <h1>All posts</h1>
            <hr />

            {loading ? (
                <div className="loading">sec pls...{'\u{1F9D0}'}</div>
            ) : (
                posts.map((post) => <Post key={post.id} {...post} />)
            )}

            {error && (
                <div className="loading">
                    Error{'\u{1FAE0}'} : {error}
                </div>
            )}
        </div>
    )
}
