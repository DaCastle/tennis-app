const initState = {
    posts: [
        { id: '1', title: 'Looking for hitting partners?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse hic. Similique minus ipsa repellendus fugit, debitis consectetur, qui earum soluta voluptates obcaecati modi natus aperiam ipsam, ad nihil porro.' },
        { id: '2', title: 'Looking to hit at Zachary Playfield courts', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse hic. Similique minus ipsa repellendus fugit, debitis consectetur, qui earum soluta voluptates obcaecati modi natus aperiam ipsam, ad nihil porro.' },
        { id: '3', title: 'other good courts near by?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse hic. Similique minus ipsa repellendus fugit, debitis consectetur, qui earum soluta voluptates obcaecati modi natus aperiam ipsam, ad nihil porro.' }

    ]
};

const postReducer = (state = initState, action) => {
    return state;
}

export default postReducer;