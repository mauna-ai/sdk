test("measureSimilarity API", async () => {
  const sentence = "I want to order a pizza.";
  const compareWith = [
    "It is a great day today.",
    "Can I have a pizza?"
  ];

  const { result: { scores } } = await client.api.measureSimilarity({ sentence, compareWith });

  const sorted = scores.sort((a, b) => a.score - b.score);
  const mostSimilar = sorted[sorted.length-1];

  expect(mostSimilar.sentencePair).toEqual([sentence, compareWith[1]]);
});

