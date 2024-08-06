import { ChevronDownIcon } from "@heroicons/react/24/solid";
const ActivityContainer = () => {
  const xAxisValues: Array<number> = [15, 10, 5, 0];
  const yAxisValues: Array<number> = [
    5, 9, 11, 13, 15, 17, 15, 17, 15, 17, 15, 17,
  ];
  const barValues: Array<number> = [
    5, 9, 11, 13, 15, 6, 8, 3, 9, 7, 6, 2, 4, 5, 11, 13, 15, 6, 8,
  ];
  const maxGraphValue: number = 15;

  return (
    <div id="activity">
      <div className="header">
        <h2 className="heading">Activity</h2>
        <div className="recurrence">
          <span>weekly</span>
          <ChevronDownIcon className="chevron-down" />
        </div>
      </div>

      <div className="graph-container">
        <div className="x-axis-container">
          {xAxisValues.map((value, index) => (
            <div key={index} className="x-axis-line">
              <span className="value">{value}k</span>
              <span className="line"></span>
            </div>
          ))}
        </div>

        <div className="y-axis-container">
          {yAxisValues.map((value, index) => (
            <span key={index} className="value">
              {value}
            </span>
          ))}
        </div>

        <div className="bars-container">
          {barValues.map((value, index) => (
            <span
              key={index}
              className="bar"
              style={{ height: `${(value / maxGraphValue) * 100}%` }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityContainer;
