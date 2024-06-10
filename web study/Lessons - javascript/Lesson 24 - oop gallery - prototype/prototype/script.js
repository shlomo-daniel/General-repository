Array.prototype.sum = function () {
    return this.reduce((res, x) => res += x, 0)
}

Array.prototype.avarage = function () {
    return this.reduce((res, num) => res += num, 0) / this.length
}

Array.prototype.use = function () {
    this.forEach((item, index, arr) => {
        arr[index] = item + 1
    });
    return this;
}

let nums = [50, 40, 90, 60,]