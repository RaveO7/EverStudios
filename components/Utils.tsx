export function upperFirstLetter(str: string) {
    if (str == undefined) return str
    return str
        .toLowerCase()
        .replace('-', ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}