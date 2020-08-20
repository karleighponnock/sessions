import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn/index";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid/index";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Avatar from "../../components/Avatar/Avatar"
import "./style.css";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <div className="pic">
        <Avatar />
      </div>
      <Row>
        <div className="info">
          <Col size="md-12 sm-4 ">
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <div className="info">
                        <div className="name">
                          {book.title}
                        </div>
                        <div className="location">
                          <br />
                        from {book.author}
                        </div> <br />
                        {book.synopsis}
                      </div>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>

                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </div>
        <div>
          <Col size="md-12" >
            <form className="form">
              <h2>Update Profile</h2>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Name (required)"
                className="fill-name"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Location (required)"
                className="fill-loc"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Bio (optional)"
                className="fill-bio"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </div>
      </Row>
    </Container>
  );
}


export default Books;
