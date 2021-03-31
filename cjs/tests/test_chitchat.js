test("chitchat API", async () => {
  const input = "Hi there";
  const history = [];
  const { result: { reply } } = await client.api.chitchat({ input, history });

  expect(reply).toBeDefined();
});
