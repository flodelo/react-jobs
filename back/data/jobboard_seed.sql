BEGIN;

INSERT INTO "user"(firstName, lastName, email, password, role) VALUES
('Felana', 'Letrange', 'felana@oclock.io', 'Felana', 'admin'),
('Caroline', 'Wiese', 'caroline@oclock.io', 'Caroline', 'admin'),
('Florian', 'Brun-Buisson', 'florian@oclock.io', 'Florian', 'admin'),
('Florian', 'Delobelle', 'flodelo@oclock.io', 'Florian', 'admin'),
('Alexandre', 'Chochois', 'alexandre@oclock.io', 'Alexandre', 'admin');

COMMIT;