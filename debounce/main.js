function debounce(callback, interval) {
    let timeoutId = null
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            callback.apply(null, args)
        }, interval)
    }
}