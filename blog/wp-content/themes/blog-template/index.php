<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

</style>
    <title>BLOG</title>
  </head>
  <body>
  	<?php get_header(); ?>
    <div class="main">
      <div class="content">
        <h1 class="content_title">BLOG</h1>
        <div class="articles">
          <?php while (have_posts()) : the_post(); ?>
            <div class="article">
              <a href="<?php the_permalink(); ?>">
                <img src="<?php echo the_post_thumbnail_url() ?>" alt="" />
                <div class="article_remarks">
                  <h3 class="article_remarks_title"><?php the_title(); ?></h3>
                  <p class="article_remarks_text">
                      <?php the_excerpt(); ?>
                  </p>
                  <p class="article_remarks_date">
                      公開日:　<?php echo get_the_date(); ?><br>
                  </p>

                </div>
              </a>
            </div>
          <?php endwhile; ?>
        </div>
      </div>
    </div>

          
  </body>
</html>
