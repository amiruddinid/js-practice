// DDL 
// 1. CREATE
CREATE DATABASE nama_db;

// CREATE Table
CREATE TABLE books (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL DEFAULT 0,
    sold BOOLEAN NOT NULL DEFAULT FALSE
);

// 2. ALTER
// menganti nama database
ALTER DATABASE nama_db RENAME TO nama_db_baru;

// 3. DROP
// menghapus database
DROP DATABASE nama_db;

// Memilih database active
\c nama_db;

// Check list db di postgres
\l

// check structure Table
\d+ table_name

//DML
// 1. INSERT
INSERT INTO books (title, body, author, price, sold)
VALUES ('Test', 'lorem ipsum', 'Me', 1000, false);

// 2. SELECT
SELECT * FROM books;