import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function Home() {
  


  return (
    <div className="h-screen p-10.5 flex flex-col">
      <Header />
      <main className="flex items-center justify-center h-full">
        {/* {<div className="text-3xl">Нет активов в вашем портфеле. Добавьте что-нибудь, чтобы начать!</div>} */}
        <Main />
      </main>
    </div>
  );
}
