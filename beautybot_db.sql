-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 10:46 AM
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
-- Database: `beautybot_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ingredients` text NOT NULL,
  `skin_type` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `rating` decimal(2,1) NOT NULL,
  `cf_score` decimal(5,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `ingredients`, `skin_type`, `category`, `rating`, `cf_score`) VALUES
(1, 'COSRX Low pH Good Morning Gel Cleanser', 'tea tree oil, salicylic acid', 'oily, acne-prone', 'cleanser', 4.7, 4.6094),
(2, 'Beauty of Joseon Ginseng Essence Water', 'ginseng extract, rice water', 'dry, sensitive', 'essence', 4.6, 4.2993),
(3, 'COSRX Advanced Snail 96 Mucin Power Essence', 'snail mucin', 'all', 'essence', 4.8, 4.2164),
(4, 'Beauty of Joseon Dynasty Cream', 'ginseng extract, honey', 'dry, mature', 'moisturizer', 4.5, 4.3841),
(5, 'COSRX BHA Blackhead Power Liquid', 'salicylic acid, BHA', 'oily, acne-prone', 'toner', 4.6, 4.4261),
(6, 'Beauty of Joseon Glow Deep Serum', 'niacinamide, vitamin C', 'dull, all', 'serum', 4.6, 4.3275),
(7, 'Skin 1004 Madagascar Centella Asiatica Toner', 'centella asiatica, niacinamide', 'sensitive, oily', 'toner', 4.7, 4.3242),
(8, 'COSRX Ultimate Nourishing Rice Overnight Spa Mask', 'rice extract, niacinamide', 'dry, dull', 'mask', 4.7, 4.1534),
(9, 'Beauty of Joseon Revive Eye Cream', 'ginseng, peptides', 'all', 'eye cream', 4.4, 4.2357),
(10, 'Skin 1004 Madagascar Centella Asiatica Cream', 'centella asiatica, ceramide', 'sensitive, dry', 'moisturizer', 4.8, 4.4121),
(11, 'COSRX Hyaluronic Acid Hydra Power Essence', 'hyaluronic acid', 'dry, all', 'essence', 4.5, 4.2216),
(12, 'Beauty of Joseon Dynasty Cream', 'ginseng extract, honey', 'dry, mature', 'moisturizer', 4.5, 4.4945),
(13, 'Skin 1004 Madagascar Centella Asiatica Serum', 'centella asiatica, peptides', 'dry, sensitive', 'serum', 4.7, 4.7709),
(14, 'COSRX Advanced Snail 92 All In One Cream', 'snail mucin, peptides', 'all', 'moisturizer', 4.9, 4.3576),
(15, 'Beauty of Joseon Radiance Cream', 'niacinamide, honey', 'dull, all', 'moisturizer', 4.6, 4.2345),
(16, 'Skin 1004 Centella Sensitive Cica Gel', 'centella asiatica, panthenol', 'sensitive, oily', 'gel', 4.4, 4.1409),
(17, 'COSRX One Step Original Clear Pad', 'salicylic acid, willow bark', 'acne-prone', 'pad', 4.7, 4.2044),
(18, 'Beauty of Joseon Ginseng Essence Water', 'ginseng extract, rice water', 'dry, sensitive', 'essence', 4.6, 4.2803),
(19, 'Skin 1004 Madagascar Centella Asiatica Ampoule', 'centella asiatica, hyaluronic acid', 'dry, sensitive', 'ampoule', 4.8, 4.1523),
(20, 'COSRX Propolis Light Ampoule', 'propolis extract, hyaluronic acid', 'dry, dull', 'serum', 4.8, 4.2395),
(21, 'Beauty of Joseon Green Tea Moisturizer', 'green tea, panthenol', 'all', 'moisturizer', 4.5, 4.3275),
(22, 'Skin 1004 Madagascar Centella Soothing Cream', 'centella asiatica, shea butter', 'dry, sensitive', 'cream', 4.7, 4.3623),
(23, 'COSRX Advanced Snail 96 Mucin Power Essence', 'snail mucin', 'all', 'essence', 4.8, 4.4035),
(24, 'Beauty of Joseon Glow Serum', 'propolis, niacinamide', 'dry, dull', 'serum', 4.8, 4.1748),
(25, 'Skin 1004 Madagascar Centella Toner', 'centella asiatica, tea tree oil', 'oily, acne-prone', 'toner', 4.6, 4.4260),
(26, 'COSRX Low pH Good Morning Gel Cleanser', 'tea tree oil, salicylic acid', 'oily, acne-prone', 'cleanser', 4.7, 4.3332),
(27, 'Beauty of Joseon Clear Skin Set', 'ginseng, honey, vitamin C', 'all', 'set', 4.6, 4.5180),
(28, 'Skin 1004 Madagascar Centella Ampoule', 'centella asiatica, ceramide', 'sensitive, dry', 'ampoule', 4.7, 4.4389),
(29, 'COSRX Centella Blemish Cream', 'centella asiatica', 'sensitive, acne-prone', 'moisturizer', 4.6, 4.3507),
(30, 'Beauty of Joseon Pure Calming Gel Cream', 'calamine, centella asiatica', 'sensitive, irritated', 'moisturizer', 4.5, 4.5618),
(31, 'Skin 1004 Centella Asiatica Mask', 'centella asiatica, aloe vera', 'sensitive, oily', 'mask', 4.7, 4.3582),
(32, 'COSRX BHA Blackhead Power Liquid', 'salicylic acid, BHA', 'oily, acne-prone', 'toner', 4.7, 4.5197),
(33, 'Beauty of Joseon Vitamin C Serum', 'vitamin C, niacinamide', 'dull, dry', 'serum', 4.5, 4.5534),
(34, 'Skin 1004 Madagascar Centella Soothing Toner', 'centella asiatica, panthenol', 'sensitive, dry', 'toner', 4.8, 4.5020),
(35, 'COSRX Refresh Water', 'centella asiatica, tea tree extract', 'sensitive, oily', 'toner', 4.5, 4.3182),
(36, 'Beauty of Joseon Ginseng Honey Water', 'ginseng extract, honey', 'dry, sensitive', 'water', 4.6, 4.3559),
(37, 'Skin 1004 Centella Asiatica Soothing Gel', 'centella asiatica, aloe vera', 'sensitive, oily', 'gel', 4.7, 4.3275),
(38, 'COSRX Hyaluronic Acid Hydra Power Essence', 'hyaluronic acid', 'dry, all', 'essence', 4.5, 4.0734),
(39, 'Beauty of Joseon Green Tea Calming Toner', 'green tea, hyaluronic acid', 'all', 'toner', 4.4, 4.3691),
(40, 'Skin 1004 Madagascar Centella Soothing Serum', 'centella asiatica, aloe vera', 'sensitive, irritated', 'serum', 4.8, 3.9584),
(41, 'COSRX Acne Pimple Master Patch', 'hydrocolloid', 'acne-prone', 'patch', 4.7, 4.3075),
(42, 'Beauty of Joseon Propolis Soothing Cream', 'propolis, honey', 'dry, sensitive', 'moisturizer', 4.7, 4.4452),
(43, 'Skin 1004 Madagascar Centella Calming Ampoule', 'centella asiatica, peptide', 'sensitive, dry', 'ampoule', 4.6, 4.5140),
(44, 'COSRX Ultimate Nourishing Rice Overnight Mask', 'rice extract, niacinamide', 'dry, dull', 'mask', 4.7, 4.4772),
(45, 'Beauty of Joseon Whitening Essence', 'niacinamide, ginseng', 'dry, dull', 'essence', 4.6, 4.3389),
(46, 'Skin 1004 Madagascar Centella Brightening Mask', 'centella asiatica, vitamin C', 'dull, sensitive', 'mask', 4.7, 4.2731),
(47, 'COSRX BHA Blackhead Power Liquid', 'salicylic acid, BHA', 'oily, acne-prone', 'toner', 4.6, 4.3275),
(48, 'Beauty of Joseon Glow Deep Serum', 'niacinamide, vitamin C', 'dull, all', 'serum', 4.6, 4.2858),
(49, 'Skin 1004 Madagascar Centella Asiatica Toner', 'centella asiatica, niacinamide', 'sensitive, oily', 'toner', 4.7, 4.3944),
(50, 'COSRX Ultimate Nourishing Rice Overnight Spa Mask', 'rice extract, niacinamide', 'dry, dull', 'mask', 4.7, 4.3278),
(51, 'Beauty of Joseon Revive Eye Cream', 'ginseng, peptides', 'all', 'eye cream', 4.4, 4.3819),
(52, 'Skin 1004 Madagascar Centella Asiatica Cream', 'centella asiatica, ceramide', 'sensitive, dry', 'moisturizer', 4.8, 4.3919),
(53, 'COSRX Hyaluronic Acid Hydra Power Essence', 'hyaluronic acid', 'dry, all', 'essence', 4.5, 4.3500),
(54, 'Beauty of Joseon Dynasty Cream', 'ginseng extract, honey', 'dry, mature', 'moisturizer', 4.5, 4.2890),
(55, 'Skin 1004 Madagascar Centella Asiatica Serum', 'centella asiatica, peptides', 'dry, sensitive', 'serum', 4.7, 4.3558),
(56, 'COSRX Advanced Snail 92 All In One Cream', 'snail mucin, peptides', 'all', 'moisturizer', 4.9, 4.4471),
(57, 'Beauty of Joseon Radiance Cream', 'niacinamide, honey', 'dull, all', 'moisturizer', 4.6, 4.4474),
(58, 'Skin 1004 Centella Sensitive Cica Gel', 'centella asiatica, panthenol', 'sensitive, oily', 'gel', 4.4, 4.5223),
(59, 'COSRX One Step Original Clear Pad', 'salicylic acid, willow bark', 'acne-prone', 'pad', 4.7, 4.2999),
(60, 'Beauty of Joseon Ginseng Essence Water', 'ginseng extract, rice water', 'dry, sensitive', 'essence', 4.6, 4.3641),
(61, 'Skin 1004 Madagascar Centella Asiatica Ampoule', 'centella asiatica, hyaluronic acid', 'dry, sensitive', 'ampoule', 4.8, 4.4318),
(62, 'COSRX Propolis Light Ampoule', 'propolis extract, hyaluronic acid', 'dry, dull', 'serum', 4.8, 4.3445),
(63, 'Beauty of Joseon Green Tea Moisturizer', 'green tea, panthenol', 'all', 'moisturizer', 4.5, 4.3852),
(64, 'Skin 1004 Madagascar Centella Soothing Cream', 'centella asiatica, shea butter', 'dry, sensitive', 'cream', 4.7, 4.3275),
(65, 'COSRX Advanced Snail 96 Mucin Power Essence', 'snail mucin', 'all', 'essence', 4.8, 4.4018),
(66, 'Beauty of Joseon Glow Serum', 'propolis, niacinamide', 'dry, dull', 'serum', 4.8, 4.3275),
(67, 'Skin 1004 Madagascar Centella Toner', 'centella asiatica, tea tree oil', 'oily, acne-prone', 'toner', 4.6, 4.4129),
(68, 'COSRX Low pH Good Morning Gel Cleanser', 'tea tree oil, salicylic acid', 'oily, acne-prone', 'cleanser', 4.7, 4.1206),
(69, 'Beauty of Joseon Clear Skin Set', 'ginseng, honey, vitamin C', 'all', 'set', 4.6, 4.1714),
(70, 'Skin 1004 Madagascar Centella Ampoule', 'centella asiatica, ceramide', 'sensitive, dry', 'ampoule', 4.7, 4.1422),
(71, 'COSRX Centella Blemish Cream', 'centella asiatica', 'sensitive, acne-prone', 'moisturizer', 4.6, 4.2824),
(72, 'Beauty of Joseon Pure Calming Gel Cream', 'calamine, centella asiatica', 'sensitive, irritated', 'moisturizer', 4.5, 4.2884),
(73, 'Skin 1004 Centella Asiatica Mask', 'centella asiatica, aloe vera', 'sensitive, oily', 'mask', 4.7, 4.3349),
(74, 'COSRX BHA Blackhead Power Liquid', 'salicylic acid, BHA', 'oily, acne-prone', 'toner', 4.7, 4.2923),
(75, 'Beauty of Joseon Vitamin C Serum', 'vitamin C, niacinamide', 'dull, dry', 'serum', 4.5, 4.2354),
(76, 'Skin 1004 Madagascar Centella Soothing Toner', 'centella asiatica, panthenol', 'sensitive, dry', 'toner', 4.8, 4.3324),
(77, 'COSRX Refresh Water', 'centella asiatica, tea tree extract', 'sensitive, oily', 'toner', 4.5, 4.5631),
(78, 'Beauty of Joseon Ginseng Honey Water', 'ginseng extract, honey', 'dry, sensitive', 'water', 4.6, 4.1027),
(79, 'Skin 1004 Centella Asiatica Soothing Gel', 'centella asiatica, aloe vera', 'sensitive, oily', 'gel', 4.7, 4.3929),
(80, 'COSRX Hyaluronic Acid Hydra Power Essence', 'hyaluronic acid', 'dry, all', 'essence', 4.5, 4.4883),
(81, 'Beauty of Joseon Green Tea Calming Toner', 'green tea, hyaluronic acid', 'all', 'toner', 4.4, 4.2923),
(82, 'Skin 1004 Madagascar Centella Soothing Serum', 'centella asiatica, aloe vera', 'sensitive, irritated', 'serum', 4.8, 4.3275),
(83, 'COSRX Acne Pimple Master Patch', 'hydrocolloid', 'acne-prone', 'patch', 4.7, 4.3129),
(84, 'Beauty of Joseon Propolis Soothing Cream', 'propolis, honey', 'dry, sensitive', 'moisturizer', 4.7, 4.3275),
(85, 'Skin 1004 Madagascar Centella Calming Ampoule', 'centella asiatica, peptide', 'sensitive, dry', 'ampoule', 4.6, 4.2712),
(86, 'COSRX Ultimate Nourishing Rice Overnight Mask', 'rice extract, niacinamide', 'dry, dull', 'mask', 4.7, 4.3352),
(87, 'Beauty of Joseon Whitening Essence', 'niacinamide, ginseng', 'dry, dull', 'essence', 4.6, 4.0033),
(88, 'Skin 1004 Madagascar Centella Brightening Mask', 'centella asiatica, vitamin C', 'dull, sensitive', 'mask', 4.7, 4.2553);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
