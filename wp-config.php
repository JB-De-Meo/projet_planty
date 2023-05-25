<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'planty' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'V:8kHu^,B]w5qP`{<9Rkhdcx5F:W0|gvPVzatjtG{#g#2#Y;Cye1T)Owq12~hCxY' );
define( 'SECURE_AUTH_KEY',  'VQ+AOQn1FiOg/qkau7~,afu.3MA_>D,bT%mJHN88au~@ba]Bw3#}pnb  3&oc]|A' );
define( 'LOGGED_IN_KEY',    'Zo@/A=8Di0oZI{3_g[zqIc[F@S-tV&p-Mhb]+7mU)2C/LoxeB}`8&-tK?V2t0{:t' );
define( 'NONCE_KEY',        '4h# irMPn1$s.i3BCGBcnVoX.n6Zt:Jp33Xqjlw>kbiaeG/Dz[({XubjhES.0BC`' );
define( 'AUTH_SALT',        '2Mx5?dFfel$Z 3Vk<%CG`o5:S3L: ?MzZr^r7PhOUC.~6PIWd`*F[34 9F01/#@s' );
define( 'SECURE_AUTH_SALT', 'aee?_ZFX=tFZF2T7JCT C{~6sTajx{X6kS$/DAw12-@G/{[N#~beuO}p5e<h;hUI' );
define( 'LOGGED_IN_SALT',   '{TgH|0tFe~cIXA6zn>#S(APj|Xdw$(WV?qTGhB8|J42!t@&T{]$:SR96y+)RbPHY' );
define( 'NONCE_SALT',       'jr6f:WChi7D{ouV->sbq7xWC5xCh:=$!J%#I*`?4pK&RF%V_eVco3BW|*W4TTQqP' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
