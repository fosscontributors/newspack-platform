<?php
/**
 * Title: Footer (Desktop) - Style 5
 * Slug: newspack-block-theme/footer-desktop-style-5
 * Inserter: no
 * Block Types: core/template-part/footer
 *
 * @package Newspack_Block_Theme
 */

?>
<!-- wp:group {"lock":{"move":true,"remove":true},"metadata":{"name":"<?php esc_html_e( 'Footer', 'newspack-block-theme' ); ?>"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|80"}},"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"backgroundColor":"contrast","textColor":"base","className":"is-footer","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-footer has-base-color has-contrast-background-color has-text-color has-background has-link-color" style="margin-top:var(--wp--preset--spacing--80)">

	<!-- wp:group {"lock":{"move":true,"remove":true},"align":"wide","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
	<div class="wp-block-group alignwide">

		<!-- wp:group {"lock":{"move":true,"remove":true},"metadata":{"name":"<?php esc_html_e( 'Content', 'newspack-block-theme' ); ?>"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|80","bottom":"var:preset|spacing|80"}}},"layout":{"type":"default"}} -->
		<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--80);padding-bottom:var(--wp--preset--spacing--80)">
			<!-- wp:site-title {"level":0,"fontSize":"large"} /-->

			<!-- wp:columns {"lock":{"move":true,"remove":true}} -->
			<div class="wp-block-columns">
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:paragraph {"fontSize":"large"} -->
					<p class="has-large-font-size"><?php esc_html_e( 'Our online newspaper delivers the latest news and insightful analysis. Our experienced journalists ensure accurate and impartial reporting. Stay informed with our engaging and informative articles.', 'newspack-block-theme' ); ?></p>
					<!-- /wp:paragraph -->

					<!-- wp:social-links {"iconColor":"base","iconColorValue":"#ffffff","iconBackgroundColor":"contrast-2","className":"has-icon-background-color"} -->
					<ul class="wp-block-social-links has-icon-color has-icon-background-color">
						<!-- wp:social-link {"url":"#","service":"facebook"} /-->

						<!-- wp:social-link {"url":"#","service":"instagram"} /-->

						<!-- wp:social-link {"url":"#","service":"x"} /-->
					</ul>
					<!-- /wp:social-links -->
				</div>
				<!-- /wp:column -->

				<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}}} -->
				<div class="wp-block-column">
					<!-- wp:columns -->
					<div class="wp-block-columns">
						<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}}} -->
						<div class="wp-block-column">
							<!-- wp:navigation {"className":"is-style-default","style":{"typography":{"fontStyle":"normal","fontWeight":"600"},"spacing":{"blockGap":"var:preset|spacing|30"}},"fontSize":"x-small","layout":{"type":"flex","flexWrap":"nowrap","orientation":"vertical"}} /-->
						</div>
						<!-- /wp:column -->

						<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}}} -->
						<div class="wp-block-column">
							<!-- wp:navigation {"className":"is-style-default","style":{"typography":{"fontStyle":"normal","fontWeight":"600"},"spacing":{"blockGap":"var:preset|spacing|30"}},"fontSize":"x-small","layout":{"type":"flex","flexWrap":"nowrap","orientation":"vertical"}} /-->
						</div>
						<!-- /wp:column -->

						<!-- wp:column {"style":{"spacing":{"blockGap":"var:preset|spacing|30"}}} -->
						<div class="wp-block-column">
							<!-- wp:navigation {"className":"is-style-default","style":{"typography":{"fontStyle":"normal","fontWeight":"600"},"spacing":{"blockGap":"var:preset|spacing|30"}},"fontSize":"x-small","layout":{"type":"flex","flexWrap":"nowrap","orientation":"vertical"}} /-->
						</div>
						<!-- /wp:column -->

					</div>
					<!-- /wp:columns -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->
		</div>
		<!-- /wp:group -->

		<!-- wp:group {"lock":{"move":true,"remove":true},"metadata":{"name":"<?php esc_html_e( 'Credits', 'newspack-block-theme' ); ?>"},"className":"is-credits","layout":{"type":"default"}} -->
		<div class="wp-block-group is-credits">
			<!-- wp:separator {"lock":{"move":true,"remove":true},"className":"is-style-wide","backgroundColor":"contrast-2"} -->
			<hr class="wp-block-separator has-text-color has-contrast-2-color has-alpha-channel-opacity has-contrast-2-background-color has-background is-style-wide"/>
			<!-- /wp:separator -->

			<!-- wp:group {"lock":{"move":false,"remove":true},"style":{"spacing":{"blockGap":"var:preset|spacing|20","padding":{"bottom":"var:preset|spacing|50"}}},"fontSize":"x-small","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
			<div class="wp-block-group has-x-small-font-size" style="padding-bottom:var(--wp--preset--spacing--50)">
				<!-- wp:group {"lock":{"move":false,"remove":true},"metadata":{"name":"<?php esc_html_e( 'Copyright', 'newspack-block-theme' ); ?>"},"style":{"spacing":{"blockGap":"0.25em"}},"layout":{"type":"flex","flexWrap":"wrap"}} -->
				<div class="wp-block-group">
					<!-- wp:paragraph -->
					<p><strong>©</strong></p>
					<!-- /wp:paragraph -->

					<!-- wp:site-title {"style":{"typography":{"fontStyle":"normal","fontWeight":"400"}},"fontSize":"x-small"} /-->
				</div>
				<!-- /wp:group -->

				<!-- wp:paragraph {"lock":{"move":true,"remove":true},"metadata":{"name":"<?php esc_html_e( 'Powered By', 'newspack-block-theme' ); ?>"},"className":"powered-by"} -->
				<p class="powered-by"><a href="https://newspack.com"><?php esc_html_e( 'Powered by Newspack', 'newspack-block-theme' ); ?></a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:group -->

	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:group -->
