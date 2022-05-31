CREATE DATABASE task;

CREATE TABLE task(
    task_id SERIAL PRIMARY KEY,
    open_store VARCHAR(30) NOT NULL, 
    close_store VARCHAR(30) NOT NULL, 
    cleaning VARCHAR(30) NOT NULL, 
    inventory VARCHAR(30) NOT NULL, 
    created_at TIMESTAMP NOT NULL
);