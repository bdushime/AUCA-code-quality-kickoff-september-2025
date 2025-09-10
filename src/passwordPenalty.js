/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */

export default function penaltyPoints(password) {
  if (typeof password !== "string") return 0;

  let points = 0;
  let repeatCount = 1;
  let prev = "";

  for (let char of password) {
    if (char === prev) {
      repeatCount++;
    } else {
      if (repeatCount === 2) points += 1;
      if (repeatCount >= 3) points += 2;
      repeatCount = 1;
    }
    prev = char;
  }

  if (repeatCount === 2) points += 1;
  if (repeatCount >= 3) points += 2;

  return points;
}
