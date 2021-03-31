const FIXED_CATEGORIES = ["xAttr", "xEffect", "xIntent", "xWant"].sort();

test("commonsense reasoning API", async () => {
  const text = "Today is a wonderful day";
  const { result } = await client.api.commonsenseReasoning({ text });
  const resultCategories = result.map(({ category }) => category);

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toEqual(FIXED_CATEGORIES.length);
  expect(resultCategories.sort()).toEqual(FIXED_CATEGORIES);
});
