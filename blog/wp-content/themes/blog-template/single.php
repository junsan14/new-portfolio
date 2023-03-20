<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href="<?php echo get_stylesheet_uri(); ?>" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

</style>
    <title><?php echo get_the_title(); ?></title>
  </head>
  <body>
  	<?php get_header(); ?>
    <div class="main wrapper">
      <?php if(have_posts()): ?>
       <?php while (have_posts()):the_post(); ?>
        <div class="content">
          <h1 class="content_title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
          </h1>
          <div class="page">
            <div class="page_remarks">
              <p class="post_date">
                公開日:　<?php echo get_the_date(); ?><?php the_time(); ?>
              </p>
              <p class="post_date">
                更新日:　<?php echo the_modified_date() ; ?><?php the_modified_time(); ?>
              </p>
              <p class="category">
                 カテゴリー：<?php the_category(' , '); ?>
              </p>
            </div>
            <div class="page_content">
              <?php the_content(); ?>   
            </div>
           
          </div>
        </div>
        <?php endwhile; ?>
        <div class="comment">
          <?php comments_template(); ?>
        </div>
        <?php else : ?>
          <h1 class="content_title">
            記事が見つかりませんでした
          </h1>
      <?php endif; ?>
    </div>

          
  </body>
</html>



