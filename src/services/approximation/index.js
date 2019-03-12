import { mnkFirst } from "./mnkFirst";
import { mnkSecond } from "./mnkSecond";
import { tools } from "../tools";

export const approData = data => {
    const points = tools(data);

    let { xArr: x, yArr: y } = points;
    const mnk1 = mnkFirst(points);
    const mnk2 = mnkSecond(points);

    let trace = {
        x,
        y,
        type: "scatter",
        mode: "markers",
        name: "Points",
        marker: { color: "red" }
    };
    let mnkFirstTrace = {
        ...mnk1,
        type: "scatter",
        mode: "line",
        name: "mnk1-1",
        marker: { color: "black" }
    };
    let mnkSecondTrace = {
        ...mnk2,
        type: "scatter",
        mode: "line",
        name: "mnk-2",
        marker: { color: "green" }
    };

    // Data is the special object to Plotly
    return {
        data: [mnkFirstTrace, mnkSecondTrace, trace],
        appro: {
            mnk1,
            mnk2
        }
    };
};
