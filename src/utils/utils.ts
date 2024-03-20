export enum TextTransform {
  UPPERCASE = "uppercase",
  LOWERCASE = "lowercase",
  CAPITALIZE = "capitalize",
  CAPITALIZE_ALL = "capitalize-all",
}

export function transformText(text: string, transform: TextTransform) {
  switch (transform) {
    case TextTransform.UPPERCASE:
      return text.toUpperCase();
    case TextTransform.LOWERCASE:
      return text.toLowerCase();
    case TextTransform.CAPITALIZE:
      return text.charAt(0).toUpperCase() + text.slice(1);
    case TextTransform.CAPITALIZE_ALL:
      return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    default:
      return text;
  }
}
