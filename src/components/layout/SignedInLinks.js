// no state necessary, so will be functional component instead of class component
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    console.log('SignedInLinks props', props);
    return (
        <ul className="right">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
            <li><NavLink to='/create'>New Post</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            {/* <li><NavLink to='/' className="btn btn-floating blue lighten-1">{props.profile.initials}</NavLink></li> */}
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);