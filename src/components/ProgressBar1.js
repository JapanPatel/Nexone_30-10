import { Fragment } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ value }) => {
  return (
    <Fragment>
      <div className="circle_percent" data-percent={85}>
        <CircularProgressbar
          width={130}
          // value1={value1}
          strokeWidth={6}
          styles={buildStyles({
            pathColor: "#FF9201",
            trailColor: "#FFEAE3",
          })}
        />

        <div className="circle_inbox">
          <span className="percent_text">
            <span>{value === 1 ? "10+" : "30+"} </span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default ProgressBar;
