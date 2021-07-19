-- Deploy jobboard:init to pg

BEGIN;

CREATE TABLE user (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL
);

COMMIT;
