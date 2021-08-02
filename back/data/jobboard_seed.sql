BEGIN;

INSERT INTO "user"(firstName, lastName, email, password, role) VALUES
('Felana', 'Letrange', 'felana@oclock.io', 'Felana', 'admin'),
('Caroline', 'Wiese', 'caroline@oclock.io', 'Caroline', 'admin'),
('Florian', 'Brun-Buisson', 'florian@oclock.io', 'Florian', 'admin'),
('Florian', 'Delobelle', 'flodelo@oclock.io', 'Florian', 'admin'),
('Alexandre', 'Chochois', 'alexandre@oclock.io', 'Alexandre', 'admin');

INSERT INTO job(title, description, company, technology, locality, contract, salary, user_id) VALUES
("ReactJOb", "lorem ipsum", "M&M", "à domicile", "CDI", 50k, 1),
("React", "lorem ipsum", "ME", "POITIERS", "CDI", 50k, 1),
("React-, "lorem ipsum", "M&M", "à domicile", "CDI", 50k, 1),
("ReactJOb", "lorem ipsum", "M&M", "à domicile", "CDI", 50k, 1);

COMMIT;

