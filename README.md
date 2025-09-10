This repo was created for debugging an issue with useChat onData when using a shared context.

### Issue

The onData of a useChat hook within the chat-input does not trigger as expected. The onData of the Chat class in the shared context is triggered. The implication is that [ephemeral data parts](https://ai-sdk.dev/docs/ai-sdk-ui/streaming-data#transient-data-parts-ephemeral) cannot be consumed via onData where the useChat hook is used.

We have two console logs, but only see the one arising from the chat-context.tsx. Removing the onData from chat-context does not resolve the issue. 

### Replication

1. Add openai key to .env.local
2. Install depedencies (pnpm dev)
3. Ask 'Weather in Sydney' to trigger the tool call with data messages

### Repo setup

It uses the following resources:

- [Template repo for shared context components](https://github.com/vercel/ai/tree/main/examples/next-openai/app/use-chat-shared-context)
- [Template repo for data parts (for route)](https://github.com/vercel/ai/blob/main/examples/next-openai/app/api/use-chat-data-ui-parts/route.ts)

### Example
<img width="1496" height="807" alt="image" src="https://github.com/user-attachments/assets/2cbcbb24-0d4f-4f1d-8fcf-59ef43327fae" />
