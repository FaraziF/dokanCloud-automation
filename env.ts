module.exports = function (envVariable: string) {
    return process.env[`${process.env.TESTING_ENV}_${envVariable}`]
}