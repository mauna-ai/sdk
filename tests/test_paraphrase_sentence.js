test("paraphraseSentence API", async () => {
  const sentence = "I want to order a pizza.";
  const { result: { paraphrases } } = await client.api.paraphraseSentence({ sentence });

  expect(Array.isArray(paraphrases)).toBe(true);
  expect(paraphrases.length).toBe(10);
});


