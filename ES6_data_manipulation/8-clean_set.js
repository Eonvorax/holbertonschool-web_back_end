export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  // This part is from GPT-3.5 : similar but it uses map, filter and join
  // Same principle as my original code with a for loop, but showcases the right stuff
  const result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}
