-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 07, 2022 at 01:07 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

drop database blog;
create database blog;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
# /*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

use blog;

CREATE TABLE `albums` (
                          `ID` int(4) UNSIGNED NOT NULL,
                          `ID_VISIBILITY` int(1) UNSIGNED NOT NULL,
                          `ID_USER` int(5) UNSIGNED NOT NULL,
                          `TITLE` varchar(128) NOT NULL,
                          `DESCRIPTION` text,
                          `CREATEDAT` datetime DEFAULT NULL,
                          `UPDATEDAT` datetime DEFAULT NULL,
                          `ID_PICTURE` int(4) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`ID`, `ID_VISIBILITY`, `ID_USER`, `TITLE`, `DESCRIPTION`, `CREATEDAT`, `UPDATEDAT`, `ID_PICTURE`) VALUES
(1, 1, 1, 'Langage C', 'Je desire parler de programmation C a fin d\'aider les jeunes programmeur.', '2022-06-05 22:31:07', '2022-06-05 22:31:07', 2),
(2, 1, 1, 'Langage C', 'Je desire parler de programmation C a fin d\'aider les jeunes programmeur.', '2022-06-06 12:50:24', '2022-06-06 12:50:24', 2);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
                           `ID` int(5) UNSIGNED NOT NULL,
                           `ID_POST` int(4) UNSIGNED NOT NULL,
                           `ID_USERS` int(5) UNSIGNED NOT NULL,
                           `TEXT` text NOT NULL,
                           `I_LIKE` tinyint(1) DEFAULT NULL,
                           `CREATEDAT` datetime DEFAULT NULL,
                           `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
                           `ID` int(5) UNSIGNED NOT NULL,
                           `ID_PICTURE` int(5) UNSIGNED NOT NULL,
                           `ID_POST` int(4) UNSIGNED NOT NULL,
                           `CREATEDAT` datetime DEFAULT NULL,
                           `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `is_friend_of`
--

CREATE TABLE `is_friend_of` (
                                `ID` int(5) UNSIGNED NOT NULL,
                                `ID_USERS1` int(5) UNSIGNED NOT NULL,
                                `ID_USERS2` int(5) UNSIGNED NOT NULL,
                                `CREATEDAT` datetime DEFAULT NULL,
                                `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pictures`
--

CREATE TABLE `pictures` (
                            `ID` int(5) UNSIGNED NOT NULL,
                            `SOURCE` varchar(255) NOT NULL,
                            `CREATEDAT` datetime DEFAULT NULL,
                            `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pictures`
--

INSERT INTO `pictures` (`ID`, `SOURCE`, `CREATEDAT`, `UPDATEDAT`) VALUES
(1, 'http://localhost/m0.jpg', '2022-06-05 22:29:53', '2022-06-05 22:29:53'),
(2, 'http://localhost/20.png', '2022-06-05 22:30:29', '2022-06-05 22:30:29'),
(3, 'http://localhost/8.png', '2022-06-07 09:45:11', '2022-06-07 09:45:11'),
(4, 'http://localhost/23.png', '2022-06-07 09:51:11', '2022-06-07 09:51:11');

-- --------------------------------------------------------

--
-- Table structure for table `possesses`
--

CREATE TABLE `possesses` (
                             `ID` int(5) UNSIGNED NOT NULL,
                             `ID_ALBUM` int(4) UNSIGNED NOT NULL,
                             `ID_POST` int(4) UNSIGNED NOT NULL,
                             `CREATEDAT` datetime DEFAULT NULL,
                             `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `possesses`
--

INSERT INTO `possesses` (`ID`, `ID_ALBUM`, `ID_POST`, `CREATEDAT`, `UPDATEDAT`) VALUES
(2, 1, 1, '2022-06-05 22:49:48', '2022-06-05 22:49:48');

-- --------------------------------------------------------

--
-- Table structure for table `postes`
--

CREATE TABLE `postes` (
                          `ID` int(4) UNSIGNED NOT NULL,
                          `ID_PICTURE` int(5) UNSIGNED NOT NULL,
                          `ID_VISIBILITY` int(1) UNSIGNED NOT NULL,
                          `TEXT` text,
                          `CREATEDAT` datetime DEFAULT NULL,
                          `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `postes`
--

INSERT INTO `postes` (`ID`, `ID_PICTURE`, `ID_VISIBILITY`, `TEXT`, `CREATEDAT`, `UPDATEDAT`) VALUES
(1, 1, 1, 'le post du ciecle  boobooboobooboobooboobooboo', '2022-06-05 22:49:37', '2022-06-05 22:49:37');

-- --------------------------------------------------------

--
-- Table structure for table `share`
--

CREATE TABLE `share` (
                         `ID` int(5) UNSIGNED NOT NULL,
                         `ID_USERS` int(5) UNSIGNED NOT NULL,
                         `ID_POST` int(4) UNSIGNED NOT NULL,
                         `CREATEDAT` datetime DEFAULT NULL,
                         `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
                         `ID` int(5) UNSIGNED NOT NULL,
                         `ID_PICTURE` int(5) UNSIGNED NOT NULL,
                         `FIRSTNAME` varchar(64) NOT NULL,
                         `LASTNAME` varchar(64) NOT NULL,
                         `USERNAME` varchar(128) NOT NULL,
                         `EMAIL` varchar(128) NOT NULL,
                         `PASSWORD` varchar(128) NOT NULL,
                         `CREATEDAT` datetime DEFAULT NULL,
                         `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `ID_PICTURE`, `FIRSTNAME`, `LASTNAME`, `USERNAME`, `EMAIL`, `PASSWORD`, `CREATEDAT`, `UPDATEDAT`) VALUES
(1, 1, 'erick', 'tsafack', 'ericktsaf237', 'ericktsafack2017@gmail.com', '$2b$10$z8j5yAqJNYUDrT24PbrsdOFJ7pCYJEVYDggDL79uxru1Rf8gfua4y', '2022-06-05 22:30:05', '2022-06-05 22:30:05'),
(2, 3, 'Bistrel', 'Naf', 'Bistrelnaf', 'Bistrelnaf@gmail.com', '$2b$10$CO8D36IO2nL12IkXSShzPOjWrf73rJD8QfmzncSXQCGZBf8.tiKnK', '2022-06-07 09:47:15', '2022-06-07 09:47:15'),
(3, 4, 'Eddy', 'Takendjeu', 'eddytakendjeu', 'eddytakendjeu@gmail.com', '$2b$10$kUTONKq8X7Lnfu9VZMGB8.IY0U/a8s5XDDv6XzdFZPPMsnubRfdyi', '2022-06-07 09:52:58', '2022-06-07 09:52:58');

-- --------------------------------------------------------

--
-- Table structure for table `visibilities`
--

CREATE TABLE `visibilities` (
                                `ID` int(1) UNSIGNED NOT NULL,
                                `VALUE` varchar(32) NOT NULL,
                                `CREATEDAT` datetime DEFAULT NULL,
                                `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `visibilities`
--

INSERT INTO `visibilities` (`ID`, `VALUE`, `CREATEDAT`, `UPDATEDAT`) VALUES
(1, 'public', '2022-06-05 22:29:30', '2022-06-05 22:29:30');

-- --------------------------------------------------------

--
-- Table structure for table  `work_ons`
--

CREATE TABLE  `work_ons` (
                             `ID` int(6) UNSIGNED NOT NULL,
                             `ID_USERS` int(5) UNSIGNED NOT NULL,
                             `ID_ALBUM` int(4) UNSIGNED NOT NULL,
                             `CREATEDAT` datetime DEFAULT NULL,
                             `UPDATEDAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
    ADD PRIMARY KEY (`ID`),
    ADD KEY `fk_picture` (`ID_PICTURE`),
    ADD KEY `I_FK_ALBUM_VISIBILTY` (`ID_VISIBILITY`),
    ADD KEY `I_FK_ALBUM_USERS` (`ID_USER`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
    ADD PRIMARY KEY (`ID`),
    ADD KEY `I_FK_COMMENT_POST` (`ID_POST`),
    ADD KEY `I_FK_COMMENT_USERS` (`ID_USERS`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
    ADD PRIMARY KEY (`ID`),
    ADD KEY `I_FK_CONTENT_PICTURE` (`ID_PICTURE`),
    ADD KEY `I_FK_CONTENT_POST` (`ID_POST`);

--
-- Indexes for table `is_friend_of`
--
ALTER TABLE `is_friend_of`
    ADD PRIMARY KEY (`ID`),
    ADD KEY `I_FK_IS_FRIEND_OF_USERS` (`ID_USERS1`),
    ADD KEY `I_FK_IS_FRIEND_OF_USERS1` (`ID_USERS2`);

--
-- Indexes for table `pictures`
--
ALTER TABLE `pictures`
    ADD PRIMARY KEY (`ID`),
    ADD UNIQUE KEY `SOURCE` (`SOURCE`);

--
-- Indexes for table `possesses`
--
ALTER TABLE `possesses`
    ADD PRIMARY KEY (`ID`),
    ADD KEY `I_FK_POSSESS_ALBUM` (`ID_ALBUM`),
    ADD KEY `I_FK_POSSESS_POST` (`ID_POST`);

--
-- Indexes for table `postes`
--
ALTER TABLE `postes`
    ADD PRIMARY KEY (`ID`),
    ADD KEY `I_FK_POST_PICTURE` (`ID_PICTURE`),
    ADD KEY `I_FK_POST_VISIBILTY` (`ID_VISIBILITY`);

--
-- Indexes for table `share`
--
ALTER TABLE `share`
    ADD PRIMARY KEY (`ID`),
    ADD KEY `I_FK_SHARE_USERS` (`ID_USERS`),
    ADD KEY `I_FK_SHARE_POST` (`ID_POST`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
    ADD PRIMARY KEY (`ID`),
    ADD UNIQUE KEY `USERNAME` (`USERNAME`),
    ADD UNIQUE KEY `EMAIL` (`EMAIL`),
    ADD KEY `I_FK_USERS_PICTURE` (`ID_PICTURE`);

--
-- Indexes for table `visibilities`
--
ALTER TABLE `visibilities`
    ADD PRIMARY KEY (`ID`);

--
-- Indexes for table  `work_ons`
--
ALTER TABLE  `work_ons`
    ADD PRIMARY KEY (`ID`),
    ADD KEY `I_FK_WORK_ON_USERS` (`ID_USERS`),
    ADD KEY `I_FK_WORK_ON_ALBUM` (`ID_ALBUM`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
    MODIFY `ID` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
    MODIFY `ID` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
    MODIFY `ID` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `is_friend_of`
--
ALTER TABLE `is_friend_of`
    MODIFY `ID` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pictures`
--
ALTER TABLE `pictures`
    MODIFY `ID` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `possesses`
--
ALTER TABLE `possesses`
    MODIFY `ID` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `postes`
--
ALTER TABLE `postes`
    MODIFY `ID` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `share`
--
ALTER TABLE `share`
    MODIFY `ID` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
    MODIFY `ID` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `visibilities`
--
ALTER TABLE `visibilities`
    MODIFY `ID` int(1) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table  `work_ons`
--
ALTER TABLE  `work_ons`
    MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
    ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`ID_VISIBILITY`) REFERENCES `visibilities` (`ID`),
    ADD CONSTRAINT `albums_ibfk_2` FOREIGN KEY (`ID_USER`) REFERENCES `users` (`ID`),
    ADD CONSTRAINT `fk_picture` FOREIGN KEY (`ID_PICTURE`) REFERENCES `pictures` (`ID`);

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
    ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`ID_POST`) REFERENCES `postes` (`ID`),
    ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`ID_USERS`) REFERENCES `users` (`ID`);

--
-- Constraints for table `content`
--
ALTER TABLE `content`
    ADD CONSTRAINT `content_ibfk_1` FOREIGN KEY (`ID_PICTURE`) REFERENCES `pictures` (`ID`),
    ADD CONSTRAINT `content_ibfk_2` FOREIGN KEY (`ID_POST`) REFERENCES `postes` (`ID`);

--
-- Constraints for table `is_friend_of`
--
ALTER TABLE `is_friend_of`
    ADD CONSTRAINT `is_friend_of_ibfk_1` FOREIGN KEY (`ID_USERS1`) REFERENCES `users` (`ID`),
    ADD CONSTRAINT `is_friend_of_ibfk_2` FOREIGN KEY (`ID_USERS2`) REFERENCES `users` (`ID`);

--
-- Constraints for table `possesses`
--
ALTER TABLE `possesses`
    ADD CONSTRAINT `possesses_ibfk_1` FOREIGN KEY (`ID_ALBUM`) REFERENCES `albums` (`ID`),
    ADD CONSTRAINT `possesses_ibfk_2` FOREIGN KEY (`ID_POST`) REFERENCES `postes` (`ID`);

--
-- Constraints for table `postes`
--
ALTER TABLE `postes`
    ADD CONSTRAINT `postes_ibfk_1` FOREIGN KEY (`ID_PICTURE`) REFERENCES `pictures` (`ID`),
    ADD CONSTRAINT `postes_ibfk_2` FOREIGN KEY (`ID_VISIBILITY`) REFERENCES `visibilities` (`ID`);

--
-- Constraints for table `share`
--
ALTER TABLE `share`
    ADD CONSTRAINT `share_ibfk_1` FOREIGN KEY (`ID_USERS`) REFERENCES `users` (`ID`),
    ADD CONSTRAINT `share_ibfk_2` FOREIGN KEY (`ID_POST`) REFERENCES `postes` (`ID`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
    ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`ID_PICTURE`) REFERENCES `pictures` (`ID`);

--
-- Constraints for table  `work_ons`
--
ALTER TABLE  `work_ons`
    ADD CONSTRAINT `work_on_ibfk_1` FOREIGN KEY (`ID_USERS`) REFERENCES `users` (`ID`),
    ADD CONSTRAINT `work_on_ibfk_2` FOREIGN KEY (`ID_ALBUM`) REFERENCES `albums` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
