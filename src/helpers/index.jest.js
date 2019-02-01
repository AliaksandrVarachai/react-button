const helpers = requre('./index');

test('initializes counter with 42', () => {
  helpers.setCounter(42);
  expect(helpers.getCounter()).toBe(42);
});
