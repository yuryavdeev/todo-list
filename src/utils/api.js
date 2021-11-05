class Api {
    constructor({ url }) {
        this._url = url
    }

    async getTasks() {
        const res = await fetch(`${this._url}`, {
            method: 'GET',
            'Content-Type': 'application/json',
        })
        return res.ok && res.json()
    }
}

const api = new Api // <=  создал экзмепляр
    ({
        url: 'https://jsonplaceholder.typicode.com/todos?_limit=3',
    })

export default api