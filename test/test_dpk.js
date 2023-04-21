const deterministicPartitionKey = require("../dpk");
const assert = require('assert');

describe("deterministicPartitionKey", () => {
  it("should return the partition key if it exists", () => {
    const event = { partitionKey: "my-partition-key" };
    const result = deterministicPartitionKey(event);
    assert.strictEqual(result, "my-partition-key");
  });

  it("should return a hash of the event if no partition key is provided", () => {
    const event = { foo: "bar" };
    const result = deterministicPartitionKey(event);
    assert.strictEqual(result, "a419a15de4a65c3dba49c38b4485cd4dce1dde4d18f5b965d90f0649bef54252ec4e76dbcaa603708e8e8ebbe848ba484e81e23b7823808b5b8e5f4222d122e8");
  });
  it("should return a hash of the empty string if the event is undefined", () => {
    const result = deterministicPartitionKey();
    assert.strictEqual(result, "a69f73cca23a9ac5c8b567dc185a756e97c982164fe25859e0d1dcc1475c80a615b2123af1f5f94c11e3e9402c3ac558f500199d95b6d3e301758586281dcd26");
  });
});
