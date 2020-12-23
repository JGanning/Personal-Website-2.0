import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }

  componentDidMount() {
    var chartData = {
      labels: [
        "Boston",
        "Worcester",
        "Springfield",
        "Lowell",
        "Cambridge",
        "New Bedford",
      ],
      datasets: [
        {
          label: "population",
          data: ["1234", "5678", "9012", "3456", "7890", "1235"],
          backgroundColor: [
            "rgba(9, 154, 96, 1)",
            "rgba(9, 111, 154, 1)",
            "rgba(26, 9, 154, 1)",
            "rgba(154, 9, 152, 1)",
            "rgba(154, 9, 45, 1)",
            "rgba(174, 144, 10, 1)"
          ]
        },
      ],
    };

    this.setState({
      chartData,
    });
  }

  // chartJS = () => {
  //   var chart = new CanvasJS.Chart("chartContainer", {

  //   })
  // }

  render() {
    return (
      <div>
        <Pie
        data={this.state.chartData} />
      </div>
    );
  }
}

export default PieChart;
