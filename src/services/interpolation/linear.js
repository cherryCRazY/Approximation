export const linear = (x, points) => {
    //? More inforamtion you can check at http://www.mathros.net.ua/linijna-interpoljacija.html

    //helper
    const round = n => Math.round(n * 100000) / 100000;

    const temp = points.map(({ x, y }) => [x, y]);

    const sortedPointArr = temp.sort((a, b) => a[0] - b[0]);
    const index = sortedPointArr.findIndex((el, index) =>
        el[0] > x ? index : false
    );

    try {
        const a =
            (sortedPointArr[index][1] - sortedPointArr[index - 1][1]) /
            (sortedPointArr[index][0] - sortedPointArr[index - 1][0]);

        const b =
            sortedPointArr[index - 1][1] - sortedPointArr[index - 1][0] * a;

        const F = a * x + b;

        return round(F);
    } catch (error) {
        console.log("You must choose dot in range");
        return 0;
    }
};
