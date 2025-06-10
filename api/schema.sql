CREATE TABLE users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255) -- hashed password will be stored
);

CREATE TABLE contacts (
    contactId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    picturePath VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);

INSERT INTO users (name, email, password)
VALUES 
('Alice Johnson', 'alice@example.com', '$2y$10$eImiTXuWVxfM37uY4JANjQ=='),
('Bob Smith', 'bob@example.com', '$2y$10$7aTqG6h1DpOZ9Kc8cU3Ege=='),
('Charlie Lee', 'charlie@example.com', '$2y$10$Lp7skA12UTExYQkYz9QaY.==');
