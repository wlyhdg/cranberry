export function parseColorObject(format, color, customA=null) {
    let result = `${format}(`
    if (format !== 'hex') {
        let {a, ...keys} = color[format] // keys: {r:..., g:..., b:...}
        if (customA) {
            a = customA
        }

        let fmtArray = format.split('') // [r, g, b]
        
        let tempArray = []

        if (format === 'rgb') {
            fmtArray.forEach(char => {
                tempArray.push(keys[char])
            })
        } else {
            let item;
            for (let i = 0; i < fmtArray.length; i++) {
                if (i === 1 || i === 2 ) {
                    item = (keys[fmtArray[i]] * 100).toFixed(2) + '%'
                } else {
                    item = +keys[fmtArray[i]]
                }
                tempArray.push(item)
            }
        }

        tempArray.push(a)

        result += tempArray.join(', ')
        result += ')'

        return result
    }

    return color[format]
}
