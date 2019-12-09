import sum from "@App/app";
test("adds 1 + 2 to equal 3", function () {
    expect(sum(1, 2)).toBe(3);
});
test("adds 2 + 3 to equal 6", function () {
    expect(sum(2, 3)).toBe(6);
});
