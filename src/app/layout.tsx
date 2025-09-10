// https://github.com/vercel/ai/tree/main/examples/next-openai/app/use-chat-shared-context
import { ChatProvider } from './chat-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="en">
    <body>
    <ChatProvider>{children}</ChatProvider>;
    </body>
  </html>
  )
}