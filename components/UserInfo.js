export class UserInfo {
    constructor({name, about, avatar}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(about);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        this._userData = {name: this._name.textContent, about: this._description.textContent, avatar: this._avatar.src};
        return this._userData;
    }
    setUserInfo({name, about, avatar}) {
        this._name.textContent = name;
        this._description.textContent = about;
        this._avatar.src = avatar;
    }
}