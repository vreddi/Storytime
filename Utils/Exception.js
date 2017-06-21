const Exception = {
    InvalidStoryException: (message) => {
        return new Exp('InvalidStoryException', message);
    },
    NullReferenceException: (message) => {
        return new Exp('NullReferenceException', message)
    },
    InvalidTypeException: (message) => {
        return new Exp('InvalidTypeException', message)
    }
}

function Exp(name, message) {
    this.name = name;
    this.message = this.name + ': ' + message;
}

module.exports = Exception;
