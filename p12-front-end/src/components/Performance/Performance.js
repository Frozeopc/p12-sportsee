import React from "react";
import PropTypes from "prop-types";
import {
  PolarGrid,
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import "./Performance.css";

function Performance({ performance }) {
  return (
    <div className="radarChart chart-box">
      <ResponsiveContainer>
        <RadarChart>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            data={performance}
            tick={{ fill: "white", fontSize: 12, angle: 0 }}
          />
         
          <Radar
            dataKey="value"
            data={performance}
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
Performance.propTypes = {
  performance: PropTypes.array,
};