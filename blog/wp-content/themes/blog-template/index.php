<!DOCTYPE html>
<html lang="jp">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="<?php echo get_stylesheet_uri(); ?>" rel="stylesheet" type="text/css">

    <title>BLOG</title>
  </head>
  <body>
  	<?php get_header(); ?>
    <div class="main wrapper">
    <section class="section">
            <h2 class="section_title">
              <img class="section_title_en" src="" alt="" />
              <div class="section_title_jp">記事</div>
            </h2>
        <div class="section_content posts">
        <div class="articles">
          <?php while (have_posts()) : the_post(); ?>
            <div class="article" id={item.id} key={item.id}>
                  <a href="<?php the_permalink(); ?>">
                    <img src="<?php echo the_post_thumbnail_url() ?>" alt="" />
                    <div class="article_remarks">
                      <h3 class="article_remarks_title"><?php the_title(); ?></h3>
                      <p class="article_remarks_text">
                          <?php the_excerpt(); ?>
                      </p>
                      <p className="article_remarks_date">
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
