import React from "react";
import "./Session.css";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  Legend,
  Line,
  Dot,
} from "recharts";
import PropTypes from "prop-types";

const CustomizedLegend = () => {
  return (
    <div className="custom-legend-session">
      <span>Durée moyenne des sessions</span>
    </div>
  );
};


const CustomTooltip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-session">
        <p className="desc">{payload[0].value + "min"}</p>
        
      </div>
    );
  }
  return null;
};
// Dot source: https://recharts.org/en-US/api/Dot 
const CustomizedKey = ({ cx, cy }) => {
  return (
      <g>
      <Dot r={10} fill='white'cy={cy} cx={cx} opacity='0.5'/>
      <Dot r={4} fill='white'cy={cy} cx={cx}/>
      </g>
  )
  }

function Session({ sessions }) {
  return (
    <div className="lineChart  chart-box">
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={sessions}
          margin={{ top: 20, right: 30, left: 20, bottom:40 }}
        >
          <Tooltip content={<CustomTooltip/>} cursor={{ fill: "#C4C4C4", opacity: "0.5" }} wrapperStyle={{ outline: 'none' }} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="#FFFFFF" type="category" tickMargin={40}/>
          <Legend
            iconSize={10}
            width={20}
            height={20}
            layout="vertical"
            verticalAlign="top"
            align="left"
            content={<CustomizedLegend />}
          />
          <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF" dot={false}  strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Session;
Session.propTypes = {
  sessions: PropTypes.array,
};