import { tools } from "../tools";
import { lagrange } from "./lagrange";
import { linear } from "./linear";

export const interData = data => {
    const points = tools(data);

    let { xArr: x, yArr: y } = points;

    const lagrangeX = [];
    const lagrangeY = [];

    const temp = data.map(({ x, y }) => [x, y]);
    const sortedPointArr = temp.sort((a, b) => a[0] - b[0]);

    const xLinear = sortedPointArr.map(point => +point[0]);
    const yLinear = sortedPointArr.map(point => +point[1]);

    for (let i = points.minX; i < points.maxX + 0.01; i += 0.01) {
        lagrangeX.push(i);
        lagrangeY.push(+lagrange(i, data));
    }

    let trace = {
        x,
        y,
        type: "scatter",
        mode: "markers",
        name: "Points",
        marker: { color: "red" }
    };
    let linearTrace = {
        x: xLinear,
        y: yLinear,
        type: "scatter",
        mode: "line",
        name: "Linear",
        marker: { color: "blue" }
    };
    let lagrangeTrace = {
        x: lagrangeX,
        y: lagrangeY,
        type: "scatter",
        mode: "line",
        name: "Lagrange",
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
