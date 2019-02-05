const _ = {};

/* Each */
_.each = function (list, callback) {
    // handle list of type array
    if (Array.isArray(list)) {
        list.forEach((element, index, list) => {
            callback(element, index, list)
        });
    }
    // handle list of type object 
    Object.keys(list).forEach((element, index) => {
        if (list.hasOwnProperty(element)) {
            const key = list[element];
            const handleArr = (key) => key.forEach((innerElement, index) => {
                callback(innerElement, index, key);
            });
            if (Array.isArray(key)) handleArr(key);
            else callback(key, index, list);
        }
    });
};
/* Map */
_.map = (list, callback) => {
    const results = [];
    if (Array.isArray(list)) {
        _.each(list, (element, index, list) => {
            results.push(callback(element, index, list))
        })
    } else {
        _.each(list, (element, index, list) => {
            results.push(callback(element, index, list))
        })
    }
    return results;
}

/* Filter */
_.filter = (list, callback) => {
    const results = [];
    if (Array.isArray(list)) {
        _.each(list, (element, index) => {
            if (callback(element, index, list)) {
                results.push(element)
            }
        })
    }
    return results;
}

module.exports = _;