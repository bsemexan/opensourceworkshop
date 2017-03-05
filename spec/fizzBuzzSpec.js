

describe("fizzBuzz", function() {
  it("should return 1 when 1 is passed", function() {
    expect(fizzBuzzCheck(1)).toBe("1");
  });
  it("should return 2 when 2 is passed", function() {
    expect(fizzBuzzCheck(2)).toBe("2");
  });
  it("should return Fizz when 3 is passed", function() {
    expect(fizzBuzzCheck(3)).toBe("Fizz");
  });
  it("should return Buzz when 5 is passed", function() {
    expect(fizzBuzzCheck(5)).toBe("Buzz");
  });
  it("should return Fizz when 6 is passed", function() {
    expect(fizzBuzzCheck(6)).toBe("Fizz");
  });

  it("should return Buzz when 10 is passed", function() {
    expect(fizzBuzzCheck(10)).toBe("Buzz");
  });

  it("should return FizzBuzz when 15 is passed", function() {
    expect(fizzBuzzCheck(15)).toBe("FizzBuzz");
  });
});
