import { makeAutoObservable } from "mobx";

class Store {
    status = 'Please allow us to use your webcam';
    classes = null;
    isModelLoaded = false;
    isWebcamLoaded = false;

    constructor() {
        // decorators were deprecated as of MobX version 6
        // used it instead
        makeAutoObservable(this)
    }
}


const store = new Store();

// for dev
window.store = store;

export default store;