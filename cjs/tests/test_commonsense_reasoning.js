
test("commonsense reasoning API", async () => {
  const text = "Today is a wonderful day";
  const categories = ["xAttr", "xWant"].sort();

  const { result } = await client.api.commonsenseReasoning({ text, categories });

  const resultCategories = result.map(({ category }) => category);

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toEqual(categories.length);
  expect(resultCategories.sort()).toEqual(categories);
});
