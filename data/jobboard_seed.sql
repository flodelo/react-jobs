BEGIN;

INSERT INTO "user"(firstName, lastName, email, password, role) VALUES
('Caro', 'Wiese', 'carowiese@oclok.io', 'oclokcpwd', 'admin');

INSERT INTO job (title, description, company, technology, locality, contract, salary, user_id) VALUES
('Développeur react', 'lorem ipsum', 'oclockjob', 'react', 'paris', 'freelance', '35k', 1);

COMMIT;
