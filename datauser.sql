-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2020 at 01:24 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datauser`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `Username` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `name` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `tel` int(10) NOT NULL,
  `msg` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`name`, `email`, `tel`, `msg`) VALUES
('undefined', 'undefined', 0, 'undefined'),
('undefined', 'undefined', 0, 'undefined'),
('undefined', 'undefined', 0, 'undefined'),
('undefined', 'undefined', 0, 'undefined'),
('1', 'worapongsunthornpattanapimol@gmail.com', 0, 'undefined'),
('1', 'worapongsunthornpattanapimol@gmail.com', 0, 'undefined'),
('1', 'worapongsunthornpattanapimol@gmail.com', 0, 'undefined'),
('1', '1810511101030@live4.utcc.ac.th', 1, '1'),
('1', '1810511101030@live4.utcc.ac.th', 1, '1'),
('1', 'worapongsunthornpattanapimol@gmail.com', 1, '1'),
('1', 'worapongsunthornpattanapimol@gmail.com', 1, '1'),
('1', 'worapongsunthornpattanapimol@gmail.com', 1, '1'),
('1', 'worapongsunthornpattanapimol@gmail.com', 1, '1'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 3, '3'),
('3', 'worapongsunthornpattanapimol@gmail.com', 1, 'e'),
('undefined', 'undefined', 0, 'undefined');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`Username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
