# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

const crypto = require('crypto');

/**
 * Separate the hashing functionality into a separate function for easier reading and testing.
 * @param {string} input - The string to hash
 * @returns {string} - Returns the input's hex hash string.
 */
function hash(input) {
  return crypto.createHash("sha3-512").update(input).digest("hex");
}
/**
 * For a given event, this function generates a deterministic partition key.
 *
 * @param {object} event - The event for which a partition key should be generated.
 * @returns {string} - The partition key that was generated.
 */
function deterministicPartitionKey(event) {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  //?. and ?? operators are called the optional chaining operator and nullish coalescing operator.
  //recently added in ES2020
  let candidate = event?.partitionKey ?? hash(JSON.stringify(event)||"") ?? TRIVIAL_PARTITION_KEY;
  
  candidate = candidate.toString();
  candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? hash(candidate): candidate;
  return candidate;
}

module.exports = deterministicPartitionKey;

Extracted the hashing functionality into a separate function for better readability and testability. 
Used optional chaining and nullish coalescing operators to simplify the code and handle undefined values. These are some of the most recent Javascript language features. 
These changes make the code easier to read and understand, as well as easier to maintain and test. 