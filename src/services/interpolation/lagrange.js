
export const lagrange = (x, { xArr, yArr, length }) => {
    let lagrangePol = 0;

    for (let i = 0; i < length; i++) {
        let basicsPol = 1;

        for (let j = 0; j < length; j++) {
            if (j !== i) {
                basicsPol *= (x - xArr[j]) / (xArr[i] - xArr[j]);
            }
        }
        lagrangePol += basicsPol * yArr[i];
    }
    return { lagrangePol, xArr, yArr };
};
