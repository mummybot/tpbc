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
</div><!-- #page -->

<?php include('src/components/footer/footer.php'); ?>

<?php wp_footer(); ?>
</body>
</html>
<?php
if (DISABLE_ABSOLUTE_LINKS == 'Y') {
	ob_end_flush();
}
?>
