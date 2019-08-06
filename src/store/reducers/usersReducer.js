// const initState = {
//     error: null
// };
// const usersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'GET_USERS_ERROR':
//             console.log('Get users failed');
//             return {
//                 ...state,
//                 error: 'Get users Failed'
//             }
//         case 'GET_USERS_SUCCESS':
//             console.log('Get users success');
//             return {
//                 ...state,
//                 error: null
//             }
//         default:
//             return state;
//     }
// }

// export default usersReducer;