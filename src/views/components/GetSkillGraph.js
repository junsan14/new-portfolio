

import React from 'react';
import { Radar, Text,RadarChart, PolarGrid,Tooltip, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const enginerSkill = [
  {
    subject: 'CODING',
    A: 4.0,
    fullMark: 5,
  },
  {
    subject: 'FrontEnd',
    A: 3.2,
    fullMark: 5,
  },
  {
    subject: 'BackEnd',
    A: 2.4,
    fullMark: 5,
  },
  {
    subject: 'Mobile App',
    A: 1,
    fullMark: 5,
  },
  {
    subject: 'CMS',
    A: 2.5,
    fullMark: 5,
  },
  {
    subject: 'DB',
    A: 2,
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
      A: 2.5,
      fullMark: 5,
    },
    {
      subject: 'React Native',
      A: 1,
      fullMark: 5,
    },

  ];


const backSkill = [
  {
    subject: 'PHP',
    A: 2,
    fullMark: 5,
  },
  {
    subject: 'Laravel',
    A: 2.5,
    fullMark: 5,
  },
  {
    subject: 'WordPress',
    A: 2.5,
    fullMark: 5,
  },
  {
    subject: 'mySQL',
    A: 2,
    fullMark: 5,
  },
  {
    subject: 'firebase',
    A: 1.5,
    fullMark: 5,
  },
  {
    subject: 'SNS API',
    A: 3,
    fullMark: 5,
  },
];


const otherSkill = [
  {
    subject: 'PSD',
    A: 2.5,
    fullMark: 5,
  },
  {
    subject: 'XD',
    A: 3.5,
    fullMark: 5,
  },
  {
    subject: 'AI',
    A: 2,
    fullMark: 5,
  },
  {
    subject: 'Git',
    A: 3.5,
    fullMark: 5,
  },
  {
    subject: 'gulp',
    A: 3.5,
    fullMark: 5,
  },
  {
    subject: 'webpack',
    A: 2.5,
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
    if (label === 'CODING') {
      return "HTML,SASS使用歴10年以上";
    }
    if (label === 'FrontEnd') {
      return (
        <>
          JavaScript, jQueryに使用問題なし <br/>
          Frameworkは主にReactを使用しています。
        </>
      );
    }
    if (label === 'BackEnd') {
      return "使用経験はPHPのみ。Nativeも仕様書を見ながら使用可能ではあるが、WEBアプリを構築するときはLaravelを使用しています";
    }
    if (label === 'CMS') {
      return 'CMSの組み込みWordPressのみ経験。最近はPHP書き込みよりAPIでの実装が多いです。';
    }
    if (label === 'Mobile App') {
      return 'React Nativeを用いて一度だけアプリDEMOを作成した経験あり';
    }
    if (label === 'DB') {
      return '基本使用するのはmySQL,一度だけfirebaseを使用したことがあります';
    }
    if (label === 'SNS API') {
      return 'このWEBページもそうですが、TwitterやInstagramの実装経験あり';
    }
    
    return '';
  };

  function EnginerSkillGraph(){
    return (
        <ResponsiveContainer width="100%" height={400}> 
          <RadarChart
            outerRadius="80%"
            data={enginerSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 5]} />
            <Radar
              name="jun"
              dataKey="A"
              stroke="#111"
              fill="#eee"
              fillOpacity={0.6}
            />
            <Text  width={100} />
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
            <PolarRadiusAxis domain={[0, 5]} />
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
            <PolarRadiusAxis domain={[0, 5]} />
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
            <PolarRadiusAxis domain={[0, 5]} />
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