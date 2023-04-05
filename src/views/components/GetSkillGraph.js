

import React from 'react';
import { Radar,RadarChart, PolarGrid,Tooltip, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const enginerSkill = [
  {
    subject: 'CODING',
    A: 4.0,
    fullMark: 5,
  },
  {
    subject: 'FrontEnd',
    A: 3.3,
    fullMark: 5,
  },
  {
    subject: 'BackEnd',
    A: 3,
    fullMark: 5,
  },
  {
    subject: 'Mobile App',
    A: 1.5,
    fullMark: 5,
  },
  {
    subject: 'CMS',
    A: 4,
    fullMark: 5,
  },
  {
    subject: 'DB',
    A: 2.75,
    fullMark: 5,
  },
  {
    subject: 'SNS API',
    A: 3,
    fullMark: 5,
  },
];

const frontSkill = [
    {
      subject: 'HTML/CSS/SASS',
      A: 4,
      fullMark: 5,
    },
    {
      subject: 'JavaScript',
      A: 4,
      fullMark: 5,
    },
    {
      subject: 'jQuery',
      A: 4,
      fullMark: 5,
    },
    {
      subject: 'Google App Script',
      A: 4,
      fullMark: 5,
    },
    {
      subject: 'React',
      A: 3,
      fullMark: 5,
    },
    {
      subject: 'RN',
      A: 1.5,
      fullMark: 5,
    },

  ];


const backSkill = [
  {
    subject: 'PHP',
    A: 2.5,
    fullMark: 5,
  },
  {
    subject: 'Laravel',
    A: 3.5,
    fullMark: 5,
  },
  {
    subject: 'Wordpress',
    A: 3.0,
    fullMark: 5,
  },
  {
    subject: 'mySQL',
    A: 3,
    fullMark: 5,
  },
  {
    subject: 'firebase',
    A: 2.5,
    fullMark: 5,
  },
  {
    subject: 'API',
    A: 3,
    fullMark: 5,
  },
];


const otherSkill = [
  {
    subject: 'PSD',
    A: 3.0,
    fullMark: 5,
  },
  {
    subject: 'XD',
    A: 4.0,
    fullMark: 5,
  },
  {
    subject: 'AI',
    A: 2.5,
    fullMark: 5,
  },
  {
    subject: 'Git',
    A: 4,
    fullMark: 5,
  },
  {
    subject: 'gulp',
    A: 4,
    fullMark: 5,
  },
  {
    subject: 'webpack',
    A: 3,
    fullMark: 5,
  },

];

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">
            {getIntroOfPage(label)}
          </p>  
        </div>
      );
    } 
    return null;
  }
  const getIntroOfPage = (label) => {
    switch(label){
      case "CODING":
        return(
          <>
           HTML5/ CSS3/ SASS/ Responsive<br/>
          </>
        );
      case "Front":
        return(
          <>
          JS/ jQuery/ Google Apps Script/ React <br/>  
          </>
        );
      case "Back":
        return (
          <>
            PHP/ Laravel<br />
          </>
        );
      case "CMS":
        return(
          <>
            Wordpress<br />
          </>
  
        );
      case "Mobile App":
        return(
          <>
            React Native<br />          
          </>
        );
      case "DB":
        return(
          <>
            mySQL/ firebase<br />
            
          </>
        );
      case "SNS API":
        return(
          <>
            Twitter/ Instagram<br />           
          </>
        );
      case "HTML/CSS/SASS":
        return(
          <>
            疑似要素/ ポジション/ ransition/ animation/ filter<br />
            リファレンスなしで基本的に実装可能
            
          </>
        );
      case "JavaScript":
        return(
          <>
            タブ/ アコーディオン/ スライダー/ プルダウン/ イベント/ 非同期 <br />
            繰り返し/条件分岐/配列など基本は習得済
          </>
        );
      case "jQuery":
        return(
          <>
            jsと同じ理解度<br />
                      
          </>
        );
      case "Google App Script":
        return(
          <>
            onOpen/ onEdit/ SpreadSheeptApp / Webアプリ <br />
            jsで一番得意｡SpreadSheetsと連携し､WEBアプリ作成経験あり
          </>
        );
      case "React":
        return(
          <>
           JSX/ Babel/ useState/ useEffect/ SPA/ Render<br />
           クラスコンポーネントの理解もあるが､16.8以降基本はフックのみ使用
            
          </>
        );
      case "RN":
        return(
          <>
            一度触れたことがあるのみで経験はあまりないが､
            ページの遷移など基本的な理解あり
          </>
        );
      case "PHP":
        return(
          <>
            一度フルスクラッチで､ユーザのCRUD処理を
            一から実装経験あり(一応セキュリティ実装も)          
          </>
        );
      case "Laravel":
        return(
          <>
            <a href='https://hotelier-front.com/'>Hotelier</a>の
            WEBアプリ構築経験あり     
          </>
        );
      case "Wordpress":
        return(
          <>
            自作テーマ作成の経験あり<br />
            基本的なWP特有のPHPの書き方の理解
          </>
        );
      case "mySQL":
        return(
          <>
            SQL構文/ Laravel Eloquentの操作経験あり   
          </>
        );
      case "firebase":
        return(
          <>
            React NativeのDBとして連携経験あり   
          </>
        );
      case "API":
        return(
          <>
            Twitter/ Instagramのapi組み込み経験あり
          </>
        );
      case "PSD":
        return(
          <>
           レイヤーの理解､スライスなど基本的な操作理解あり
          </>
        );
      case "XD":
        return(
          <>
            アニメーション/レイヤー/コンポーネントなどある程度複雑な操作理解あり   
          </>
        );
      case "AI":
        return(
          <>
            PSDより操作経験なし
          </>
        );
      case "gulp":
        return(
          <>
            Frameworkなしの際､関数を作成しホットリロードやSass/jsコンパイルなどの理解あり 
          </>
        );
      case "webpack":
        return(
          <>
            gulpより理解は低いが､リファレンス見ながら操作経験あり   
          </>
        );
      case "git":
        return(
          <>
            sourcetree/コマンドどちらも操作経験あり。   
          </>
        );
         
      default:
    }
    
    return '';
  };

  function EnginerSkillGraph(){
    return (
        <ResponsiveContainer width="100%" height={400}> 
          <RadarChart cx="50%" cy="50%"
            outerRadius="80%"
            data={enginerSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[1, 5]} />
            <Radar
              name="jun"
              dataKey="A"
              stroke="#111"
              fill="#eee"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
    )
  }
  function FrontSKillGraph(){
    return (

        <ResponsiveContainer width="100%" height={400}>
          <RadarChart
            outerRadius="80%"
            data={frontSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[1, 5]} />
            <Radar
              name="jun"
              dataKey="A"
              stroke="#111"
              fill="#eee"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
    )
  }
  function BackSKillGraph(){
    return (

        <ResponsiveContainer width="100%" height={400} >
          <RadarChart
            outerRadius="80%"
            data={backSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[1, 5]} />
            <Radar
              name="jun"
              dataKey="A"
              stroke="#111"
              fill="#eee"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
    )
  }

  function OtherSkillGraph(){
    return (
        <ResponsiveContainer width="100%" height={400} >
          <RadarChart
            outerRadius="80%"
            data={otherSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[1, 5]} />
            <Radar
              name="jun"
              dataKey="A"
              stroke="#111"
              fill="#eee"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
    )
  }
export {EnginerSkillGraph,FrontSKillGraph,BackSKillGraph,OtherSkillGraph};