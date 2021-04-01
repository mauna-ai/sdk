test("resolveCoreferences API", async () => {
  const text = "Trump said that he was the best President of America but his work said otherwise.";
  const { result: { coref } } = await client.api.resolveCoreferences({ text });

  expect(coref.detected).toBe(true);
});



