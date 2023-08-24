const search = (item, keyword) => { 
    let values = Object.values(item)
    let process = values.filter((el) => ![null, undefined, false].includes(el)).map((el) => {
        let to_string = el.toString().toLowerCase()
        return to_string.includes(keyword)
    })
    return process.includes(true)
}

export default {

    search,
}