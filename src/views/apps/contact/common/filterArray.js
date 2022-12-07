const filterArray = (filter, data) => {
    let newArr = [...data];
    for (let key in filter) {
        if (filter[key]) {
            newArr = newArr.filter(item =>
                item[key].toString().toUpperCase().includes(
                    filter[key].toString().toUpperCase()
                )
            )
        }
    }
    return newArr;
}

export default filterArray;