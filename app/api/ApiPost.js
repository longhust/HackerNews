export default class API {

    constructor() {
        this.baseUrl = 'https://hacker-news.firebaseio.com/v0/'
        this.baseUrlItems = 'https://hacker-news.firebaseio.com/v0/item/'
    }
    getList(category) {
        const url = this.baseUrl + category + '.json'
        //console.log('urlCategory:', url)
        return fetch(url).then((respone) => respone.json())
    }
    getNews(ID) {
        const url = this.baseUrlItems + ID + '.json'
        //console.log('urlID:', url)
        return fetch(url).then((respone) => respone.json())
    }
}
