export function check (parent, child) {
    return {
        type: "CHECK",
        parent,
        child
    }
}

export function uncheck (parent, child) {
    return {
        type: "UNCHECK",
        parent,
        child
    }
}