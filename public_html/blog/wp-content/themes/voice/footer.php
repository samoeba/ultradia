<?php if( vce_is_woocommerce_active() && (is_singular('product') || is_tax('product_cat') || is_post_type_archive('product') ) ): ?>
	</div>
<?php endif; ?>

	<footer id="footer" class="site-footer">

		<?php if ( vce_get_option( 'footer_display' ) ) : ?>
		<div class="container">
			<div class="container-fix">
			<?php $footer_layout = explode( "_", vce_get_option( 'footer_layout' ) ); ?>
			<?php for ( $i = 0; $i < count( $footer_layout ); $i++ ) : ?>
				<div class="bit-<?php echo $footer_layout[$i]; ?>">
					<?php dynamic_sidebar( 'vce_footer_sidebar_'.($i+1) ); ?>
				</div>
			<?php endfor;?>
			</div>
		</div>
		<?php endif; ?>

		<?php if ( vce_get_option( 'enable_copyright' ) ) : ?>
			<div class="container-full site-info">
				<div class="container">
					<?php if($footer_bar_left = vce_get_option('footer_bar_left')): ?>
						<div class="vce-wrap-left">
							<?php get_template_part( 'sections/'.$footer_bar_left ); ?>
						</div>
					<?php endif; ?>

					<?php if($footer_bar_right = vce_get_option('footer_bar_right')): ?>
						<div class="vce-wrap-right">
							<?php get_template_part( 'sections/'.$footer_bar_right ); ?>
						</div>
					<?php endif; ?>	

					<?php if($footer_bar_center = vce_get_option('footer_bar_center')): ?>
						<div class="vce-wrap-center">
							<?php get_template_part( 'sections/'.$footer_bar_center ); ?>
						</div>
					<?php endif; ?>

			
				</div>
			</div>
		<?php endif; ?>


	</footer>


</div>
</div>

<?php if(vce_get_option('scroll_to_top')): ?>
<a href="javascript:void(0)" id="back-top"><i class="fa fa-angle-up"></i></a>
<?php endif; ?>

<?php wp_footer(); ?>

<!-- jQuery -->
<script type="text/javascript" src="http://blog.chronasleep.com/wp-content/themes/voice/js/jquery.js?ver=1.3.1"></script>

<!-- Bootstrap Core JavaScript -->
<script type="text/javascript" src="http://blog.chronasleep.com/wp-content/themes/voice/js/bootstrap.min.js?ver=1.3.1"></script>

<!-- Plugin JavaScript -->
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script type="text/javascript" src="http://blog.chronasleep.com/wp-content/themes/voice/js/classie.js?ver=1.3.1"></script>
<script type="text/javascript" src="http://blog.chronasleep.com/wp-content/themes/voice/js/cbpAnimatedHeader.js?ver=1.3.1"></script>

<!-- Custom Theme JavaScript -->
<script type="text/javascript" src="http://blog.chronasleep.com/wp-content/themes/voice/js/jquery.js?ver=1.3.1"></script>
<script type="text/javascript" src="http://blog.chronasleep.com/wp-content/themes/voice/js/twitter-widget-styles.js"></script>

</body>
</html>