BEGIN;
CREATE TABLE "user" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL 
);
CREATE TABLE job (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    company TEXT NOT NULL,
    technology TEXT NOT NULL,
    locality TEXT NOT NULL,
    contract TEXT NOT NULL,
    salary TEXT NOT NULL,
    user_id INT NOT NULL REFERENCES "user"(id)
);
COMMIT;
BEGIN;
INSERT INTO "user"(firstName, lastName, email, password, role) VALUES
('Felana', 'Letrange', 'felana@oclock.io', 'Felana', 'admin'),
('Caroline', 'Wiese', 'caroline@oclock.io', 'Caroline', 'admin'),
('Florian', 'Brun-Buisson', 'florian@oclock.io', 'Florian', 'admin'),
('Florian', 'Delobelle', 'flodelo@oclock.io', 'Florian', 'admin'),
('Alexandre', 'Chochois', 'alexandre@oclock.io', 'Alexandre', 'admin');
COMMIT;
