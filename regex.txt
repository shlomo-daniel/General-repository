const passwordRegex = /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{8,20})/;
const phoneRegex = /0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/;
const webRegex = /(http?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
const classCodeRegex = /^[WD]{1}[0-9]{6}[MER]{1,2}$/;
const objectIdRegex = /^[0-9a-fA-F]{24}$/;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
export { passwordRegex, phoneRegex, webRegex, classCodeRegex, objectIdRegex, emailRegex };