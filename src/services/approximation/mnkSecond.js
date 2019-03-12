import invert from "./invert";
import math from "mathjs";

export const mnkSecond = ({
    length,
    minX,
    maxX,
    xSum,
    ySum,
    xySum,
    x2ySum,
    x2Sum,
    x3Sum,
    x4Sum,
    newYValue
}) => {
    const matrixA = [
        [x4Sum, x3Sum, x2Sum],
        [x3Sum, x2Sum, xSum],
        [x2Sum, xSum, length]
    ];
    const matrixB = [[x2ySum], [xySum], [ySum]];
    const coef = math.multiply(invert(matrixA), matrixB);

    const [A, B, C] = coef.flat(1);

    const parabolaArr = [];

    for (let i = minX; i <= maxX + 0.1; i += 0.1) {
        parabolaArr.push(i);
    }

    const findY = ((a, b, c) => x => a * x ** 2 + b * x + c)(A, B, C);

    console.table({ A, B, C });

    const parabola = newYValue(findY, parabolaArr);

    return { x: parabolaArr, y: parabola, A, B, C };
};
