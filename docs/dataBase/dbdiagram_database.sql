CREATE DATABASE productLogger;

CREATE TABLE `user` (
  `id` int PRIMARY KEY,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) UNIQUE NOT NULL,
  `password` varchar(45)
);

CREATE TABLE `admin` (
  `userId` int PRIMARY KEY,
  `permissions` varchar(255)
);

CREATE TABLE `product` (
  `id` int PRIMARY KEY,
  `title` varchar(45),
  `description` text,
  `url` varchar(255),
  `views` int,
  `likes` int,
  `userId` int
);

CREATE TABLE `tag` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `image` (
  `id` int PRIMARY KEY,
  `idProduto` int,
  `data` blob
);

CREATE TABLE `product_tag` (
  `productId` int,
  `tagId` int,
  PRIMARY KEY (`productId`, `tagId`)
);

ALTER TABLE `admin` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

ALTER TABLE `image` ADD FOREIGN KEY (`idProduto`) REFERENCES `product` (`id`);

ALTER TABLE `product_tag` ADD FOREIGN KEY (`productId`) REFERENCES `product` (`id`);

ALTER TABLE `product_tag` ADD FOREIGN KEY (`tagId`) REFERENCES `tag` (`id`);

-- Querys

-- Seleção de Admins com todos os dados de usuario
SELECT admins.id as adminId, users.id as userId, users.name, users.email, users.password, admins.permissions, users.createdAt as userCreatedAt, admins.createdAt as adminCreatedAt
FROM users
INNER JOIN admins
ON users.id = admins.userId;

DELETE FROM `Users` WHERE `id` = 3;
