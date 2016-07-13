<?php
/**
 * The home template file
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage TPBC
 * @since TPBC 1.0
 */

get_header(); ?>
        <?php include(dirname(__FILE__).'/src/components/tagline/tagline.php'); ?>

        <section class="swiper">
            <?php include(dirname(__FILE__).'/src/components/swiper/swiper.php'); ?>
        </section>
        <section class="inverse section sectionHomeTop">
            <div class="colWrapper colVariant01">
                <div class="col3">
                    <?php if ( is_active_sidebar( 'home_widgets_1' ) ) : ?>
                        <?php dynamic_sidebar( 'home_widgets_1' ); ?>
                    <?php endif; ?>
                </div>
                <div class="col3">
                    <?php if ( is_active_sidebar( 'home_widgets_2' ) ) : ?>
                        <?php dynamic_sidebar( 'home_widgets_2' ); ?>
                    <?php endif; ?>
                </div>
                <div class="col3">
                    <?php if ( is_active_sidebar( 'home_widgets_3' ) ) : ?>
                        <?php dynamic_sidebar( 'home_widgets_3' ); ?>
                    <?php endif; ?>
                </div>
            </div>
        </section>

        <section class="section sectionHomeContent">
        <?php
        // Get "Our sponsors" page
        global $post;
        $post = get_post( 2 );
        setup_postdata($post);
        /*
             * Include the Post-Format-specific template for the content.
             * If you want to override this in a child theme, then include a file
             * called content-___.php (where ___ is the Post Format name) and that will be used instead.
             */
            get_template_part( 'template-parts/content', get_post_format() );
        ?>
        </section>

<?php get_footer(); ?>
