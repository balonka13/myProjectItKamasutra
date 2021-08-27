const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi...'},
        {id: 2, message: 'how a you?'},
        {id: 3, message: 'norm'}
    ],
    dialogs: [
        {id: 1, name: 'Guts', src: 'https://i.kym-cdn.com/photos/images/facebook/000/052/289/1268892379747.jpg'},
        {id: 2, name: 'Kaska', src: 'https://image.myanimelist.net/ui/4xANNJZlKL2mFaM3ceJGQ91Q4wN4AlIQD_vbUocvoiu5yopJV6N-jdHQ5oeOeDJL'},
        {id: 3, name: 'Rikert', src: 'https://i.imgur.com/UpNNKsN.png'},
        {id: 4, name: 'Griffit', src: 'https://i.pinimg.com/originals/61/2b/dd/612bdd1217c94b8ad15cd0db99398bb0.jpg'},
        {id: 5, name: 'Zod', src: 'https://i.pinimg.com/originals/a4/e0/3c/a4e03c9a88d2455f663947ed21480541.jpg'}
    ],
    newMessageBody: ''
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messageReducer;