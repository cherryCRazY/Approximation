import { tools } from "../tools";
import { lagrange } from "./lagrange";
import { linear } from "./linear";

export const interData = data => {
    const points = tools(data);

    let { xArr: x, yArr: y } = points;
    // const lag = lagrange(points);

    let trace = {
        x,
        y,
        type: "scatter",
        mode: "markers",
        name: "Points",
        marker: { color: "red" }
    };
    let linearTrace = {
        x,
        y,
        type: "scatter",
        mode: "line",
        name: "linear",
        marker: { color: "blue" }
    };
    let lagrangeTrace = {
        // ...mnk2,
        type: "scatter",
        mode: "line",
        name: "mnk-2",
        marker: { color: "green" }
    };

    // Data is the special object to Plotly
    return {
        data: [linearTrace, lagrangeTrace, trace],
        inter: {
            linear,
            lagrange
        }
    };
};
