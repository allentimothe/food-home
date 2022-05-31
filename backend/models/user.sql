CREATE DATABASE user;

CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    email VARCHAR(30) NOT NULL, 
    pass_word VARCHAR(30) NOT NULL, 
    created_at TIMESTAMP NOT NULL
);