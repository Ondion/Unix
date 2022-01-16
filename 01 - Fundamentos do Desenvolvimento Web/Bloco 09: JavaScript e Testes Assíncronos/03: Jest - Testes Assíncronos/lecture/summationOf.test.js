
const summationOf = require("./summationOf");

test("the function summationOf exists", () => {
    expect(typeof summationOf).toBe("function");
});

test("summationOf 1 is 1", () => {
    expect(summationOf(1)).toBe(1);
})

test("summationOf 2 is 3", () => {
    expect(summationOf(2)).toBe(3);
});

test("summationOf 3 is 6", () => {
    expect(summationOf(3)).toBe(6);
});