function forEach(iterable, callback) {
    if (Array.isArray(iterable)) {
        for (var i = 0; i < iterable.length; i++) {
            let element = iterable[i]
            callback(element, i, iterable)
        }
    } else if (typeof(iterable) === 'object') {
        for (var key in iterable) {
            callback(iterable[key], iterable)
        }
    }
}
