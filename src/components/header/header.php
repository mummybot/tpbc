<header class="header">
	<?php include(dirname(__FILE__).'/components/logo/logo.php'); ?>

	<?php 
		$includeComponent = array(
			dirname(__FILE__).'/components/navigation-main/navigation-main.php',
            dirname(__FILE__).'/components/search/search.php'
			dirname(__FILE__).'/components/search/hamburger.php'
		);
	?>
	<?php include(dirname(__DIR__).'/container/container.php'); ?>
</header>