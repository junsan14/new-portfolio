import title_about from "../../images/title_about.png";
import {FrontSKillGraph,BackSKillGraph,OtherSkillGraph} from "../components/GetSkillGraph";
import logo from '../../images/logo.png';
import {ScrollRestoration } from 'react-router-dom';
import $ from 'jquery';
import {mainFadeIn,graphShow} from "../../app";

export default function About() {

  graphShow();
  mainFadeIn();

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
                PROFILE
              </h2>
              <div className="profile">
                <div className="profile_icon">
                  <img src={logo} className="profile_icon_img" alt="" />
                  <div className="profile_icon_desc">
                    <p >junsan14</p>
                    <p>現:WEBディレクター&エンジニア</p>
                    <p>元:リゾートホテルマン</p>
                  </div>
                  <div className="profile_icon_desc">
                    <p>好きなもの</p>
                    <p>バスケットボール,Apple製品,ドラクエ,自然､海,お酒</p>

                    
                  </div>
                </div>
                <div className="profile_biography">
                  <dl>
                    <dt>1992</dt>
                    <dd>大阪で生まれ､高校卒業まで過ごす</dd>
                    <dt>2011</dt>
                    <dd>大学入学を機に上京､工学部情報システム専攻</dd>
                    <dt>2014</dt>
                    <dd>留学への強い憧れから､奨学金無償取得可能な新学部へ転部</dd>
                    <dt>2016</dt>
                    <dd>ロンドンに留学し、日本の言語/文化交流のコミュニティ JLCE設立し2年弱滞在</dd>
                    <dt>2018</dt>
                    <dd>帰国後、当時知名度が伸びていた星野リゾートに入社、4年間河口湖のほとりで過ごす</dd>
                    <dt>2022</dt>
                    <dd>不規則な勤務にやや疲れ転職を決意､WEBディレクター兼エンジニアとして東京で活動</dd>
                  </dl>
                </div>
              </div>

              <h2 className="section_content_title">
                SKILL
              </h2>
              <div className="skill">
                <ul className="skill_tab tab">
                  <li className="skill_tab_li js-tab-front" tabIndex="-1">FrontEnd</li>
                  <li className="skill_tab_li js-tab-back" tabIndex="-1">BackEnd</li>
                  <li className="skill_tab_li js-tab-other" tabIndex="-1">Adobe/Tools</li>
                </ul>
                <div className="skill_content">
                    <div className="skill_content_item js-content js-content-front show">
                      <div className="skill_content_item_graph skill_graph">
                        <FrontSKillGraph />
                      </div>
                      <div className="skill_content_item_desc skill_desc">
                         <p>5: どんな処理もすぐに策考案可能</p>
                         <p>4: 実務経験が豊富にあり､人に指南可能</p>
                         <p>3: 1人でリファレンスみながら実装可能</p>
                         <p>2: 基本的な処理の理解あるが､1人では対応困難</p>
                         <p>1: 少し触れたレベルで､スキル向上の余地多くあり</p>
                      </div>
                    </div>
                    <div className="skill_content_item js-content js-content-back">
                      <div className="skill_content_item_graph skill_graph">
                        <BackSKillGraph />
                      </div>
                      <div className="skill_content_item_desc skill_desc">
                         <p>5: どんな処理もすぐに策考案可能</p>
                         <p>4: 実務経験が豊富にあり､人に指南可能</p>
                         <p>3: 1人でリファレンスみながら実装可能</p>
                         <p>2: 基本的な処理の理解あるが､1人では対応困難</p>
                         <p>1: 少し触れたレベルで､スキル向上の余地多くあり</p>
                      </div>
                    </div>
                    <div className="skill_content_item js-content js-content-other">
                      <div className="skill_content_item_graph skill_graph">
                        <OtherSkillGraph />
                      </div>
                      <div className="skill_content_item_desc skill_desc">
                         <p>5: Toolマスター</p>
                         <p>4: 実務使用経験があり、複雑な機能も使用可能</p>
                         <p>3: 機能の多くを理解、ある程度1人で操作可能</p>
                         <p>2: 基本的な機能は使用しているが、それまで</p>
                         <p>1: 少し触れたレベルで､機能理解の余地多くあり</p>
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


