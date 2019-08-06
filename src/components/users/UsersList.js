import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

class UsersList extends Component {

    render() {

        const { auth, users } = this.props;
        console.log('UsersList props', this.props);

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <div className="row">
                    <div className="col sm12 m12">
                        {users && users.map(user => {
                            return (
                                <div key={user.id} className="card z-depth-0">
                                    <div className="card-content">
                                        <span className="card-title">{user.firstName} {user.lastName}</span>
                                    </div>
                                    <div className="card-action grey lighten-3 black-text">
                                        <div>
                                            {user.ntrpLevel ? <span> {user.ntrpLevel} NTRP -</span> : null}
                                            {user.phoneNumber ? <span> Phone: {user.phoneNumber} </span> : null}
                                            <span>- Email: {user.email} </span>
                                            - Joined {user.joined ? moment(user.joined.toDate()).calendar() : null}
                                        </div>

                                        <div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        users: state.firestore.ordered.users,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         UsersList: () => dispatch(getUsers())
//     }
// }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users', orderBy: ['firstName', 'desc'] },
    ])
)(UsersList);