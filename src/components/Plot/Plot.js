import React, { Component } from "react";
import Plot from "react-plotly.js";

class AppPlot extends Component {
    render() {
        return (
            <Plot
                onHover={e => console.log(e)}
                data={[
                    {
                        x: [1, 2, 3, 2, 4, 3.8],
                        y: [2, 6, 3, 5, 5, 4.5678],
                        type: "scatter",
                        mode: "markers",
                        marker: { color: "red" }
                    }
                ]}
                layout={{
                    width: "100vh",
                    height: "100vh",
                    title: "A Fancy Plot",
                    xaxis: {
                        visible: true,
                        title: "x",
                        font: {
                            size: "32px"
                        }
                    },
                    yaxis: {
                        visible: true,
                        title: {
                            text: "y"
                        }
                    }
                }}
            />
        );
    }
}

export default AppPlot;
