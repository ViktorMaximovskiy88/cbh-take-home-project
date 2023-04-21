const crypto = require('crypto');

/**
 * Separate the hashing functionality into a separate function for easier reading and testing.
 * @param {string} input - The string to hash
 * @returns {string} - Returns the input's hex hash string.
 */
function hash(input) {
  if(input == undefined) input = "";
  return crypto.createHash("sha3-512").update(input).digest("hex");
}
/**
 * For a given event, this function generates a deterministic partition key.
 *
 * @param {object} evt - The event for which a partition key should be generated.
 * @returns {string} - The partition key that was generated.
 */
function deterministicPartitionKey(evt) {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  
  //?. and ?? operators are called the optional chaining operator and nullish coalescing operator.
  //recently added in ES2020
  let candidate = evt?.partitionKey ?? hash(JSON.stringify(evt)) ?? TRIVIAL_PARTITION_KEY;
  
  candidate = candidate.toString();
  candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? hash(candidate): candidate;
  return candidate;
}


module.exports = deterministicPartitionKey;