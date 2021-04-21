const capString = require('./index.js');

test( "Capitalize string", () => {
    expect(capString("coca")).toBe("Coca");
});

test( "Capitalize a number", () => {
    expect(() => capString(1)).toThrow(Error);
});