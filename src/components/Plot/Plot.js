//Core
import React from "react";

//Inctruments
import Plot from "react-plotly.js";

const AppPlot = props => {
    return (
        <Plot
            style={{
                width: "80%",
                height: "500px"
            }}
            data={props.data}
            layout={{
                hovermode: "closest",

                title: "Approximation",
                xaxis: {
                    visible: true,
                    title: "x",
                    font: {
                        size: "32px"
                    }
                },
                modebar: {
                    orientation: "",
                    style: {
                        left: "50%",
                        transform: "translate(-50%)"
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
};

export default AppPlot;
