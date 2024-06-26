<?php
/**
 * Donations Pattern 2.
 *
 * @package Newspack_Blocks
 */

return array(
	'title'         => __( 'Donations Pattern 2', 'newspack-blocks' ),
	'content'       => "<!-- wp:heading {\"align\":\"center\"} -->\n<h2 class=\"has-text-align-center\">" . __( 'Support our publication', 'newspack-blocks' ) . "</h2>\n<!-- /wp:heading -->\n\n<!-- wp:columns {\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":33.33} -->\n<div class=\"wp-block-column\" style=\"flex-basis:33.33%\"><!-- wp:paragraph -->\n<p>" . __( 'With the support of readers like you, we provide thoughtfully researched articles for a more informed and connected community. This is your chance to support credible, community-based, public-service journalism. Please join us!', 'newspack-blocks' ) . "</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"width\":66.66} -->\n<div class=\"wp-block-column\" style=\"flex-basis:66.66%\"><!-- wp:newspack-blocks/donate {\"className\":\"is-style-modern\"} /--></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->",
	'viewportWidth' => 910,
	'categories'    => array( 'newspack-donations' ),
);
