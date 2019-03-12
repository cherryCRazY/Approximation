export const tools = data => {
    const sum = arr => round(arr.reduce((acc, el) => acc + el, 0));

    const xPow = pow => xArr.map(x => x ** pow);
    const round = n => Math.round(n * 10000) / 10000;

    const length = data.length;

    const xArr = data.map(point => +point.x);
    const yArr = data.map(point => +point.y);

    const xSum = sum(xArr);
    const ySum = sum(yArr);
    const xySum = sum(data.map(point => point.x * point.y));
    const x2ySum = sum(data.map(point => point.x ** 2 * point.y));

    const x2Sum = sum(xPow(2));
    const x3Sum = sum(xPow(3));
    const x4Sum = sum(xPow(4));

    const newYValue = (fn, arr = xArr) => arr.map(fn);

    return {
        length,
        round,
        sum,
        xArr,
        yArr,
        xSum,
        ySum,
        xySum,
        x2ySum,
        x2Sum,
        x3Sum,
        x4Sum,
        newYValue
    };
};
