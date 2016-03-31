<?php if ( has_nav_menu( 'primary' ) ) : ?>
<nav class="navigationMain" role="navigation" aria-label="<?php esc_attr_e( 'Primary Menu', 'tpbc' ); ?>">
	<?php
		wp_nav_menu( array(
			'theme_location' => 'primary',
			'menu_class'     => 'primary-menu',
		 ) );
	?>
</nav>
<?php endif; ?>