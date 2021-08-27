import {combineReducers, createStore} from "redux";
import friendsReducer from "./friends-reducer";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./User-reduser";
import authReducer from "./auth-reducer";



let reducers = combineReducers({
    friendsPage:friendsReducer,
    messagesPage:messageReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;


export default store;