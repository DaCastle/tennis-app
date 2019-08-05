const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(document => console.log('notification added', document));
});

exports.postCreated = functions.firestore
    .document('posts/{postId}')
    .onCreate(document => {

        const post = document.data();
        const notification = {
            content: 'Created a new post',
            user: `${post.authorFirstName} ${post.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    });


exports.userJoined = functions.auth.user().
    onCreate(user => {

        return admin.firestore().collection('users')
            .doc(user.uid).get()
            .then(doc => {

                const newUser = doc.data();
                const notification = {
                    content: 'Joined the party',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification);

            })

    })
