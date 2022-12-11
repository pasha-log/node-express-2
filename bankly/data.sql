
CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    -- BUG #5: makes more sense to make admin a NOT NULL column to register as an admin without having to insert into db directly.
    admin boolean NOT NULL DEFAULT false
);

-- BUG #3: npm run seed doesn't actually seed anything. Now it does.
INSERT INTO users (username, first_name, last_name, email, phone, password, admin)
VALUES ('testuser',
        'Test',
        'User',
        'joel@joelburton.com',
        '1234567890',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        false),
       ('testadmin',
        'Test',
        'Admin!',
        'joel@joelburton.com',
        '4567891011',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        true);
