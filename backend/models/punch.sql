CREATE DATABASE punch;

CREATE TABLE punch(
    punch_id SERIAL PRIMARY KEY,
    clock_in_out VARCHAR(30) NOT NULL, 
    lunch_in_out VARCHAR(30) NOT NULL, 
    created_at TIMESTAMP NOT NULL
);