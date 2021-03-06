import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, NavLink } from 'react-router-dom';
import moment from 'moment';


const PostDetails = (props) => {

    const { post, auth, profile } = props;

    console.log('PostDetails props', props);

    if (!auth.uid) return <Redirect to='/signin' />

    if (post) {
        return (
            <div className="container section post-details">
                <div className="card z-depth-0">
                    <span>
                        <NavLink to='/'>
                            <i className="material-icons small back-arrow">keyboard_backspace</i>
                        </NavLink>
                    </span>
                    <div className="card-content break-word">

                        <span className="card-title">{post.title}</span>
                        <p>{post.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>{post.authorFirstName} {post.authorLastName} - {profile.ntrpLevel} NTRP - Phone: {profile.phoneNumber} - Email: {profile.email}</div>
                        <div>{moment(post.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    return {
        post: post,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails)
