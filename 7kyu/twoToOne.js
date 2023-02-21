// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => {
  // Kata wording is poor. Made it seem that we should compare strings instead of combining
  const combined = s1 + s2;
  return combined.split('').sort().filter((a, i, s) => s.indexOf(a) === i).join('')
};