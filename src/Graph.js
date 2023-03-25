

import React from 'react';
import { Radar, RadarChart, PolarGrid,Tooltip, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const enginerSkill = [
  {
    subject: 'CODING',
    A: 4.5,
    fullMark: 5,
  },
  {
    subject: 'FrontEnd',
    A: 4,
    fullMark: 5,
  },
  {
    subject: 'BackEnd',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'Mobile App',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'CMS',
    A: 2.5,
    fullMark: 3,
  },
  {
    subject: 'Database',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'SNS API',
    A: 3,
    fullMark: 3,
  },
];

const frontSkill = [
    {
      subject: 'HTML',
      A: 3,
      fullMark: 3,
    },
    {
      subject: 'CSS/SASS',
      A: 3,
      fullMark: 3,
    },
    {
      subject: 'JavaScript',
      A: 3,
      fullMark: 3,
    },
    {
      subject: 'jQuery',
      A: 3,
      fullMark: 3,
    },
    {
      subject: 'React',
      A: 2,
      fullMark: 3,
    },
    {
      subject: 'Vue',
      A: 1,
      fullMark: 3,
    },

  ];


const backSkill = [
  {
    subject: 'PHP',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'Laravel',
    A: 3,
    fullMark: 3,
  },
  {
    subject: 'WordPress',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'mySQL',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'firebase',
    A: 1,
    fullMark: 3,
  },
];


const otherSkill = [
  {
    subject: 'Git',
    A: 3,
    fullMark: 3,
  },
  {
    subject: 'gulp',
    A: 3,
    fullMark: 3,
  },
  {
    subject: 'webpack',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'node.js',
    A: 1.5,
    fullMark: 3,
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
      return "JavaScript, jQueryに使用問題なし。Frameworkは主にReactを使用しています。";
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
    if (label === 'Database') {
      return '基本使用するのはmySQL,一度だけfirebaseを使用したことがあります';
    }
    if (label === 'SNS API') {
      return 'このWEBページもそうですが、TwitterやInstagramの実装経験あり';
    }
    
    return '';
  };

  function SkillGraph(){
    return (

        <ResponsiveContainer width="100%" height={400}>
          <RadarChart
            outerRadius={150}
 
            data={enginerSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 5]} />
            <Radar
              name="frontEnd"
              dataKey="A"
              stroke="#111"
              fill="#eee"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
    )
  }
  function Backgraph(){
    return (

        <ResponsiveContainer width="100%" height={400}>
          <RadarChart
            outerRadius={150}
            data={backSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 3]} />
            <Radar
              name="BackEnd"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
    )
  }
  function Othergraph(){
    return (

        <ResponsiveContainer width="100%" height={400} >
          <RadarChart
            outerRadius={150}
            data={otherSkill}
            width={600}
            height={500}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 3]} />
            <Radar
              name="BackEnd"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
    )
  }
export {SkillGraph, Backgraph,Othergraph};