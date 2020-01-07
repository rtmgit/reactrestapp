export function encodeText(normalText) {
    return btoa(normalText);
}
export function decodeText(encodedText) {
    return atob(encodedText);
}