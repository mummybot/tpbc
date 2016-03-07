<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage TPBC
 * @since TPBC 1.0
 */
?>

		</div><!-- .site-content -->

		<footer id="colophon" class="site-footer" role="contentinfo">
			<?php if ( has_nav_menu( 'primary' ) ) : ?>
				<nav class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Footer Primary Menu', 'tpbc' ); ?>">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'primary',
							'menu_class'     => 'primary-menu',
						 ) );
					?>
				</nav><!-- .main-navigation -->
			<?php endif; ?>

			<?php if ( has_nav_menu( 'social' ) ) : ?>
				<nav class="social-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Footer Social Links Menu', 'tpbc' ); ?>">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'social',
							'menu_class'     => 'social-links-menu',
							'depth'          => 1,
							'link_before'    => '<span class="screen-reader-text">',
							'link_after'     => '</span>',
						) );
					?>
				</nav><!-- .social-navigation -->
			<?php endif; ?>

			<div class="site-info">
				<?php
					/**
					 * Fires before the tpbc footer text for footer customization.
					 *
					 * @since TPBC 1.0
					 */
					do_action( 'tpbc_credits' );
				?>
				<span class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></span>
				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'tpbc' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'tpbc' ), 'WordPress' ); ?></a>
			</div><!-- .site-info -->
		</footer><!-- .site-footer -->
	</div><!-- .site-inner -->
</div><!-- .site -->

<?php wp_footer(); ?>
<?php
// Add Livereload
if (INJECT_LIVERELOAD == 'Y') {
?>
	<script>
		document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':3002/livereload.js?snipver=1"></' + 'script>')
	</script>
<?php
}
?>
</body>
</html>
<?php
if (DISABLE_ABSOLUTE_LINKS == 'Y') {
	ob_end_flush();
}
?>
