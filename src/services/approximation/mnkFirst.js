export const mnkFirst = ({
    xArr,
    xSum,
    ySum,
    xySum,
    x2Sum,
    round,
    length,
    newYValue
}) => {
    const A = round(
        (length * xySum - xSum * ySum) / (length * x2Sum - xSum ** 2)
    );
    const B = round((ySum - A * xSum) / length);

    console.table({ A, B });

    const findY = ((a, b) => {
        return x => round(a * x + b);
    })(A, B);

    const line = newYValue(findY);

    return { x: xArr, y: line, A, B };
};
