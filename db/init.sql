CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    release_date DATE,
    total_pages INTEGER,
    genre VARCHAR(100)
);

INSERT INTO books (title, author, release_date, total_pages, genre)
VALUES
    ('The Great Gatsby', 'F. Scott Fitzgerald', '1925-04-10', 180, 'Novel'),
    ('1984', 'George Orwell', '1949-06-08', 328, 'Dystopian'),
    ('To Kill a Mockingbird', 'Harper Lee', '1960-07-11', 281, 'Novel');
