<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->

    <?php
        /**
         * Fires before the Twenty Fourteen featured content.
         *
         * @since Twenty Fourteen 1.0
         */
        do_action( 'tpbc_featured_posts_before' );

        $featured_posts = tpbc_get_featured_posts();
        foreach ( (array) $featured_posts as $order => $post ) :
            setup_postdata( $post );
    ?>

        <div class="swiper-slide" style="background-image: url('<?php the_post_thumbnail_url() ?>');">
            <div>
                <h1 class="inverse">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h1>
                <a href="<?php the_permalink(); ?>" class="btn">Read more</a>
            </div>
        </div>

    <?php
        endforeach;

        /**
         * Fires after the Twenty Fourteen featured content.
         *
         * @since Twenty Fourteen 1.0
         */
        do_action( 'tpbc_featured_posts_after' );

        wp_reset_postdata();
    ?>


        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
