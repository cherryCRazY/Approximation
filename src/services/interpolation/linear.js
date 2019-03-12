export const linear = (x, points) => {
    //? More inforamtion you can check at http://www.mathros.net.ua/linijna-interpoljacija.html

    //helper
    const round = n => Math.round(n * 10000) / 10000;

    const temp = points.map(({ x, y }) => [x, y]);

    const sortedPointArr = temp.sort((a, b) => a[0] - b[0]);
    const index = sortedPointArr.findIndex((el, index) =>
        el[0] > x ? index : false
    );

    const a =
        (sortedPointArr[index][1] - sortedPointArr[index - 1][1]) /
        (sortedPointArr[index][0] - sortedPointArr[index - 1][0]);

    const b = sortedPointArr[index - 1][1] - sortedPointArr[index - 1][0] * a;

    const F = a * x + b;

    return round(F);
};

linear(-1.3, [
    { x: -1, y: 0 },
    { x: -1.5, y: -0.7 },
    { x: -0.5, y: 0.7 },
    { x: 0.5, y: 0.7 },
    { x: 1.5, y: -0.7 },
    { x: 0, y: 1 }
]);
