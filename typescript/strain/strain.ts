export function keep<T>(array: Array<T>, predicate: (e: T) => boolean): Array<T> {
    return array.filter((element) => predicate(element));
}

export function discard<T>(array: Array<T>, predicate: (e: T) => boolean): Array<T> {
    return array.filter((element) => !predicate(element));
}