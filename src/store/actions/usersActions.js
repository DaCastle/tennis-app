// export const getUsers = () => {
//     return (dispatch, getState, { getFirestore }) => {
//         const firestore = getFirestore();

//         return firestore.collection('users').doc().get()
//             .then(() => {
//                 dispatch({ type: 'GET_USERS_SUCCESS' });
//             }).catch(err => {
//                 dispatch({ type: 'GET_USERS_ERROR', err })
//             })
//     }
// }