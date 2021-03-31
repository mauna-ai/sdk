test("predictNextTurn API", async () => {
  const history = [
    "Hi. Welcome to pizza hut.",
    "I want to order a pizza.",
    "What size would you like?",
    "What sizes are available?"
  ];

  const alternatives = [
    "Sorry but that's not on our menu",
    "We have small, medium and large sizes available",
    "I have added this to your cart"
  ];

  const { result } = await client.api.predictNextTurn({ history, alternatives });

  const sorted = result.sort((a, b) => a.confidence - b.confidence);
  const predicted = sorted[sorted.length-1];

  expect(predicted.nextTurn).toEqual(alternatives[1]);
});


