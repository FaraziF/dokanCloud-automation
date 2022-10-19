module.exports = function (envVariable: any) {
    return process.env[`${process.env.TESTING_ENV}_${envVariable}`]
}