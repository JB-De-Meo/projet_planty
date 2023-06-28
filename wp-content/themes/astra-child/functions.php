       
<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {
    wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );
}
add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );

/**
 * Ajouter le lien d'administration au menu
 */
function ajouter_lien_admin_menu($items, $args) {
    // Vérifier si l'utilisateur est connecté et a le rôle d'administrateur
    if (is_user_logged_in() && $args->theme_location === 'primary') {
        // Créer le lien d'administration
        $admin_link = '<li class="menu-item menu-item-type-custom">';
        $admin_link .= '<a href="' . admin_url() . '">Admin</a>';
        $admin_link .= '</li>';
        // Ajouter le lien d'administration au menu
        $items .= $admin_link;
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'ajouter_lien_admin_menu', 10, 2);