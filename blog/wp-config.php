<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/home1/ultradia/public_html/blog/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
/** The name of the database for WordPress */
define('DB_NAME', 'ultradia_wrdp2');

/** MySQL database username */
define('DB_USER', 'ultradia_wrdp2');

/** MySQL database password */
define('DB_PASSWORD', 'SvnUYNLqwN3aHja');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'a*GgL5*A(VQx:pw_8i/gxOM=ID!@)rxeEJ#MB4q;D-yga9b7i(dUW1kItRH6vmg(Y/IkQm23(~3');
define('SECURE_AUTH_KEY',  '~y!GyzIk/5k>uJyWG=QhdrKZQib1c9Cm4r9)lW$fX-;6Qm|I5/K7d@Tf$NL4N5Hhj>');
define('LOGGED_IN_KEY',    'zPY(mji_MvXvrW~^jHi/fW:;h$grJj27S(ISjmBY<?>oXFEAh?=9o?_kxn;Ud*$~W>A$Q');
define('NONCE_KEY',        '_FD;TXb=ds>hQb^SRM16x~=m(pZ/9Xn(=Q/*Cc=v>e1OrvIDM36i$paYRi^wbRtEcB49EUT');
define('AUTH_SALT',        'l)PyxVzOU*q0R0Bs(Ms_-)GR4fcPBay~F7WD0N?7j-M9xWaTdEOpN4ob=?rVKUv7ghk#*X');
define('SECURE_AUTH_SALT', '^GRG~C1?5\`5tI7w@Wqk*o?=/!weK(ilC2~ysABqXfDOW~EqkFuUVY>$I2R<!?uXRIt');
define('LOGGED_IN_SALT',   'A>x-R|HWWmjH(~(h\`8609j$)<R@UxCq0PfVV@d(Sqhq~6R11pkQ>A!RQ<qjo7soKG');
define('NONCE_SALT',       'jNgwZNK#s;pCqa2cIl~y-I1IA)B?SgLX|AD52Eaka>WvFKgT)BL;T?aa6@#<?(vmJ9CXW~');


/**#@-*/
define('AUTOSAVE_INTERVAL', 600 );
define('WP_POST_REVISIONS', 1);
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
define( 'WP_AUTO_UPDATE_CORE', true );
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
add_filter( 'auto_update_plugin', '__return_true' );
add_filter( 'auto_update_theme', '__return_true' );
