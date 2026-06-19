-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2026 at 08:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dpet`
--
CREATE DATABASE IF NOT EXISTS `dpet` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dpet`;

-- --------------------------------------------------------

--
-- Table structure for table `attraction_images`
--

CREATE TABLE `attraction_images` (
  `image_id` int(11) NOT NULL,
  `attraction_id` int(11) NOT NULL,
  `image_url` varchar(500) NOT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `is_cover` tinyint(1) NOT NULL DEFAULT 0,
  `sort_order` int(11) DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attraction_images`
--

INSERT INTO `attraction_images` (`image_id`, `attraction_id`, `image_url`, `caption`, `is_cover`, `sort_order`, `created_at`) VALUES
(1, 4, '/S4.jpg', NULL, 1, 0, '2026-05-01 08:08:49.840'),
(2, 5, '/S5.jpg', NULL, 1, 0, '2026-05-01 08:08:49.860'),
(4, 7, '/S7.jpg', NULL, 1, 0, '2026-05-01 08:08:49.896'),
(5, 8, '/S8.jpg', NULL, 1, 0, '2026-05-01 08:08:49.911'),
(6, 9, '/S9.jpg', NULL, 1, 0, '2026-05-01 08:08:49.928'),
(7, 10, '/S10.jpg', NULL, 1, 0, '2026-05-01 08:08:49.941'),
(8, 11, '/S11.jpg', NULL, 1, 0, '2026-05-01 08:08:49.954'),
(9, 12, '/S12.jpg', NULL, 1, 0, '2026-05-01 08:08:49.968'),
(10, 13, '/S13.jpg', NULL, 1, 0, '2026-05-01 08:08:49.982'),
(11, 14, '/S14.jpg', NULL, 1, 0, '2026-05-01 08:08:49.997'),
(12, 15, '/S15.jpg', NULL, 1, 0, '2026-05-01 08:08:50.010'),
(14, 6, '/uploads/attractions/1777627786055-fern.png', NULL, 1, 0, '2026-05-01 09:29:46.058');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `booking_date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `status` varchar(50) NOT NULL DEFAULT 'PENDING',
  `total_price` decimal(10,2) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `id_card` varchar(50) DEFAULT NULL,
  `current_address` text DEFAULT NULL,
  `identity_address` text DEFAULT NULL,
  `booking_status` varchar(50) NOT NULL DEFAULT 'PENDING',
  `people_count` int(11) NOT NULL DEFAULT 1,
  `schedule_id` int(11) DEFAULT NULL,
  `current_address_detail` text DEFAULT NULL,
  `current_district` varchar(100) DEFAULT NULL,
  `current_province` varchar(100) DEFAULT NULL,
  `current_subdistrict` varchar(100) DEFAULT NULL,
  `current_zipcode` varchar(10) DEFAULT NULL,
  `identity_address_detail` text DEFAULT NULL,
  `identity_district` varchar(100) DEFAULT NULL,
  `identity_province` varchar(100) DEFAULT NULL,
  `identity_subdistrict` varchar(100) DEFAULT NULL,
  `identity_zipcode` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`booking_id`, `user_id`, `package_id`, `booking_date`, `status`, `total_price`, `first_name`, `last_name`, `email`, `phone`, `id_card`, `current_address`, `identity_address`, `booking_status`, `people_count`, `schedule_id`, `current_address_detail`, `current_district`, `current_province`, `current_subdistrict`, `current_zipcode`, `identity_address_detail`, `identity_district`, `identity_province`, `identity_subdistrict`, `identity_zipcode`) VALUES
(1, 21, 1, '2026-03-31 16:50:26.964', 'pending', 4500.00, 'a', 'a', 'a', 'a', 'a', 'สระบุรี สระบุรี สระบุรี สระบุรี', 'สระบุรี สระบุรี สระบุรี สระบุรี', 'PENDING', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 23, 1, '2026-05-01 07:07:24.855', 'PENDING', 9000.00, 'Demo', 'User', 'demo@srbr.test', '0800000000', NULL, NULL, NULL, 'PENDING', 2, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 22, 1, '2026-05-01 07:30:05.087', 'CONFIRMED', 4500.00, 'ดี', 'จัา', 'dee@email.com', '0123456789', '1100100111001', 'บ้าน', 'บ้าน', 'CONFIRMED', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 22, 1, '2026-05-01 07:33:35.705', 'PENDING', 4500.00, 'dee', 'dee', 'dee@mail.com', '0123456789', '0123456789', '0123456789', '0123456789', 'PENDING', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 22, 6, '2026-05-01 14:46:33.484', 'PENDING', 2100.00, 'dee', 'dee', 'dee@mail.com', '0123456789', '0123456789', 'dee ดอนหญ้านาง ภาชี พระนครศรีอยุธยา 13140', 'dee ดอนหญ้านาง ภาชี พระนครศรีอยุธยา 13140', 'PENDING', 1, 14, 'dee', 'ภาชี', 'พระนครศรีอยุธยา', 'ดอนหญ้านาง', '13140', 'dee', 'ภาชี', 'พระนครศรีอยุธยา', 'ดอนหญ้านาง', '13140'),
(10, 22, 1, '2026-05-28 11:10:28.722', 'CONFIRMED', 4500.00, 'dee', 'dee', 'dee@mail.com', '0123456789', '0123456789', 'dee ดอนหญ้านาง ภาชี พระนครศรีอยุธยา 13140', 'dee ดอนหญ้านาง ภาชี พระนครศรีอยุธยา 13140', 'CONFIRMED', 1, 34, 'dee', 'ภาชี', 'พระนครศรีอยุธยา', 'ดอนหญ้านาง', '13140', 'dee', 'ภาชี', 'พระนครศรีอยุธยา', 'ดอนหญ้านาง', '13140'),
(11, 22, 16, '2026-05-28 11:36:20.532', 'PENDING', 10000.00, 'dee', 'dee', 'dee@mail.com', '0123456789', '0123456789', 'dee ดอนหญ้านาง ภาชี พระนครศรีอยุธยา 13140', 'dee ดอนหญ้านาง ภาชี พระนครศรีอยุธยา 13140', 'PENDING', 1, 35, 'dee', 'ภาชี', 'พระนครศรีอยุธยา', 'ดอนหญ้านาง', '13140', 'dee', 'ภาชี', 'พระนครศรีอยุธยา', 'ดอนหญ้านาง', '13140');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `icon` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`, `icon`, `description`) VALUES
(1, 'วัด', 'landmark', 'ศาสนสถานและวัดสำคัญ'),
(2, 'ธรรมชาติ', 'trees', 'น้ำตก ภูเขา และอุทยาน'),
(3, 'ตลาด/ชุมชน', 'store', 'ตลาดและชุมชนท้องถิ่น'),
(4, 'วัฒนธรรม', 'museum', 'พิพิธภัณฑ์และวัฒนธรรม'),
(5, 'คาเฟ่/ฟาร์ม', 'grape', 'คาเฟ่ ฟาร์ม และไร่องุ่น'),
(6, 'ร้านอาหาร', 'restaurant', 'ร้านอาหารอร่อยและสตรีทฟู้ดห้ามพลาด'),
(7, 'ที่พัก/โฮมสเตย์', 'hotel', 'โฮมสเตย์ โรงแรม และที่พักยอดนิยม'),
(8, 'แหล่งช้อปปิ้ง/ของฝาก', 'shopping-bag', 'ห้างสรรพสินค้า ตลาดนัด และร้านค้าของฝาก'),
(9, 'กิจกรรมแอดเวนเจอร์', 'compass', 'แคมป์ปิ้ง ล่องแก่ง และกิจกรรมท้าทาย'),
(10, 'จุดชมวิว/จุดถ่ายรูป', 'camera', 'จุดชมวิวทิวทัศน์และมุมถ่ายรูปสวยงาม');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `attraction_id` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `user_id`, `attraction_id`, `created_at`) VALUES
(3, 22, 4, '2026-05-01 11:48:27.724'),
(5, 22, 6, '2026-05-01 14:45:11.479');

-- --------------------------------------------------------

--
-- Table structure for table `package_schedules`
--

CREATE TABLE `package_schedules` (
  `id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `capacity` int(11) NOT NULL,
  `booked_seats` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `package_schedules`
--

INSERT INTO `package_schedules` (`id`, `package_id`, `date`, `capacity`, `booked_seats`, `created_at`, `updated_at`) VALUES
(1, 1, '2026-05-03', 20, 4, '2026-05-01 00:06:09', '2026-05-01 13:00:54.188'),
(5, 2, '2026-05-07', 25, 0, '2026-05-01 00:06:09', '2026-05-01 07:06:09.172'),
(6, 2, '2026-05-14', 30, 0, '2026-05-01 00:06:09', '2026-05-01 07:06:09.175'),
(7, 3, '2026-05-03', 20, 0, '2026-05-01 00:06:09', '2026-05-01 07:06:09.177'),
(8, 3, '2026-05-07', 25, 0, '2026-05-01 00:06:09', '2026-05-01 07:06:09.180'),
(9, 3, '2026-05-14', 30, 0, '2026-05-01 00:06:09', '2026-05-01 07:06:09.182'),
(10, 4, '2026-05-06', 20, 0, '2026-05-01 01:08:49', '2026-05-01 12:25:53.892'),
(11, 4, '2026-05-11', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.852'),
(12, 5, '2026-05-07', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.868'),
(13, 5, '2026-05-12', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.871'),
(14, 6, '2026-05-05', 20, 1, '2026-05-01 01:08:49', '2026-05-01 08:08:49.884'),
(15, 6, '2026-05-10', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.889'),
(16, 7, '2026-05-06', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.902'),
(17, 7, '2026-05-11', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.905'),
(18, 8, '2026-05-07', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.919'),
(19, 8, '2026-05-12', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.922'),
(20, 9, '2026-05-05', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.933'),
(21, 9, '2026-05-10', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.935'),
(22, 10, '2026-05-06', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.946'),
(23, 10, '2026-05-11', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.948'),
(24, 11, '2026-05-07', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.960'),
(25, 11, '2026-05-12', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.962'),
(26, 12, '2026-05-05', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.974'),
(27, 12, '2026-05-10', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.976'),
(28, 13, '2026-05-06', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.989'),
(29, 13, '2026-05-11', 20, 0, '2026-05-01 01:08:49', '2026-05-01 08:08:49.991'),
(30, 14, '2026-05-07', 20, 0, '2026-05-01 01:08:50', '2026-05-01 08:08:50.002'),
(31, 14, '2026-05-12', 20, 0, '2026-05-01 01:08:50', '2026-05-01 08:08:50.005'),
(32, 15, '2026-05-05', 20, 0, '2026-05-01 01:08:50', '2026-05-01 08:08:50.015'),
(33, 15, '2026-05-10', 20, 0, '2026-05-01 01:08:50', '2026-05-01 08:08:50.018'),
(34, 1, '2026-05-31', 20, 1, '2026-05-28 04:10:04', '2026-05-28 11:10:04.884'),
(35, 16, '2026-05-31', 50, 1, '2026-05-28 04:18:59', '2026-05-28 11:42:39.879'),
(36, 17, '2026-06-01', 10, 0, '2026-05-28 07:40:35', '2026-05-28 14:40:35.456'),
(37, 4, '2026-06-17', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.587'),
(38, 4, '2026-06-22', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.593'),
(39, 5, '2026-06-18', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.604'),
(40, 5, '2026-06-23', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.609'),
(41, 6, '2026-06-16', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.618'),
(42, 6, '2026-06-21', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.623'),
(43, 7, '2026-06-17', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.632'),
(44, 7, '2026-06-22', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.637'),
(45, 8, '2026-06-18', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.646'),
(46, 8, '2026-06-23', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.650'),
(47, 9, '2026-06-16', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.660'),
(48, 9, '2026-06-21', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.664'),
(49, 10, '2026-06-17', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.674'),
(50, 10, '2026-06-22', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.679'),
(51, 11, '2026-06-18', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.687'),
(52, 11, '2026-06-23', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.691'),
(53, 12, '2026-06-16', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.702'),
(54, 12, '2026-06-21', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.707'),
(55, 13, '2026-06-17', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.717'),
(56, 13, '2026-06-22', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.721'),
(57, 14, '2026-06-18', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.730'),
(58, 14, '2026-06-23', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.734'),
(59, 15, '2026-06-16', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.742'),
(60, 15, '2026-06-21', 20, 0, '2026-06-11 10:36:16', '2026-06-11 17:36:16.745'),
(61, 1, '2026-07-13', 10, 0, '2026-06-12 10:30:00', '2026-06-12 18:02:19.971'),
(62, 1, '2026-07-27', 10, 0, '2026-06-12 10:34:56', '2026-06-12 17:34:56.735'),
(63, 1, '2026-07-31', 10, 0, '2026-06-12 10:35:05', '2026-06-12 17:35:05.630'),
(64, 18, '2026-06-30', 5, 0, '2026-06-12 11:04:24', '2026-06-12 18:04:24.739'),
(65, 18, '2026-08-09', 9, 0, '2026-06-12 11:07:28', '2026-06-12 18:07:28.499');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `payment_status` varchar(50) NOT NULL DEFAULT 'PENDING',
  `payment_date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `amount` decimal(10,2) DEFAULT NULL,
  `paid_at` datetime(3) DEFAULT NULL,
  `slip_url` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`payment_id`, `booking_id`, `payment_method`, `payment_status`, `payment_date`, `amount`, `paid_at`, `slip_url`) VALUES
(1, 3, 'PROMPTPAY', 'VERIFIED', '2026-05-01 07:30:24.172', 4500.00, '2026-05-01 07:31:03.958', '/uploads/1777620624165-fern.png'),
(2, 10, 'PROMPTPAY', 'VERIFIED', '2026-05-28 11:10:37.202', 4500.00, '2026-06-12 18:02:57.393', '/uploads/slips/1779966637187-ChatGPT-Image-May-27--2026--02_56_09-PM.png');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `attraction_id` int(11) NOT NULL,
  `rating` tinyint(4) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `review_date` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `user_id`, `attraction_id`, `rating`, `comment`, `review_date`) VALUES
(1, 22, 5, 5, 'สถานที่น่าสนใจ เดินทางสะดวก', '2026-05-01 08:19:47.475'),
(2, 22, 4, 5, 'สถานที่น่าสนใจ เดินทางสะดวก', '2026-05-01 08:19:49.367'),
(3, 22, 5, 5, 'สถานที่น่าสนใจ เดินทางสะดวก', '2026-05-01 08:19:50.460'),
(4, 22, 6, 5, 'dee', '2026-05-01 14:45:21.694');

-- --------------------------------------------------------

--
-- Table structure for table `tourist_attractions`
--

CREATE TABLE `tourist_attractions` (
  `attraction_id` int(11) NOT NULL,
  `attraction_name` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `opening_time` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `map_url` varchar(500) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `is_popular` tinyint(1) NOT NULL DEFAULT 0,
  `subdistrict` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tourist_attractions`
--

INSERT INTO `tourist_attractions` (`attraction_id`, `attraction_name`, `location`, `description`, `opening_time`, `address`, `category_id`, `latitude`, `longitude`, `map_url`, `district`, `is_popular`, `subdistrict`) VALUES
(1, 'วัดถ้ำ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(2, 'วัดถ้ำกระบอก', 'ขุนโขลน, พุทธบาท, สระบุรี', 'วัดถ้ำกระบอกที่จังหวัดสระบุรีเป็นที่รู้จักกันดีในฐานะสถานบำบัดผู้ติดยาเสพติดที่มีชื่อเสียงไปทั่วโลก ด้วยวิธีการบำบัดที่เป็นเอกลักษณ์โดยการใช้ยาสมุนไพรไทยและให้สัจจะในการเลิกยา', '08:00-17:00', 'ตำบลขุนโขลน อำเภอพระพุทธบาท สระบุรี 18120', 1, NULL, NULL, 'https://maps.app.goo.gl/BD4GPou9mbSWHYt57', 'ขุนโขลน', 0, 'พุทธบาท'),
(3, 'แหล่งท่องเที่ยวสระบุรี', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL),
(4, 'วัดพระพุทธบาทราชวรมหาวิหาร', 'ขุนโขลน, พระพุทธบาท, สระบุรี', 'วัดสำคัญคู่เมืองสระบุรี ประดิษฐานรอยพระพุทธบาทและเป็นจุดหมายยอดนิยมด้านศรัทธา', '08:00-17:00', 'ขุนโขลน พระพุทธบาท สระบุรี', 1, NULL, NULL, 'https://maps.google.com/?q=Wat+Phra+Phutthabat+Saraburi', 'พระพุทธบาท', 1, 'ขุนโขลน'),
(5, 'อุทยานแห่งชาติน้ำตกเจ็ดสาวน้อย', 'มวกเหล็ก, มวกเหล็ก, สระบุรี', 'น้ำตกชั้นเตี้ยหลายชั้น เหมาะกับการพักผ่อน เล่นน้ำ และเดินชมธรรมชาติ', '08:30-16:30', 'มวกเหล็ก มวกเหล็ก สระบุรี', 2, NULL, NULL, 'https://maps.google.com/?q=Namtok+Chet+Sao+Noi+National+Park', 'มวกเหล็ก', 1, 'มวกเหล็ก'),
(6, 'วัดพระพุทธฉาย', 'หนองปลาไหล, เมืองสระบุรี, สระบุรี', 'วัดเก่าแก่บนเขาที่มีรอยพระพุทธฉายและจุดชมวิวเมืองสระบุรี', '08:00-17:00', 'หนองปลาไหล เมืองสระบุรี สระบุรี', 1, NULL, NULL, 'https://maps.google.com/?q=Wat+Phra+Phutthachai+Saraburi', 'เมืองสระบุรี', 1, 'หนองปลาไหล'),
(7, 'วัดป่าสว่างบุญ', 'ชะอม, แก่งคอย, สระบุรี', 'วัดที่โดดเด่นด้วยเจดีย์สีทองจำนวนมาก บรรยากาศสงบและถ่ายรูปสวย', '08:00-17:00', 'ชะอม แก่งคอย สระบุรี', 1, NULL, NULL, 'https://maps.google.com/?q=Wat+Pa+Sawang+Bun+Saraburi', 'แก่งคอย', 1, 'ชะอม'),
(8, 'ถ้ำดาวเขาแก้ว', 'ลำพญากลาง, มวกเหล็ก, สระบุรี', 'ถ้ำธรรมชาติในอำเภอมวกเหล็ก มีหินงอกหินย้อยและเส้นทางท่องเที่ยวเชิงธรรมชาติ', '08:00-17:00', 'ลำพญากลาง มวกเหล็ก สระบุรี', 2, NULL, NULL, 'https://maps.google.com/?q=Tham+Dao+Khao+Kaew+Saraburi', 'มวกเหล็ก', 0, 'ลำพญากลาง'),
(9, 'ตลาดหัวปลี', 'หน้าพระลาน, เฉลิมพระเกียรติ, สระบุรี', 'ตลาดชุมชนบรรยากาศอบอุ่น มีอาหาร ของฝาก และกิจกรรมท้องถิ่น', '09:00-18:00', 'หน้าพระลาน เฉลิมพระเกียรติ สระบุรี', 3, NULL, NULL, 'https://maps.google.com/?q=Hua+Pli+Market+Saraburi', 'เฉลิมพระเกียรติ', 1, 'หน้าพระลาน'),
(10, 'ไร่องุ่นภูนวพันธุ์ / Prapassara Vineyard', 'มวกเหล็ก, มวกเหล็ก, สระบุรี', 'แหล่งท่องเที่ยวเชิงเกษตรและไร่องุ่น เหมาะกับครอบครัวและถ่ายภาพ', '09:00-17:00', 'มวกเหล็ก มวกเหล็ก สระบุรี', 5, NULL, NULL, 'https://maps.google.com/?q=Prapassara+Vineyard+Saraburi', 'มวกเหล็ก', 0, 'มวกเหล็ก'),
(11, 'หอวัฒนธรรมพื้นบ้านไทยวน สระบุรี', 'ปากเพรียว, เมืองสระบุรี, สระบุรี', 'แหล่งเรียนรู้วัฒนธรรมไทยวน วิถีชีวิต ผ้าทอ และประวัติชุมชน', '09:00-16:00', 'ปากเพรียว เมืองสระบุรี สระบุรี', 4, NULL, NULL, 'https://maps.google.com/?q=Thai+Yuan+Saraburi+Folk+Cultural+Hall', 'เมืองสระบุรี', 0, 'ปากเพรียว'),
(12, 'น้ำตกมวกเหล็ก', 'มวกเหล็ก, มวกเหล็ก, สระบุรี', 'น้ำตกและลำธารใกล้ชุมชน เหมาะกับแวะพักระหว่างเส้นทางมวกเหล็ก', '08:00-17:00', 'มวกเหล็ก มวกเหล็ก สระบุรี', 2, NULL, NULL, 'https://maps.google.com/?q=Muak+Lek+Waterfall+Saraburi', 'มวกเหล็ก', 1, 'มวกเหล็ก'),
(13, 'อุทยานแห่งชาติเขาสามหลั่น', 'หนองปลาไหล, เมืองสระบุรี, สระบุรี', 'อุทยานใกล้เมืองสระบุรี มีเส้นทางธรรมชาติ น้ำตก และพื้นที่พักผ่อน', '08:00-17:00', 'หนองปลาไหล เมืองสระบุรี สระบุรี', 2, NULL, NULL, 'https://maps.google.com/?q=Khao+Sam+Lan+National+Park', 'เมืองสระบุรี', 0, 'หนองปลาไหล'),
(14, 'เขื่อนป่าสักชลสิทธิ์', 'คำพราน, วังม่วง, สระบุรี', 'เขื่อนขนาดใหญ่ใกล้สระบุรี-ลพบุรี เหมาะกับเส้นทางท่องเที่ยว 1 วัน', '08:00-18:00', 'คำพราน วังม่วง สระบุรี', 2, NULL, NULL, 'https://maps.google.com/?q=Pasak+Chonlasit+Dam', 'วังม่วง', 0, 'คำพราน'),
(15, 'ครัวบ้านสวน สระบุรี', 'ปากเพรียว, เมืองสระบุรี, สระบุรี', 'จุดแวะพักและร้านอาหารบรรยากาศท้องถิ่น เหมาะกับใส่ในเส้นทางท่องเที่ยว', '10:00-20:00', 'ปากเพรียว เมืองสระบุรี สระบุรี', 3, NULL, NULL, 'https://maps.google.com/?q=Saraburi+local+restaurant', 'เมืองสระบุรี', 0, 'ปากเพรียว');

-- --------------------------------------------------------

--
-- Table structure for table `tour_packages`
--

CREATE TABLE `tour_packages` (
  `package_id` int(11) NOT NULL,
  `package_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `duration` varchar(100) DEFAULT NULL,
  `attraction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tour_packages`
--

INSERT INTO `tour_packages` (`package_id`, `package_name`, `description`, `price`, `duration`, `attraction_id`) VALUES
(1, 'basic', NULL, 4500.00, NULL, 1),
(2, 'ทริปวัดถ้ำกระบอก', 'แพํคเกจทริปวัดถ้ำกระบอก', 3200.00, NULL, 2),
(3, 'แหล่งท่องเที่ยวสระบุรี', NULL, 2500.00, NULL, 3),
(4, 'ทริปวัดพระพุทธบาทราชวรมหาวิหาร', 'แพ็กเกจเที่ยว วัดพระพุทธบาทราชวรมหาวิหาร พร้อมไกด์และแผนเดินทาง', 1800.00, '1 วัน', 4),
(5, 'ทริปอุทยานแห่งชาติน้ำตกเจ็ดสาวน้อย', 'แพ็กเกจเที่ยว อุทยานแห่งชาติน้ำตกเจ็ดสาวน้อย พร้อมไกด์และแผนเดินทาง', 1950.00, '1 วัน', 5),
(6, 'ทริปวัดพระพุทธฉาย', 'แพ็กเกจเที่ยว วัดพระพุทธฉาย พร้อมไกด์และแผนเดินทาง', 2100.00, '1 วัน', 6),
(7, 'ทริปวัดป่าสว่างบุญ', 'แพ็กเกจเที่ยว วัดป่าสว่างบุญ พร้อมไกด์และแผนเดินทาง', 2250.00, '1 วัน', 7),
(8, 'ทริปถ้ำดาวเขาแก้ว', 'แพ็กเกจเที่ยว ถ้ำดาวเขาแก้ว พร้อมไกด์และแผนเดินทาง', 2400.00, '1 วัน', 8),
(9, 'ทริปตลาดหัวปลี', 'แพ็กเกจเที่ยว ตลาดหัวปลี พร้อมไกด์และแผนเดินทาง', 2550.00, '1 วัน', 9),
(10, 'ทริปไร่องุ่นภูนวพันธุ์ / Prapassara Vineyard', 'แพ็กเกจเที่ยว ไร่องุ่นภูนวพันธุ์ / Prapassara Vineyard พร้อมไกด์และแผนเดินทาง', 2700.00, '1 วัน', 10),
(11, 'ทริปหอวัฒนธรรมพื้นบ้านไทยวน สระบุรี', 'แพ็กเกจเที่ยว หอวัฒนธรรมพื้นบ้านไทยวน สระบุรี พร้อมไกด์และแผนเดินทาง', 2850.00, '1 วัน', 11),
(12, 'ทริปน้ำตกมวกเหล็ก', 'แพ็กเกจเที่ยว น้ำตกมวกเหล็ก พร้อมไกด์และแผนเดินทาง', 3000.00, '1 วัน', 12),
(13, 'ทริปอุทยานแห่งชาติเขาสามหลั่น', 'แพ็กเกจเที่ยว อุทยานแห่งชาติเขาสามหลั่น พร้อมไกด์และแผนเดินทาง', 3150.00, '1 วัน', 13),
(14, 'ทริปเขื่อนป่าสักชลสิทธิ์', 'แพ็กเกจเที่ยว เขื่อนป่าสักชลสิทธิ์ พร้อมไกด์และแผนเดินทาง', 3300.00, '1 วัน', 14),
(15, 'ทริปครัวบ้านสวน สระบุรี', 'แพ็กเกจเที่ยว ครัวบ้านสวน สระบุรี พร้อมไกด์และแผนเดินทาง', 3450.00, '1 วัน', 15),
(16, 'gold', '', 10000.00, '2', 6),
(17, 'plat', '', 20000.00, '2', 1),
(18, 'promax', '', 999.00, '1', 8);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_type` int(10) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `user_type`, `created_at`, `is_active`) VALUES
(2, 'โอม', '$argon2id$v=19$m=65536,t=3,p=4$v4km7uHlIiW+IAwVDpbreg$YRM5Uqppxn/Gi8nKptTEKiGbJBmd18Ir5PEZbBnS1Z4', 'ohm@gmail.com', 0, '2026-05-01 08:27:26', 1),
(3, 'focus', '$argon2id$v=19$m=65536,t=3,p=4$X6CkB/nJGPBBJJjD7kAFLw$I8Cbxc7fnfkwKCge9hZdDo9x/SHYPz2F+JujD7MrwV0', 'focus@gmail.com', NULL, '2026-02-13 13:54:17', 1),
(4, 'chalaem', '$argon2id$v=19$m=65536,t=3,p=4$lb9kvCMiKzzEUTlozsceMQ$5aGrIBZLHJXuFW6xoYDUap4pOnXC8NULL/Z03GRJb4E', 'chalaem@gmail.com', NULL, '2026-02-13 07:00:06', 1),
(5, 'siwii', '$argon2id$v=19$m=65536,t=3,p=4$feCoIrXld4+y2EiQzZY4Ag$2JQCkQgZ3ffZaRUp+BUbd6r9sH67zZV2L/7rtnuN10o', 'dsdds@gmail.com', NULL, '2026-02-19 04:26:54', 1),
(6, 'arm', '$argon2id$v=19$m=65536,t=3,p=4$AiF0egPFfRJhNi26BsPaVQ$EtdCirZQtnMcssEXW3Na9+q13CxUmOfhb0ZI8cKZv9s', 'rubchalaem888@gmail.com', NULL, '2026-02-19 05:26:39', 1),
(7, 'ohm', '$argon2id$v=19$m=65536,t=3,p=4$MF1FtA54moVA8dyrmd770w$cu94BVRzlRnEdUgKOAXpLU5icqUJrypAuR77d/VSkOc', 'zaa@gmail.com', NULL, '2026-02-19 15:29:30', 1),
(8, 'ggg', '$argon2id$v=19$m=65536,t=3,p=4$8v7nssr/dmVtOfQNWxwv8A$SX5RIKtKPm8NrA6GpFYgLDeuSkcy1o8MEK8EdKvu2p4', 'gg@gmail.com', NULL, '2026-02-19 15:41:13', 1),
(10, 'hhh', '$argon2id$v=19$m=65536,t=3,p=4$kYFbmBXdMefx2Vc+zM9M1A$eCdEol5aKWYJyaIUR5vDtqheYrXorpjKd1qwr6heccY', 'hhh@gmail.com', NULL, '2026-02-19 16:12:19', 1),
(12, 'qqqq', '$argon2id$v=19$m=65536,t=3,p=4$1G5Pdl7waER6P0FI9osuhQ$mRwZHHqaMR7kZBtIZTwU4OpcjL6zl2GbqCJox+FUQuo', 'qqqa@gmail.com', NULL, '2026-02-20 08:17:29', 1),
(13, 'qwer', '$argon2id$v=19$m=65536,t=3,p=4$77+Za0izHN4rVcLm6VxsiA$OvvFYf7ULXv85UofXiQJBswRtm4wFJaFLTLte1GIWpU', 'qwer@gmail.com', NULL, '2026-02-20 08:31:34', 1),
(14, 'ooo', '$argon2id$v=19$m=65536,t=3,p=4$FXZdn/C3QYs5KnbHbzm6BQ$0RYYF4HcxEySJzS4hF20gspUTcwEN0gJMftJgtADRhA', 'ooo@gmail.com', NULL, '2026-02-20 08:52:41', 1),
(16, 'aaa', '$argon2id$v=19$m=65536,t=3,p=4$leAAm0jKeSKIcCVmKr7kcA$X21zktf5pvlpQH83S+Qqi6SgrmpotefE7Vt0RBYDImk', 'aa@gmail.com', NULL, '2026-02-20 09:17:27', 1),
(17, 'rubchhalaem', '$argon2id$v=19$m=65536,t=3,p=4$LviJTCmRB8cZY2dTOSxDdw$yUKVID404cdmoutdLMX2USKrAwJLkfgTlzBDM9ck9N8', 'rubchalaem@gmail.com', NULL, '2026-02-20 09:26:31', 1),
(18, 'ohm', '$argon2id$v=19$m=65536,t=3,p=4$MhHOhPQ+b7glqFFXO67BZg$bEd/P9TnTBHyCOwQSqB2iy0jaRhFVFBsSxZEz3K1yMU', 'ohmm@gmail.com', NULL, '2026-02-20 19:14:55', 1),
(19, 'nutcha', '$argon2id$v=19$m=65536,t=3,p=4$RE1Y7PKxuvbJAZVcE1Dtng$AdQQ9k/25EzXpnItVrwTaYfdbIQUMX8106SWxXb3ELQ', 'nutcha@gmail.com', NULL, '2026-03-24 16:56:29', 1),
(20, 'ake', '$argon2id$v=19$m=65536,t=3,p=4$nPHsBG4RvlLIXaRvgJkZVA$InTGwYUj+qUn7bT2iulaE0UO8/lq1inFhOWyqgWSq3w', 'ake@gmail.com', NULL, '2026-03-24 20:42:41', 1),
(21, 'qwerr', '$argon2id$v=19$m=65536,t=3,p=4$p706NaBJIux253KmjE3OKg$QiklhPJa+TQKn8uZf/3+APB49M0hmOxucuLOm20w/UU', 'qwerr@gmail.com', NULL, '2026-03-31 09:00:49', 1),
(22, 'admin', '$argon2id$v=19$m=65536,t=3,p=4$uOAEWw9vvlDvWasufZ/2Sw$mdhnH6Dbcp47U7yZ3+1bOEf+XiDS5kKtovtW6CXh+RE', 'admin@srbr.test', 1, '2026-05-01 14:49:03', 1),
(23, 'demo', '$argon2id$v=19$m=65536,t=3,p=4$H3xT/aVx2BA46VY3sJQzEA$71JTPFmGXe5lKUJbkimfD2au5O+DbEGnuCFRX4UhjbU', 'demo@srbr.test', 0, '2026-05-01 14:49:08', 1),
(27, 'a', '$argon2id$v=19$m=65536,t=3,p=4$4wZbb6tWmj8c9u6tJfL2CA$q7UfcgDXeNwp9Gs2Gpsi+KCAa0aLOOVh0JqOi/z/Wl4', 'a@gmail.com', NULL, '2026-05-01 11:23:50', 1),
(28, 'Anakavee Rubchalaem', NULL, 'rubchalaem_a@silpakorn.edu', NULL, '2026-06-12 10:14:01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_booking_profiles`
--

CREATE TABLE `user_booking_profiles` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `id_card` varchar(50) DEFAULT NULL,
  `current_province` varchar(100) DEFAULT NULL,
  `current_district` varchar(100) DEFAULT NULL,
  `current_subdistrict` varchar(100) DEFAULT NULL,
  `current_zipcode` varchar(10) DEFAULT NULL,
  `current_address_detail` text DEFAULT NULL,
  `identity_province` varchar(100) DEFAULT NULL,
  `identity_district` varchar(100) DEFAULT NULL,
  `identity_subdistrict` varchar(100) DEFAULT NULL,
  `identity_zipcode` varchar(10) DEFAULT NULL,
  `identity_address_detail` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_booking_profiles`
--

INSERT INTO `user_booking_profiles` (`user_id`, `first_name`, `last_name`, `email`, `phone`, `id_card`, `current_province`, `current_district`, `current_subdistrict`, `current_zipcode`, `current_address_detail`, `identity_province`, `identity_district`, `identity_subdistrict`, `identity_zipcode`, `identity_address_detail`, `created_at`, `updated_at`) VALUES
(22, 'dee', 'dee', 'dee@mail.com', '0123456789', '0123456789', 'พระนครศรีอยุธยา', 'ภาชี', 'ดอนหญ้านาง', '13140', 'dee', 'พระนครศรีอยุธยา', 'ภาชี', 'ดอนหญ้านาง', '13140', 'dee', '2026-05-01 07:42:42', '2026-06-12 18:01:21.315'),
(28, 'f', 'f', 'rubchalaem_a@silpakorn.edu', 'f', NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, '2026-06-12 10:14:25', '2026-06-12 17:14:25.647');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attraction_images`
--
ALTER TABLE `attraction_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `attraction_images_attraction_id_fkey` (`attraction_id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `bookings_user_id_fkey` (`user_id`),
  ADD KEY `bookings_package_id_fkey` (`package_id`),
  ADD KEY `bookings_schedule_id_fkey` (`schedule_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `favorites_user_id_attraction_id_key` (`user_id`,`attraction_id`),
  ADD KEY `favorites_attraction_id_fkey` (`attraction_id`);

--
-- Indexes for table `package_schedules`
--
ALTER TABLE `package_schedules`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `package_schedules_package_id_date_key` (`package_id`,`date`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `payments_booking_id_fkey` (`booking_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `reviews_user_id_fkey` (`user_id`),
  ADD KEY `reviews_attraction_id_fkey` (`attraction_id`);

--
-- Indexes for table `tourist_attractions`
--
ALTER TABLE `tourist_attractions`
  ADD PRIMARY KEY (`attraction_id`),
  ADD KEY `tourist_attractions_category_id_fkey` (`category_id`);

--
-- Indexes for table `tour_packages`
--
ALTER TABLE `tour_packages`
  ADD PRIMARY KEY (`package_id`),
  ADD KEY `tour_packages_attraction_id_fkey` (`attraction_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_booking_profiles`
--
ALTER TABLE `user_booking_profiles`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attraction_images`
--
ALTER TABLE `attraction_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `package_schedules`
--
ALTER TABLE `package_schedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tourist_attractions`
--
ALTER TABLE `tourist_attractions`
  MODIFY `attraction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tour_packages`
--
ALTER TABLE `tour_packages`
  MODIFY `package_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attraction_images`
--
ALTER TABLE `attraction_images`
  ADD CONSTRAINT `attraction_images_attraction_id_fkey` FOREIGN KEY (`attraction_id`) REFERENCES `tourist_attractions` (`attraction_id`) ON UPDATE CASCADE;

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_package_id_fkey` FOREIGN KEY (`package_id`) REFERENCES `tour_packages` (`package_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `bookings_schedule_id_fkey` FOREIGN KEY (`schedule_id`) REFERENCES `package_schedules` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `bookings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_attraction_id_fkey` FOREIGN KEY (`attraction_id`) REFERENCES `tourist_attractions` (`attraction_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `package_schedules`
--
ALTER TABLE `package_schedules`
  ADD CONSTRAINT `package_schedules_package_id_fkey` FOREIGN KEY (`package_id`) REFERENCES `tour_packages` (`package_id`) ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`) ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_attraction_id_fkey` FOREIGN KEY (`attraction_id`) REFERENCES `tourist_attractions` (`attraction_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `tourist_attractions`
--
ALTER TABLE `tourist_attractions`
  ADD CONSTRAINT `tourist_attractions_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `tour_packages`
--
ALTER TABLE `tour_packages`
  ADD CONSTRAINT `tour_packages_attraction_id_fkey` FOREIGN KEY (`attraction_id`) REFERENCES `tourist_attractions` (`attraction_id`) ON UPDATE CASCADE;

--
-- Constraints for table `user_booking_profiles`
--
ALTER TABLE `user_booking_profiles`
  ADD CONSTRAINT `user_booking_profiles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;
--
-- Database: `parcel_tracking`
--
CREATE DATABASE IF NOT EXISTS `parcel_tracking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `parcel_tracking`;

-- --------------------------------------------------------

--
-- Table structure for table `parcels`
--

CREATE TABLE `parcels` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tracking_no` varchar(100) NOT NULL,
  `carrier` varchar(100) NOT NULL,
  `status` enum('Pending','Shipped','In Transit','Delivered') NOT NULL DEFAULT 'Pending',
  `description` text DEFAULT NULL,
  `sender_name` varchar(150) DEFAULT NULL,
  `receiver_name` varchar(150) DEFAULT NULL,
  `origin` varchar(200) DEFAULT NULL,
  `destination` varchar(200) DEFAULT NULL,
  `estimated_delivery` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parcels`
--

INSERT INTO `parcels` (`id`, `user_id`, `tracking_no`, `carrier`, `status`, `description`, `sender_name`, `receiver_name`, `origin`, `destination`, `estimated_delivery`, `created_at`, `updated_at`) VALUES
(1, 1, 'TH123456789', 'Flash Express', 'Delivered', 'หูฟัง Sony WH-1000XM5', 'Shopee Thailand', 'สมชาย ใจดี', 'กรุงเทพฯ', 'เชียงใหม่', NULL, '2026-04-06 03:12:16', '2026-04-06 03:22:14'),
(2, 1, 'KR987654321', 'Kerry Express', 'Delivered', 'เสื้อผ้า 3 ชิ้น', 'Fashion Store', 'สมชาย ใจดี', 'กรุงเทพฯ', 'นนทบุรี', NULL, '2026-04-06 03:12:16', '2026-04-06 03:12:16'),
(3, 1, 'SCG111222333', 'SCG Express', 'In Transit', 'หนังสือ 5 เล่ม', 'SE-ED Bookstore', 'สมชาย ใจดี', 'ขอนแก่น', 'เชียงใหม่', NULL, '2026-04-06 03:12:16', '2026-04-06 12:19:12'),
(4, 2, 'TH123', 'ฟก', 'Delivered', 'ฟหก', 'ฟหก', 'ฟหก', 'ฟหก', 'ฟหก', NULL, '2026-04-06 13:56:12', '2026-04-06 14:20:58'),
(7, 2, 'TH123463123', 'Kerry', 'Delivered', NULL, 'Samsung', 'Somchai', 'samsung th sai2', 'somchai home', NULL, '2026-04-06 15:09:43', '2026-04-06 15:10:39'),
(8, 2, 'TH277368296', 'FLASH', 'Delivered', NULL, 'samsung bangkapi', 'somchai', 'samsung bangkapi', 'somchaihome', NULL, '2026-04-06 21:10:23', '2026-04-06 21:11:08');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_history`
--

CREATE TABLE `purchase_history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `parcel_id` int(11) DEFAULT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_description` text DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `shop_name` varchar(150) DEFAULT NULL,
  `purchase_date` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_history`
--

INSERT INTO `purchase_history` (`id`, `user_id`, `parcel_id`, `item_name`, `item_description`, `amount`, `quantity`, `shop_name`, `purchase_date`, `created_at`) VALUES
(1, 1, 1, 'หูฟัง Sony WH-1000XM5', 'หูฟัง Noise Cancelling รุ่นท็อป', 9900.00, 1, 'Shopee Thailand', '2026-04-06 03:12:16', '2026-04-06 03:12:16'),
(2, 1, 2, 'เสื้อยืด Uniqlo', NULL, 790.00, 3, 'Uniqlo Online', '2026-04-06 03:12:16', '2026-04-06 03:12:16'),
(3, 1, 3, 'หนังสือ Clean Code', NULL, 350.00, 1, 'SE-ED', '2026-04-06 03:12:16', '2026-04-06 03:12:16'),
(4, 1, 1, 'เคส iPhone 15 Pro', NULL, 450.00, 2, 'Lazada', '2026-04-06 03:12:16', '2026-04-06 03:12:16'),
(5, 2, 4, 'iphone', NULL, 30000.00, 1, 'iphone th', '2026-04-06 13:58:34', '2026-04-06 13:58:34'),
(6, 2, 4, 'iphone 14', NULL, 26000.00, 1, 'iphone th', '2026-04-06 14:20:43', '2026-04-06 14:20:43'),
(11, 2, 7, 'samsung a15', NULL, 16000.00, 1, 'samsung th sai2', '2026-04-06 15:10:19', '2026-04-06 15:10:19'),
(12, 2, 8, 'samsung s23 pro', NULL, 40000.00, 1, 'samsung bangkapi', '2026-04-06 21:10:49', '2026-04-06 21:10:49');

-- --------------------------------------------------------

--
-- Table structure for table `tracking_events`
--

CREATE TABLE `tracking_events` (
  `id` int(11) NOT NULL,
  `parcel_id` int(11) NOT NULL,
  `status` enum('Pending','Shipped','In Transit','Delivered') NOT NULL,
  `location` varchar(200) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tracking_events`
--

INSERT INTO `tracking_events` (`id`, `parcel_id`, `status`, `location`, `notes`, `timestamp`) VALUES
(1, 1, 'Pending', NULL, 'Parcel registered in system', '2026-04-06 03:12:16'),
(2, 2, 'Pending', NULL, 'Parcel registered in system', '2026-04-06 03:12:16'),
(3, 3, 'Pending', NULL, 'Parcel registered in system', '2026-04-06 03:12:16'),
(4, 1, 'Shipped', 'Warehouse Hub', 'Parcel has been picked up and shipped', '2026-04-06 03:12:16'),
(5, 1, 'In Transit', 'Sorting Center', 'Parcel is in transit to destination', '2026-04-06 03:12:16'),
(6, 2, 'Shipped', 'Warehouse Hub', 'Parcel has been picked up and shipped', '2026-04-06 03:12:16'),
(7, 2, 'In Transit', 'Sorting Center', 'Parcel is in transit to destination', '2026-04-06 03:12:16'),
(8, 2, 'Delivered', 'Destination Address', 'Parcel delivered successfully', '2026-04-06 03:12:16'),
(9, 1, 'Delivered', 'Destination Address', 'Parcel delivered successfully', '2026-04-06 03:22:14'),
(10, 3, 'Shipped', 'Warehouse Hub', 'Parcel has been picked up and shipped', '2026-04-06 12:19:06'),
(11, 3, 'In Transit', 'Sorting Center', 'Parcel is in transit to destination', '2026-04-06 12:19:12'),
(12, 4, 'Pending', NULL, 'Parcel registered in system', '2026-04-06 13:56:12'),
(13, 4, 'Shipped', 'Warehouse Hub', 'Parcel has been picked up and shipped', '2026-04-06 13:56:29'),
(14, 4, 'In Transit', 'Sorting Center', 'Parcel is in transit to destination', '2026-04-06 14:20:52'),
(15, 4, 'Delivered', 'Destination Address', 'Parcel delivered successfully', '2026-04-06 14:20:58'),
(17, 7, 'Pending', NULL, 'Parcel registered in system', '2026-04-06 15:09:44'),
(18, 7, 'Shipped', 'Warehouse Hub', 'Parcel has been picked up and shipped', '2026-04-06 15:10:29'),
(19, 7, 'In Transit', 'Sorting Center', 'Parcel is in transit to destination', '2026-04-06 15:10:34'),
(20, 7, 'Delivered', 'Destination Address', 'Parcel delivered successfully', '2026-04-06 15:10:39'),
(21, 8, 'Pending', NULL, 'Parcel registered in system', '2026-04-06 21:10:23'),
(22, 8, 'Shipped', 'Warehouse Hub', 'Parcel has been picked up and shipped', '2026-04-06 21:11:06'),
(23, 8, 'In Transit', 'Sorting Center', 'Parcel is in transit to destination', '2026-04-06 21:11:07'),
(24, 8, 'Delivered', 'Destination Address', 'Parcel delivered successfully', '2026-04-06 21:11:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `full_name` varchar(150) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `full_name`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'demo_user', 'demo@parcel.com', '$2b$12$QZ7.DAw9YLsGgCT0R/Tsz..umwHFjAYl00O7D5c2qg6FLd9Fk8g0a', 'สมชาย ใจดี', '0812345678', '2026-04-06 03:12:16', NULL),
(2, 'somchai', 'somchai@gmail.com', '$2b$12$tXEMAymGDttIO.6gJoRk6OEKxoXDPsOOPJpO7p7pxbAx9A8akIbUS', 'สมชาย ใจดี', '0811111111', '2026-04-06 13:46:17', '2026-04-06 13:50:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parcels`
--
ALTER TABLE `parcels`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_user_tracking_no` (`user_id`,`tracking_no`),
  ADD KEY `idx_parcels_user_id` (`user_id`),
  ADD KEY `idx_parcels_tracking_no` (`tracking_no`);

--
-- Indexes for table `purchase_history`
--
ALTER TABLE `purchase_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_purchase_user_id` (`user_id`),
  ADD KEY `idx_purchase_parcel_id` (`parcel_id`);

--
-- Indexes for table `tracking_events`
--
ALTER TABLE `tracking_events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_tracking_events_parcel_id` (`parcel_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_users_email` (`email`),
  ADD KEY `idx_users_username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parcels`
--
ALTER TABLE `parcels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `purchase_history`
--
ALTER TABLE `purchase_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tracking_events`
--
ALTER TABLE `tracking_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `parcels`
--
ALTER TABLE `parcels`
  ADD CONSTRAINT `fk_parcels_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `purchase_history`
--
ALTER TABLE `purchase_history`
  ADD CONSTRAINT `fk_purchase_parcel` FOREIGN KEY (`parcel_id`) REFERENCES `parcels` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_purchase_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tracking_events`
--
ALTER TABLE `tracking_events`
  ADD CONSTRAINT `fk_tracking_events_parcel` FOREIGN KEY (`parcel_id`) REFERENCES `parcels` (`id`) ON DELETE CASCADE;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) NOT NULL DEFAULT '',
  `user` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `query` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) NOT NULL,
  `col_name` varchar(64) NOT NULL,
  `col_type` varchar(64) NOT NULL,
  `col_length` text DEFAULT NULL,
  `col_collation` varchar(64) NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) DEFAULT '',
  `col_default` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `column_name` varchar(64) NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `transformation` varchar(255) NOT NULL DEFAULT '',
  `transformation_options` varchar(255) NOT NULL DEFAULT '',
  `input_transformation` varchar(255) NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) NOT NULL,
  `settings_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `export_type` varchar(10) NOT NULL,
  `template_name` varchar(64) NOT NULL,
  `template_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db` varchar(64) NOT NULL DEFAULT '',
  `table` varchar(64) NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) NOT NULL,
  `item_name` varchar(64) NOT NULL,
  `item_type` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"dpet\",\"table\":\"users\"},{\"db\":\"dpet\",\"table\":\"favorites\"},{\"db\":\"dpet\",\"table\":\"tour_packages\"},{\"db\":\"dpet\",\"table\":\"package_schedules\"},{\"db\":\"dpet\",\"table\":\"categories\"},{\"db\":\"dpet\",\"table\":\"tourist_attractions\"},{\"db\":\"dpet\",\"table\":\"payments\"},{\"db\":\"dpet\",\"table\":\"reviews\"},{\"db\":\"dpet\",\"table\":\"bookings\"},{\"db\":\"dpet\",\"table\":\"attraction_images\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) NOT NULL DEFAULT '',
  `master_table` varchar(64) NOT NULL DEFAULT '',
  `master_field` varchar(64) NOT NULL DEFAULT '',
  `foreign_db` varchar(64) NOT NULL DEFAULT '',
  `foreign_table` varchar(64) NOT NULL DEFAULT '',
  `foreign_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `search_name` varchar(64) NOT NULL DEFAULT '',
  `search_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `display_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `prefs` text NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text NOT NULL,
  `schema_sql` text DEFAULT NULL,
  `data_sql` longtext DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2026-05-01 12:28:06', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) NOT NULL,
  `tab` varchar(64) NOT NULL,
  `allowed` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) NOT NULL,
  `usergroup` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
