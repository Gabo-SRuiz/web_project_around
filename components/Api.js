class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }

    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                ...this._headers,
            } 
        })
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                return Promise.reject(`ERROR: ${res.status}`);
            }
        })
    }
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards/`, {
            method: "GET",
            headers: {
                ...this._headers,
            } 
        })
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                return Promise.reject(`ERROR: ${res.status}`);
            }
        })
    }
  
    editProfile(body) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                ...this._headers,
            },
            body: JSON.stringify(body) 
        })
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                return Promise.reject(`ERROR: ${res.status}`);
            }
        })
    }

    addCard(body) {
        return fetch(`${this._baseUrl}/cards/`, {
            method: "POST",
            headers: {
                ...this._headers,
            },
            body: JSON.stringify(body)
        })
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                return Promise.reject(`ERROR: ${res.status}`);
            }
        })
    }

    IsLiked(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: {
                ...this._headers,
            },
        })
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                return Promise.reject(`ERROR: ${res.status}`);
            }
        })
    }

    deleteIsLiked(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: {
                ...this._headers,
            },
        })
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                return Promise.reject(`ERROR: ${res.status}`);
            }
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                ...this._headers,
            },
        })
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                return Promise.reject(`ERROR: ${res.status}`);
            }
        })
    }

    
    updateAvatar(body) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                ...this._headers,
            },
            body: JSON.stringify(body)
        })
        .then((res) => {
            if(res.ok){
                return res.json()
            } else {
                return Promise.reject(`ERROR: ${res.status}`);
            }
        })
    }
}
  
  const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
      authorization: "2f04be5f-9a60-45fe-9378-27f1bc558fb9",
      "Content-Type": "application/json",
    },
  });

  export {api}