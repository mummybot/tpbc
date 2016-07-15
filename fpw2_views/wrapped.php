<?php
/**
 * "Wrapped Image" Layout Template File
 * 
 * DO NOT MODIFY THIS FILE!
 * 
 * To override, copy the /fpw2_views/ folder to your active theme's folder.
 * Modify the file in the theme's folder and the plugin will use it.
 * See: http://wordpress.org/extend/plugins/feature-a-page-widget/faq/
 * 
 * Note: Feature a Page Widget provides a variety of filters and options that may alter the output of the_title, the_excerpt, and the_post_thumbnail in this template.
 */
?>

<?php
if( $instance['title'] ) {
	switch (esc_attr( $instance['title'] )) {
		case 'Meet the team':
			$link = '/the-tpbc-team';
			break;
		case 'CAZ':
			$link = '/the-cycling-association-of-zambia';
			break;
		default:
			$link = '';
	}
}
?>

<article class="fpw-clearfix fpw-layout-wrapped">
	<h3>
		<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
	</h3>
	<div class="fpw-featured-image">
		<?php the_post_thumbnail( 'fpw_square' ); ?>
	</div>

	<?php
		the_excerpt();

		if ($link !== '') {
			echo '<a class="btn" href="' . $link . '">Read more</a>';
		}
	?>
</article>