<div class="container">
	<?php
		if (isset($includeComponent)) {
			// If not an array of components make an array of one
			if (is_array($includeComponent) == false) {
				$includeComponent = array($includeComponent);
			}
			foreach ($includeComponent as $include) {
				include($include);
			}

			// Unset the includeComponent so it doesn't appear in other containers.
			unset($includeComponent);
		}
	?>
</div>