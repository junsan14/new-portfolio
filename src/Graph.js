

import React, { PureComponent } from 'react';
import { Radar, RadarChart,Legend, PolarGrid,Tooltip, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const enginerSkill = [
  {
    subject: 'HTML/CSS/SASS',
    A: 3,
    fullMark: 3,
  },
  {
    subject: 'JavaScript/jQuery',
    A: 3,
    fullMark: 3,
  },
  {
    subject: 'React.js',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'React Native',
    A: 1,
    fullMark: 3,
  },
  {
    subject: 'Vue.js',
    A: 1,
    fullMark: 3,
  },
  {
    subject: 'PHP',
    A: 1.5,
    fullMark: 3,
  },
  {
    subject: 'Laravel',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'CMS/WordPress連携',
    A: 1.5,
    fullMark: 3,
  },
  {
    subject: 'SNS api 連携',
    A: 2,
    fullMark: 3,
  },
  {
    subject: 'Database/mySQL firebase',
    A: 2,
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
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro"></p>
        
        </div>
      );
    }
  
    return null;
  }

  function Frontgraph(){
    return (

        <ResponsiveContainer width="100%" height={400}>
          <RadarChart
            outerRadius="80%"
 
            data={enginerSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 3]} />
            <Radar
              name="frontEnd"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
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
export {Frontgraph, Backgraph,Othergraph};