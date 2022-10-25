import React from "react";
import {
  
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Legend,
} from "recharts";
import "./Score.css";
import PropTypes from "prop-types";




const CustomizedLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-legend">
        <div className="score-title">Score</div>
        <h2 className="legend">{payload[0].value + "%"}</h2>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    );
  }
  return null;
};

function Score({ score }) {
  const scorePercent = score?.score * 100;
  const value = [{ value: scorePercent }];
  return (
    <div className="circleChart chart-box">
      
      <ResponsiveContainer>
        
        <RadialBarChart
          innerRadius={800}
          outerRadius={100}
          barSize={8}
          data={value}
          startAngle={180}
          endAngle={-180}
          margin={{top:20}}
        >
          <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
          />
          <RadialBar
            position="center"
            dataKey="value"
            fill="#ff0000"
            cornerRadius={10}
            background={{ fill: "#fff" }}
            
          />
          <Legend
            iconSize={10}
						width={20}
						height={20}
						layout='vertical'
						verticalAlign='top'
						align="center"
						payload={value}
						content={<CustomizedLegend />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
Score.propTypes = {
  score: PropTypes.object,
};