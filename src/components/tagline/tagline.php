<?php
$description = get_bloginfo( 'description', 'display' );
if ( $description || is_customize_preview() ) : ?>
	<p class="tagline"><?php echo html_entity_decode($description); ?></p>
<?php endif; ?>
