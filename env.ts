module.exports = function (envVariable: string) {
    return process.env[`${process.env.URL}_${envVariable}`]
}