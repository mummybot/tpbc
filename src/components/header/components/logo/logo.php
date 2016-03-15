<?php if ( is_front_page() && is_home() ) : ?>
    <h1 class="tpbc-logo">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <img src="/wp-content/themes/tpbc/src/components/header/components/logo/assets/img/logo.svg" alt="<?php bloginfo( 'name' ); ?>" />
        </a>
    </h1>
<?php else : ?>
    <p class="tpbc-logo">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <img src="/wp-content/themes/tpbc/src/components/header/components/logo/assets/img/logo.svg" alt="<?php bloginfo( 'name' ); ?>" />
        </a>
    </p>
<?php endif; ?>
