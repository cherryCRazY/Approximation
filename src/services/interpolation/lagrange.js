import { tools } from "../tools";

export const lagrange = (x, points) => {
    let lagrangePol = 0;
    const { xArr, yArr, length } = tools(points);

    for (let i = 0; i < length; i++) {
        let basicsPol = 1;

        for (let j = 0; j < length; j++) {
            if (j !== i) {
                basicsPol *= (x - xArr[j]) / (xArr[i] - xArr[j]);
            }
        }
        lagrangePol += basicsPol * yArr[i];
    }
    return lagrangePol;
};
