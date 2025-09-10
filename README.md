This repo was created for debugging an issue with useChat onData when using a shared context.

### Issue

The onData of a useChat hook is never triggered. The onData of the Chat class is triggered. The implication is that [ephemeral data parts](https://ai-sdk.dev/docs/ai-sdk-ui/streaming-data#transient-data-parts-ephemeral) cannot be consumed where the useChat hook is used.

In this repo this is represented by console logs in the chat context (using chat class) and chat input (useChat).

Expectation: That useChat's onData would be triggered when there is a data message. That both console messages (chat context + chat input) would be logged.

### Replication

1. Add openai key to .env.local
2. Install depedencies (pnpm dev)
3. Ask 'Weather in Sydney' to trigger the tool call with data messages

### Repo setup

It uses the following resources:

- [Template repo for shared context components](https://github.com/vercel/ai/tree/main/examples/next-openai/app/use-chat-shared-context)
- [Template repo for data parts (for route)](https://github.com/vercel/ai/blob/main/examples/next-openai/app/api/use-chat-data-ui-parts/route.ts)
