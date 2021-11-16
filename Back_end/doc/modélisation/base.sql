-- --------------------------------------------------------
-- Hôte:                         iteam-s.mg
-- Version du serveur:           10.3.31-MariaDB-0ubuntu0.20.04.1 - Ubuntu 20.04
-- SE du serveur:                debian-linux-gnu
-- HeidiSQL Version:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour AFAAS
CREATE DATABASE IF NOT EXISTS `AFAAS` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `AFAAS`;

-- Listage de la structure de la table AFAAS. climat
CREATE TABLE IF NOT EXISTS `climat` (
  `id_climat` int(11) NOT NULL AUTO_INCREMENT,
  `groupe` varchar(50) DEFAULT NULL,
  `nom_mg` varchar(255) NOT NULL,
  `nom_fr` varchar(255) NOT NULL,
  `precipitation` varchar(255) DEFAULT NULL,
  `vent` varchar(255) DEFAULT NULL,
  `nebulosite` varchar(255) DEFAULT NULL,
  `lumiere` varchar(255) DEFAULT NULL,
  `temperature` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_climat`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. climat_technique
CREATE TABLE IF NOT EXISTS `climat_technique` (
  `id_climat` int(11) NOT NULL,
  `id_technique` int(11) NOT NULL,
  PRIMARY KEY (`id_climat`,`id_technique`),
  KEY `climat_technique_technique0_FK` (`id_technique`),
  CONSTRAINT `climat_technique_climat_FK` FOREIGN KEY (`id_climat`) REFERENCES `climat` (`id_climat`),
  CONSTRAINT `climat_technique_technique0_FK` FOREIGN KEY (`id_technique`) REFERENCES `technique` (`id_technique`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. etape
CREATE TABLE IF NOT EXISTS `etape` (
  `id_etape` int(11) NOT NULL AUTO_INCREMENT,
  `numero` int(11) NOT NULL,
  `nom_mg` varchar(255) NOT NULL,
  `nom_fr` varchar(255) NOT NULL,
  `description_mg` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `id_technique` int(11) NOT NULL,
  PRIMARY KEY (`id_etape`),
  KEY `etape_technique_FK` (`id_technique`),
  CONSTRAINT `etape_technique_FK` FOREIGN KEY (`id_technique`) REFERENCES `technique` (`id_technique`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. gallerie
CREATE TABLE IF NOT EXISTS `gallerie` (
  `id_gallerie` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_gallerie`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. image
CREATE TABLE IF NOT EXISTS `image` (
  `id_image` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `description_mg` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `id_plante` int(11) NOT NULL,
  PRIMARY KEY (`id_image`),
  KEY `image_plante_FK` (`id_plante`),
  CONSTRAINT `image_plante_FK` FOREIGN KEY (`id_plante`) REFERENCES `plante` (`id_plante`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. pathologie
CREATE TABLE IF NOT EXISTS `pathologie` (
  `id_pathologie` int(11) NOT NULL AUTO_INCREMENT,
  `nom_mg` varchar(255) NOT NULL,
  `nom_fr` varchar(255) NOT NULL,
  `description_mg` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_pathologie`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. plante
CREATE TABLE IF NOT EXISTS `plante` (
  `id_plante` int(11) NOT NULL AUTO_INCREMENT,
  `nom_mg` varchar(255) NOT NULL,
  `nom_fr` varchar(255) NOT NULL,
  `nom_scientifique` varchar(255) DEFAULT NULL,
  `description_mg` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `regne` varchar(255) DEFAULT NULL,
  `embranchement` varchar(255) DEFAULT NULL,
  `classe` varchar(255) DEFAULT NULL,
  `ordre` varchar(255) DEFAULT NULL,
  `famille` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `espece` varchar(255) DEFAULT NULL,
  `humidite` varchar(255) DEFAULT NULL,
  `floraison` varchar(255) DEFAULT NULL,
  `lumiere` varchar(255) DEFAULT NULL,
  `temperature` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_plante`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. plante_pathologie
CREATE TABLE IF NOT EXISTS `plante_pathologie` (
  `id_plante` int(11) NOT NULL,
  `id_pathologie` int(11) NOT NULL,
  PRIMARY KEY (`id_plante`,`id_pathologie`),
  KEY `plante_pathologie_pathologie0_FK` (`id_pathologie`),
  CONSTRAINT `plante_pathologie_pathologie0_FK` FOREIGN KEY (`id_pathologie`) REFERENCES `pathologie` (`id_pathologie`),
  CONSTRAINT `plante_pathologie_plante_FK` FOREIGN KEY (`id_plante`) REFERENCES `plante` (`id_plante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. plante_region
CREATE TABLE IF NOT EXISTS `plante_region` (
  `id_region` varchar(50) NOT NULL DEFAULT '',
  `id_plante` int(11) NOT NULL,
  PRIMARY KEY (`id_region`,`id_plante`),
  KEY `FK_plante_region_plante` (`id_plante`),
  CONSTRAINT `FK_plante_region_plante` FOREIGN KEY (`id_plante`) REFERENCES `plante` (`id_plante`),
  CONSTRAINT `FK_plante_region_region` FOREIGN KEY (`id_region`) REFERENCES `region` (`id_region`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. region
CREATE TABLE IF NOT EXISTS `region` (
  `id_region` varchar(50) NOT NULL,
  `couverture` varchar(255) DEFAULT NULL,
  `nom` varchar(255) NOT NULL,
  `id_climat` int(11) DEFAULT NULL,
  `path` text DEFAULT NULL,
  `description_mg` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `type_sol_mg` varchar(255) DEFAULT NULL,
  `type_sol_fr` varchar(255) DEFAULT NULL,
  `structure_sol_mg` varchar(255) DEFAULT NULL,
  `structure_sol_fr` varchar(255) DEFAULT NULL,
  `texture_sol_mg` varchar(255) DEFAULT NULL,
  `texture_sol_fr` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_region`),
  KEY `region_climat_FK` (`id_climat`),
  CONSTRAINT `region_climat_FK` FOREIGN KEY (`id_climat`) REFERENCES `climat` (`id_climat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. technique
CREATE TABLE IF NOT EXISTS `technique` (
  `id_technique` int(11) NOT NULL AUTO_INCREMENT,
  `nom_mg` varchar(255) NOT NULL,
  `nom_fr` varchar(255) NOT NULL,
  `description_mg` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `info_mg` varchar(50) DEFAULT NULL,
  `info_fr` varchar(50) DEFAULT NULL,
  `productivite_mg` text DEFAULT NULL,
  `productivite_fr` text DEFAULT NULL,
  `adaptation_mg` text DEFAULT NULL,
  `adaptation_fr` text DEFAULT NULL,
  `mitigation_mg` text DEFAULT NULL,
  `mitigation_fr` text DEFAULT NULL,
  `materiel_mg` text DEFAULT NULL,
  `materiel_fr` text DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `couverture` text DEFAULT NULL,
  `publier` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_technique`),
  UNIQUE KEY `nom_fr` (`nom_fr`),
  UNIQUE KEY `nom_mg` (`nom_mg`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. technique_plante
CREATE TABLE IF NOT EXISTS `technique_plante` (
  `id_technique` int(11) NOT NULL,
  `id_plante` int(11) NOT NULL,
  PRIMARY KEY (`id_technique`,`id_plante`),
  KEY `plante_technique_plante0_FK` (`id_plante`),
  CONSTRAINT `plante_technique_plante0_FK` FOREIGN KEY (`id_plante`) REFERENCES `plante` (`id_plante`),
  CONSTRAINT `plante_technique_technique_FK` FOREIGN KEY (`id_technique`) REFERENCES `technique` (`id_technique`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. technique_region
CREATE TABLE IF NOT EXISTS `technique_region` (
  `id_region` varchar(50) NOT NULL DEFAULT '',
  `id_technique` int(11) NOT NULL,
  PRIMARY KEY (`id_region`,`id_technique`) USING BTREE,
  KEY `technique_region_technique0_FK` (`id_technique`) USING BTREE,
  CONSTRAINT `FK_technique_region_region` FOREIGN KEY (`id_region`) REFERENCES `region` (`id_region`),
  CONSTRAINT `FK_technique_region_technique` FOREIGN KEY (`id_technique`) REFERENCES `technique` (`id_technique`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. test
CREATE TABLE IF NOT EXISTS `test` (
  `nom` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table AFAAS. user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `appelation` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `droit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
