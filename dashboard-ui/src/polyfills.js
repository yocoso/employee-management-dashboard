if (!Object.hasOwn) {
    Object.hasOwn = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
}