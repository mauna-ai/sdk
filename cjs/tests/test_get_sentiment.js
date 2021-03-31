test("sentiment analysis API", async () => {
  const text = "Today is a wonderful day";
  const { result: { sentiment } } = await client.api.getSentiment({ text });

  expect(typeof sentiment).toBe("number");
});
