const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState ={
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
    ]
};

const dialogsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageBody,
                imgAdr: "https://bipbap.ru/wp-content/uploads/2017/05/3ff0fd216f3ad2941920597d9a83d819.jpg"
            }
            return  {...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageBody: ''};

        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {...state,
                newMessageBody: action.newMessageSymbol};
        }
        default:
            return state;
    }
}


export const sendMessageCreator = ()=>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text)=>({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageSymbol: text
})
export default dialogsReducer;