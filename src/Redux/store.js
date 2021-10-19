import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
     _state: {
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Dima", imgAdr: "https://pbs.twimg.com/profile_images/992724940485988352/RMyVd-hH.jpg"},
                {
                    id: 2,
                    name: "Lena",
                    imgAdr: "https://bipbap.ru/wp-content/uploads/2017/05/3ff0fd216f3ad2941920597d9a83d819.jpg"
                },
                {id: 3, name: "Ira", imgAdr: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"},
                {
                    id: 4,
                    name: "Alexey",
                    imgAdr: "https://vraki.net/sites/default/files/inline/images/1551511862_48.jpg"
                }],

            newMessageBody:'',

            messagesData: [
                {id: 1, message: "Hi", imgAdr: "https://pbs.twimg.com/profile_images/992724940485988352/RMyVd-hH.jpg"},
                {
                    id: 2,
                    message: "How are you today?",
                    imgAdr: "https://bipbap.ru/wp-content/uploads/2017/05/3ff0fd216f3ad2941920597d9a83d819.jpg"
                },
                {id: 3, message: "Ok", imgAdr: "https://pbs.twimg.com/profile_images/992724940485988352/RMyVd-hH.jpg"},
                {
                    id: 4,
                    message: "Good evening!",
                    imgAdr: "https://bipbap.ru/wp-content/uploads/2017/05/3ff0fd216f3ad2941920597d9a83d819.jpg"
                }
            ],
        },
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: "Hello! How are you?",
                    imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
                    likecount: 10
                },
                {
                    id: 2,
                    message: "I study React!",
                    imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
                    likecount: 3
                },
                {
                    id: 3,
                    message: "Good Luck!",
                    imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
                    likecount: 8
                },
                {
                    id: 4,
                    message: "I like travel",
                    imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
                    likecount: 20
                }
            ],
            newPostText: ""
        },
        sideBar: {
            friends: [
                {id: 1, name: "Dima", imgAdr: "https://pbs.twimg.com/profile_images/992724940485988352/RMyVd-hH.jpg"},
                {
                    id: 2,
                    name: "Lena",
                    imgAdr: "https://bipbap.ru/wp-content/uploads/2017/05/3ff0fd216f3ad2941920597d9a83d819.jpg"
                },
                {id: 3, name: "Ira", imgAdr: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"}
            ]
        }
    },

    _callSubscriber () {
        console.log("state changed");
    },

    subscribe(observer){
        this._callSubscriber = observer;      //наблюдатель паттерн

    },

    getState(){
        return this._state;
    },
    //action - объект, у которого как минимум есть {type:'ADD-POST'}
    dispatch(action){
         this._state.profilePage = profileReducer(this._state.profilePage, action);
         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
         this._state.sideBar = sidebarReducer(this._state.sideBar, action);
         this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;