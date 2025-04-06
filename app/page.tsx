import { Header } from "@/components/Header";

export interface streamData {
  stream: string,
  data: {
    e: string,
    E: number,
    s: string,
    p: string,
    w: string
  }
}

export default function Home() {
  const ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=paxusdt@ticker');

  return (
    <div className="h-screen p-10.5 flex flex-col">
      <Header />
      <main className="flex items-center justify-center h-full">
        {<div className="text-3xl">Нет активов в вашем портфеле. Добавьте что-нибудь, чтобы начать!</div>}
      </main>
    </div>
  );
}
