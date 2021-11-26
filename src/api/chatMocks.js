export const CHATS_KEYWORD = 'portsideChats';

const CHATS_MOCK = [
    {
        id: 0,
        name: 'Work Chat',
        messages: [
            {
                author: 'Alex',
                self: false,
                message: 'Hi!'
            },
            {
                author: 'Me',
                self: true,
                message: 'Wazzup!!!'
            }
        ]
    },
    {
        id: 1,
        name: 'Work Chat 2',
        messages: [
            {
                author: 'Jane',
                self: false,
                message: 'Where is the report????'
            }
        ]
    },
    {
        id: 2,
        name: 'Gary H',
        messages: []
    },
    {
        id: 3,
        name: 'Julia',
        messages: []
    },
    {
        id: 4,
        name: 'Jane',
        messages: []
    }
];

export default class RemoteStorage {
    constructor(storage) {
        if (!this.instance) {
            this.storage = storage;
            this.data = this.getFromStorage(CHATS_KEYWORD);

            if (!this.data) {
                this.setData(CHATS_KEYWORD, CHATS_MOCK);
            }

            this.instance = this;
        }

        return this.instance;
    }

    convertIntoServerObj = (data) => JSON.stringify(data);
    
    convertFromServerObj = (data) => JSON.parse(data);

    setData(key, data) {
        try {
            this.storage.setItem(key, this.convertIntoServerObj(data));
            this.data = data;

            return Promise.resolve();
        } catch(err) {
            console.log(err);
        }
    }

    getFromStorage(key) {
        const data = this.storage.getItem(key);

        return this.convertFromServerObj(data);
    }

    getData() {
        return this.data;
    }

    postMessage(id, messageObj) {
        this.data = this.data.map((chat) => chat.id === id ?
            {
                ...chat,
                messages: [ ...chat.messages, messageObj ]
            }
            : chat
        );

        this.setData(CHATS_KEYWORD, this.data);
    }
}
