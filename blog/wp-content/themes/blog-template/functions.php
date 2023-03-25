

<?php
// コンテンツ幅をセット
if( ! isset( $content_width ) ) {$content_width = 725; }


function custom_theme_setup() {
  add_theme_support( "automatic-feed-links");
  // 以下1行を追加
  add_theme_support( "title-tag" );
}


add_editor_style( 'style.css' );



