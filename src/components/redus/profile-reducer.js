const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POSR_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE ='SET_USERS_PROFILE';
const SET_LOOKING_FOR_A_JOB = 'SET_LOOKING_FOR_A_JOB';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 0}
    ],
    newPostText: 'it-kamasytra',
    profile: null,
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POSR_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_LOOKING_FOR_A_JOB: {
            return {...state, lookingForAJob: action.lookingForAJob}
        }
        default:
            return state;
    }
}

export const setLookingForAJob = (lookingForAJob) => ({type:SET_LOOKING_FOR_A_JOB,lookingForAJob})
export const  setUsersProfile = (profile) => ({type:SET_USERS_PROFILE, profile})
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POSR_TEXT, newText: text})

export default profileReducer;