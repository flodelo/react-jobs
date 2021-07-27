BEGIN;

INSERT INTO "user"(firstName, lastName, email, password, role) VALUES

('Felana', 'Letrange', 'felana@oclok.io', 'oclockfelanapwd', 'admin');

INSERT INTO job (title, description, company, technology, locality, contract, salary, user_id) VALUES
('Développeur react', 'lorem ipsum', 'oclockjob', 'react', 'paris', 'freelance', '35k', 1),
('Développeur react-redux', 'lorem ipsum', 'oclockjob', 'react-redux', 'paris', 'freelance', '35k', 1);

COMMIT;
