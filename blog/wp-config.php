<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'blog' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&:-98QdFm63 3#2!]LGqBCMa:RuDfvfpO6sn)7#OT%VBHo*mLE-^/WII`?_f|t=`' );
define( 'SECURE_AUTH_KEY',  'gn.y,tu;;da!c?@L#$PZk$L|1S9x3TL}#S2)#[$C>Avj=/r|Z#vQ>0[3^wzYcNI_' );
define( 'LOGGED_IN_KEY',    'voA*ZjTBOT9IjEJxN>Hk:~l[tE0M&5I>[73a-Icf+/J`%yASM}9zBMwgDHZU.s)C' );
define( 'NONCE_KEY',        '@8#4>Q#}Wb!;%cpR7YG75~/ ^FMX2Ywf!]nJE%k kBv0.&v6V_Hr h*NNEt~QCwm' );
define( 'AUTH_SALT',        'fy;3%#0TmZTY:=,:?VzIxpEt6?26&Fs!xA(I31Cys:Iq@LwQgRmAj4i% vUg #@>' );
define( 'SECURE_AUTH_SALT', 'USl5mb{SJSotoEo7{>mN`@LVZ[$3^I%<^yj9auQn0qK0buKT8$^v&gHu4|1`GZdm' );
define( 'LOGGED_IN_SALT',   '%B/BL~/tWoU3ZT_Ya!8t*+y|YT>QwrHWk+ZZRBD@0~R*TwnZV(dE-relm9$EjiuN' );
define( 'NONCE_SALT',       ';D<SzVfhSRyjf*DXmyj5a;,k5I7|c4H,n1_PM^?cP$2[)HIMh/.+-:;jq[te*<lB' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
