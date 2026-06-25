export class Link {
    userId: string;
    name: string;
    url: string;

    constructor(userId, nome, url) {
        this.userId = userId;
        this.name = nome;
        this.url = url;
    }

    getUserId() {
        return this.userId;
    }

    getName() {
        return this.name;
    }

    getUrl() {
        return this.url;
    }

    setUserId(userId) {
        this.userId = userId;
    }

    setNome(name) {
        this.name = name;
    }

    setUrl(url) {
        this.url = url;
    }
}
