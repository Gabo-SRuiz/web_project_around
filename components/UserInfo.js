export class UserInfo {
    constructor({name, description}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        this._userData = {name: this._name.textContent, description: this._description.textContent};
        return this._userData;
    }
    setUserInfo({name, description}) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}