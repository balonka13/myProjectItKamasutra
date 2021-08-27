import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendsReducer from "./friends-reducer";


let store = {
    _state: {

        friendsPage:{
            friends: [
                {id: 1, name: 'Guts',src:'https://i.kym-cdn.com/photos/images/facebook/000/052/289/1268892379747.jpg'},
                {id: 2, name: 'Kaska',src:'https://image.myanimelist.net/ui/4xANNJZlKL2mFaM3ceJGQ91Q4wN4AlIQD_vbUocvoiu5yopJV6N-jdHQ5oeOeDJL'},
                {id: 3, name: 'Rikert',src:'https://i.imgur.com/UpNNKsN.png'},
                {id: 4, name: 'Griffit',src:'https://i.pinimg.com/originals/61/2b/dd/612bdd1217c94b8ad15cd0db99398bb0.jpg'},
                {id: 5, name: 'Zod',src:'https://i.pinimg.com/originals/a4/e0/3c/a4e03c9a88d2455f663947ed21480541.jpg'}
            ],
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 0}
            ],
            newPostText: 'it-kamasutra.com'
        },

        messagesPage: {

            messages: [
                {id: 1, message: 'Hi...'},
                {id: 2, message: 'how a you?'},
                {id: 3, message: 'norm'}
            ],
            dialogs: [
                {id: 1, name: 'Guts',src:'https://i.kym-cdn.com/photos/images/facebook/000/052/289/1268892379747.jpg'},
                {id: 2, name: 'Kaska',src:'https://image.myanimelist.net/ui/4xANNJZlKL2mFaM3ceJGQ91Q4wN4AlIQD_vbUocvoiu5yopJV6N-jdHQ5oeOeDJL'},
                {id: 3, name: 'Rikert',src:'https://i.imgur.com/UpNNKsN.png'},
                {id: 4, name: 'Griffit',src:'https://i.pinimg.com/originals/61/2b/dd/612bdd1217c94b8ad15cd0db99398bb0.jpg'},
                {id: 5, name: 'Zod',src:'https://i.pinimg.com/originals/a4/e0/3c/a4e03c9a88d2455f663947ed21480541.jpg'}
            ],
            newMessageBody:''
        },
        sidebar:{},


    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = messageReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;