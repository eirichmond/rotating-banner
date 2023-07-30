<?php
/**
 * Plugin Name:       Rotating Banner
 * Description:       Rotating Banner is a simple block that can be rotated to any angle.
 * Plugin URI:		  https://github.com/eirichmond/rotating-banner
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Elliott Richmond
 * Author URI: 		  https://elliottrichmond.co.uk/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rotating-banner
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_rotating_banner_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_rotating_banner_block_init' );
