        <section class="inverse section sectionHomeBottom">
            <div class="colWrapper colVariant01">
                <div class="col3">
                    <?php if ( is_active_sidebar( 'content_bottom_widgets_1' ) ) : ?>
                        <?php dynamic_sidebar( 'content_bottom_widgets_1' ); ?>
                    <?php endif; ?>
                </div>
                <div class="col3">
                    <?php if ( is_active_sidebar( 'content_bottom_widgets_2' ) ) : ?>
                        <?php dynamic_sidebar( 'content_bottom_widgets_2' ); ?>
                    <?php endif; ?>
                </div>
                <div class="col3">
                    <?php if ( is_active_sidebar( 'content_bottom_widgets_3' ) ) : ?>
                        <?php dynamic_sidebar( 'content_bottom_widgets_3' ); ?>
                    <?php endif; ?>
                </div>
            </div>
        </section>

        <footer id="colophon" class="site-footer inverse" role="contentinfo">
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
        </footer><!-- .site-footer -->