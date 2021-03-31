test("matchIntent API", async () => {
  const input = "I want to order a pizza.";
  const intents = [
    "It is a great day today.",
    "I want to order a ENTITYNOUN."
  ];

  const { result: { matches } } = await client.api.matchIntent({ input, intents });

  const matchedIntents = matches.map(({ intent }) => intent);

  expect(matchedIntents).not.toContain(intents[0]);
  expect(matchedIntents).toContain(intents[1]);
});

