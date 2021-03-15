-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2021 at 07:03 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libary_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `addnewmember`
--

CREATE TABLE `addnewmember` (
  `id` varchar(15) NOT NULL,
  `name` varchar(15) NOT NULL,
  `email` varchar(15) NOT NULL,
  `place` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addnewmember`
--

INSERT INTO `addnewmember` (`id`, `name`, `email`, `place`) VALUES
('2', 'anita', 'anita@gmail.com', 'perambra'),
('1', 'kiran', 'kiram@gmail.com', 'ulliyeri');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `email` varchar(15) NOT NULL,
  `password` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`email`, `password`) VALUES
('admin@gmil.com', 'admin123'),
('akhil@gmail.com', '123456'),
('akshaya497@gmai', '123457'),
('akshayatk@gmail', '567575'),
('an@gmail.com', 'anuanu');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `email` varchar(15) NOT NULL,
  `password` varchar(7) NOT NULL,
  `repass` varchar(7) NOT NULL,
  `regnum` varchar(15) NOT NULL,
  `date` date NOT NULL,
  `place` varchar(50) NOT NULL,
  `pin` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`email`, `password`, `repass`, `regnum`, `date`, `place`, `pin`) VALUES
('akshayat@gmail.', '123456', '123456', '256', '2021-03-25', 'balussery', '6789'),
('akshayatk497@gm', '123456', '123456', '256', '2021-03-25', 'balussery', '6789');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addnewmember`
--
ALTER TABLE `addnewmember`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
