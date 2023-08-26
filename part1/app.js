const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wing', author: 'patrick', isFav: true, id: 1},
                {title: 'harry potter', author: 'jk rowling',  isFav: false, id: 2},
                {title: 'how to train your dragon', author: 'disney',  isFav: true, id: 3}
            ],
            url: "www.google.com"
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = ! this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data !== undefined) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')