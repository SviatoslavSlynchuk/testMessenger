import RemoteStorage from './chatMocks';

const storage = new RemoteStorage(localStorage);

export default class RestAPI {
    static getChats = () => {
        return storage.getData();
    }

    static postMessage = (id, messageObj) => {
        storage.postMessage(id, messageObj);
    }
}