import React from 'react'

const PostDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Post Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, veniam sed fugit architecto magni officia voluptates voluptate quisquam quas, blanditiis minus quos cum illum. Iste odio velit ipsam consequuntur accusamus?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Dakota Castleberg</div>
                    <div>The date today</div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
