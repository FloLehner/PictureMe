-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 27. Apr 2017 um 22:31
-- Server-Version: 10.1.9-MariaDB
-- PHP-Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `PictureMe`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `coordinates`
--

CREATE TABLE `coordinates` (
  `latitude` varchar(250) NOT NULL,
  `longitude` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `coordinates`
--

INSERT INTO `coordinates` (`latitude`, `longitude`, `title`) VALUES
('38.560567', '-121.407157', 'America River'),
('37.804949', '-122.428886', 'Golden Gate National Recreation Area');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `items`
--

CREATE TABLE `items` (
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `itemname` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `items`
--

INSERT INTO `items` (`username`, `password`, `itemname`) VALUES
('Oma', 'oma', 'Stativ'),
('Oma', 'oma', 'Kamera'),
('Oma', 'oma', 'Kameratasche'),
('Florian', 'flo', 'Kamera'),
('Florian', 'flo', 'Stativ'),
('Florian', 'flo', 'Kameratasche'),
('Florian', 'flo', 'Objektiv'),
('Testuser', 'test', 'Kamera'),
('Testuser', 'test', 'Stativ'),
('Testuser', 'test', 'Objektiv'),
('Test', 'tester', 'Stativ'),
('Test', 'tester', 'Objektiv'),
('next', 'next', 'wowow');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `mail` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`id`, `username`, `mail`, `password`) VALUES
(1, 'Florian', 'flo.lehner@live.at', 'flo'),
(9, 'oma', 'oma@oma.at', 'oma'),
(10, 'Nicole', 'nicole@nicole.at', 'nici'),
(11, 'Testuser', 'test@test.at', 'test'),
(12, 'Test', 'test@test2.at', 'tester'),
(13, 'next', 'next@next.at', 'next');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
