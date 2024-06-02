import mongoose from "mongoose";
import Author from "./models/author.js";
import Book from "./models/book.js"; // Adjust the path
import Genre from "./models/genre.js"; // Adjust the path

const authors = [
  {
    firstName: "Jane",
    lastName: "Austen",
    bio: "English novelist known primarily for her six major novels which interpret, critique and comment upon the British landed gentry at the end of the 18th century.",
  },
  {
    firstName: "Mark",
    lastName: "Twain",
    bio: 'American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the "greatest humorist the United States has produced."',
  },
  {
    firstName: "J.K.",
    lastName: "Rowling",
    bio: "British author, best known for writing the Harry Potter fantasy series. The books have won multiple awards, and sold more than 500 million copies.",
  },
  {
    firstName: "George",
    lastName: "Orwell",
    bio: "English novelist, essayist, journalist and critic. His work is characterised by lucid prose, biting social criticism, opposition to totalitarianism, and outspoken support of democratic socialism.",
  },
  {
    firstName: "Leo",
    lastName: "Tolstoy",
    bio: "Russian writer who is regarded as one of the greatest authors of all time. He received multiple nominations for the Nobel Prize in Literature every year from 1902 to 1906.",
  },
];

const genres = [{ title: "Fiction" }, { title: "Fantasy" }, { title: "Science Fiction" }, { title: "Non-Fiction" }, { title: "Mystery" }];

const books = [
  {
    title: "Pride and Prejudice",
    description: "A romantic novel of manners written by Jane Austen.",
    pages: 279,
    genre: null, // Will be set later
    author: null, // Will be set later
  },
  {
    title: "Adventures of Huckleberry Finn",
    description: "A novel by Mark Twain, about a young boy and his adventures.",
    pages: 366,
    genre: null, // Will be set later
    author: null, // Will be set later
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    description: "A fantasy novel written by British author J.K. Rowling.",
    pages: 223,
    genre: null, // Will be set later
    author: null, // Will be set later
  },
  {
    title: "1984",
    description: "A dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell.",
    pages: 328,
    genre: null, // Will be set later
    author: null, // Will be set later
  },
  {
    title: "War and Peace",
    description: "A novel by the Russian author Leo Tolstoy, published from 1865 to 1869.",
    pages: 1225,
    genre: null, // Will be set later
    author: null, // Will be set later
  },
];

const populateDB = async () => {
  try {
    await mongoose.connection.dropDatabase(); // Clear the entire database

    // Insert authors
    const insertedAuthors = await Author.insertMany(authors);
    console.log("Authors inserted:", insertedAuthors);

    // Insert genres
    const insertedGenres = await Genre.insertMany(genres);
    console.log("Genres inserted:", insertedGenres);

    // Map books to include author and genre references
    books[0].author = insertedAuthors[0]._id;
    books[0].genre = insertedGenres[0]._id;

    books[1].author = insertedAuthors[1]._id;
    books[1].genre = insertedGenres[0]._id;

    books[2].author = insertedAuthors[2]._id;
    books[2].genre = insertedGenres[1]._id;

    books[3].author = insertedAuthors[3]._id;
    books[3].genre = insertedGenres[2]._id;

    books[4].author = insertedAuthors[4]._id;
    books[4].genre = insertedGenres[3]._id;

    // Insert books
    const insertedBooks = await Book.insertMany(books);
    console.log("Books inserted:", insertedBooks);

    mongoose.connection.close();
    console.log("Database populated and connection closed.");
  } catch (err) {
    console.error("Error populating database:", err);
    mongoose.connection.close();
  }
};

export default populateDB;
