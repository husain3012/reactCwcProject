import React from 'react'
import BlogText from './BlogText'
import './Blog.css'
const BlogBody = (props) => {
    return (
        <div>
        <BlogText content={props.content} />
        </div>
    )
}

export default BlogBody
