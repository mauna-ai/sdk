test("conceptnet grounding API", async () => {
  const text = "Today is a wonderful day";
  const relations = ["CapableOf"];
  const { result } = await client.api.conceptnetGrounding({ text, relations });

  const resultRelations = result.map(({ relation }) => relation);

  expect(Array.isArray(result)).toBe(true);
  expect(resultRelations).toEqual(relations);
});

