
# Twin Palm Bike Club theme

http://www.twinpalmbikeclub.com

## Setup

1. Install Wordpress

2. For development set wp-config.php

```php

define('WP_DEBUG', true);
define( 'WP_DEBUG_LOG', true );

define( 'JETPACK_DEV_DEBUG', true);

// Toggle to disable canonical URLs to allow port numbers.
// Required for Webpack-dev-server proxying.
define('DISABLE_CANONICAL', 'Y', true);

// Toggle to disable absolute links
// Allows Webpack to proxy Wordpress when testing from external machines
define('DISABLE_ABSOLUTE_LINKS', 'Y', true);

```

3. Install TPBC plugin
```
#wp-site-root/wp-content/plugins/
git clone git@github.com:mummybot/tpbc-wp-plugin.git tpbc
```

4. Install TPBC theme
```
# wp-site-root/wp-content/themes
git clone git@github.com:mummybot/tpbc.git
```

5. Development environment and build
```
npm install

npm start

npm run build
```