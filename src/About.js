import title_about from "./images/title_about.png";
import {SkillGraph,Backgraph,Othergraph} from "./Graph";
import logo from './images/logo.png';
import {ScrollRestoration } from 'react-router-dom';
import $ from 'jquery';

function About() {

  graphShow();


  return (
    <main className="main wrapper">
      <ScrollRestoration />
      <div className="about">
          <section className="section">
            <h1 className="section_title">
              <img className="section_title_en" src={title_about} alt="" />
              <div className="section_title_jp">紹介</div>
            </h1>
                    
            <div className="section_content about_content">
              <h2 className="section_content_title">
                BIOGRAPHY
              </h2>
              <div className="profile">
                <div className="profile_icon">
                  <img src={logo} className="profile_icon_img" alt="" />
                  <div className="profile_icon_desc">
                    <p>junsan14</p>
                    <p>現:WEBディレクター&エンジニア</p>
                    <p>元:リゾートホテルマン</p>
                  </div>
                </div>
                <div className="profile_biography">
                  <dl>
                    <dt>1992</dt>
                    <dd>大阪で生まれ、18年間大阪で過ごす</dd>
                    <dt>2011</dt>
                    <dd>東日本大震災で東北の大学を受験できず、東京に進学</dd>
                    <dt>2014</dt>
                    <dd>3年間工学科に在籍するも、馴染めず奨学金無償で留学できる国際教養学部へ転学</dd>
                    <dt>2016</dt>
                    <dd>ロンドンに2年弱在籍し、日本の言語、文化交流のコミュニティ設立</dd>
                    <dt>2018</dt>
                    <dd>卒業後、サービス業に強い憧れがあり当時知名度を爆発的に伸ばしていた星野リゾートに入社、4年間河口湖のほとりで過ごす</dd>
                    <dt>2022</dt>
                    <dd>やはりホテル業は将来への不安も大きいため、東京へ戻りWEB業界への転職に至る</dd>
                  </dl>
                </div>
              </div>

              <h2 className="section_content_title">
                SKILL
              </h2>
              <div className="skill">
                <ul className="skill_tab">
                  <li className="skill_tab_li js-tab-front">Engineer Skill</li>
                  <li className="skill_tab_li js-tab-back">BackEnd</li>
                  <li className="skill_tab_li js-tab-other">Others</li>
                </ul>
                <div className="skill_content">
                    <div className="skill_content_item js-content js-content-front show">
                      <div className="skill_content_item_graph skill_graph">
                        <SkillGraph />
                      </div>
                      <div className="skill_content_item_des skill_desc">
                         <p>5: 使用に問題なし</p>
                         <p>4: 使用に問題なし</p>
                         <p>3: 使用に問題なし</p>
                         <p>2: 使用に問題なし</p>
                         <p>1: 使用に問題なし</p>
                      </div>
                    </div>
                    <div className="skill_content_item js-content js-content-back">
                      <div className="skill_content_item_graph">
                        <Backgraph />
                      </div>
                      <div className="skill_content_item_desc">
                          <dl>
                            <dt>数サイトの実装経験あり</dt>
                            <dd>NativePHP/ Laravel/ mySQL/ firebase</dd>
                          </dl>
                      </div>
                    </div>
                    <div className="skill_content_item js-content js-content-other">
                      <div className="skill_content_item_graph">
                        <Othergraph />
                      </div>
                      <div className="skill_content_item_desc">
                          <dl>
                            <dt>3年以上の実務経験あり</dt>
                            <dd> Git/ gulp/ webpack/ node.js etc..</dd>

                          </dl>
                      </div>
                  </div>
                </div>

              </div>
             
            </div>
          </section>
      </div>
    </main>
  );
}


function graphShow(){
  $(function(){
    $('.js-tab-front').on('click', ()=>{
      $('.js-content').removeClass("show")
      $('.js-content-front').addClass("show");
    })
    $('.js-tab-back').on('click', ()=>{
      $('.js-content').removeClass("show")
      $('.js-content-back').addClass("show");
    })
    $('.js-tab-other').on('click', ()=>{
      $('.js-content').removeClass("show")
      $('.js-content-other').addClass("show");
    })
  })
}

export default About;
