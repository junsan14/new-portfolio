

import React, { PureComponent } from 'react';
import { Radar, RadarChart,Legend, PolarGrid,Tooltip, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const frontSkill = [
    {
      subject: 'HTML/CSS',
      A: 3,
      fullMark: 3,
    },
    {
      subject: 'JavaScript',
      A: 3,
      fullMark: 3,
    },
    {
      subject: 'PHP/Laravel',
      A: 1,
      fullMark: 3,
    },
    {
      subject: 'mySQL',
      A: 1,
      fullMark: 3,
    },
    {
      subject: '環境構築',
      A: 2,
      fullMark: 3,
    },
  ];


const backSkill = [
  {
    subject: 'PHP',
    A: 1.0,
    fullMark: 3,
  },
  {
    subject: 'Laravel',
    A: 1.5,
    fullMark: 3,
  },
  {
    subject: 'WordPress',
    A: 1.5,
    fullMark: 3,
  },
  {
    subject: 'mySQL',
    A: 1.5,
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
    A: 2.5,
    fullMark: 3,
  },
  {
    subject: 'gulp',
    A: 2.5,
    fullMark: 3,
  },
  {
    subject: 'webpack',
    A: 2.5,
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

        <ResponsiveContainer width="100%" height={500} >
          <RadarChart
            outerRadius={150}
            data={frontSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
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

        <ResponsiveContainer width="100%" height={500} >
          <RadarChart
            outerRadius={150}
            data={backSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
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

        <ResponsiveContainer width="100%" height={500} >
          <RadarChart
            outerRadius={150}
            data={otherSkill}
          >
            <Tooltip content={<CustomTooltip />}/>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
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