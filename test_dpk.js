const { deterministicPartitionKey } = require("./dpk");

console.log(deterministicPartitionKey);
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});