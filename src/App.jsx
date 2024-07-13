import { LineChart } from "@mui/x-charts";
import "./App.css";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

function App() {
  // return an array of values that are reduced by a random amount from the original value to the end value
  const randomReductionToDefined = (value, steps, endValue) => {
    const totalReduction = value - endValue;
    let data = [value];
    let current = value;

    for (let i = 1; i < steps; i++) {
      if (i === steps - 1) {
        data.push(endValue);
        break;
      }

      const randomReduction =
        Math.random() * (totalReduction / (steps - i * 0.89));

      current -= randomReduction;

      data.push(current);
    }

    return data;
  };

  return (
    <div className="bg-slate-800 rounded-md p-7">
      <h3 className="text-xl text-white">
        PTSD Remission Rates <small>(MDMA vs. Placebo over 12 months)</small>
      </h3>
      <hr className="border-white my-4" />
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
        series={[
          {
            data: randomReductionToDefined(0, 12, 13 * 0.4),
            label: "MDMA Treatment",
          },
          {
            data: randomReductionToDefined(0, 12, 13 * 0.14),
            label: "Placebo + Therapy",
          },
        ]}
        slotProps={{
          legend: {
            labelStyle: {
              fill: "white",
            },
          },
          yAxis: {
            labelStyle: {
              fill: "white",
            },
          },
        }}
        yAxis={[
          {
            label: "Millions of Patients",
            fill: "white",
          },
        ]}
        colors={["#8884d8", "#82ca9d"]}
        sx={(theme) => ({
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: "white",
              strokeWidth: 3,
            },
            [`.${axisClasses.tickLabel}`]: {
              fill: "white",
            },
            // change color of the data label in the legend
            [`& .MuiChartsLegend-series text tspan`]: {
              fill: "white",
              stroke: "white",
            },
          },
        })}
        width={700}
        height={400}
      />
    </div>
  );
}

export default App;
