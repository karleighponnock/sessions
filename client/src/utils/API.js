import axios from "axios";

export default {
    // API request to server side 
    register(data) {
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    },

    // Gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
}