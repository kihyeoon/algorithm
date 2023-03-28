function solution(X, Y) {
    const xCounts = new Array(10).fill(0);
    const yCounts = new Array(10).fill(0);

    for (let i = 0; i < X.length; i++) {
        xCounts[parseInt(X[i], 10)]++;
    }

    for (let i = 0; i < Y.length; i++) {
        yCounts[parseInt(Y[i], 10)]++;
    }

    let result = "";
    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(xCounts[i], yCounts[i]);
        result += i.toString().repeat(commonCount);
    }

    if (result === "") return "-1";
    if (result[0] === "0") return "0";
    return result;
}
