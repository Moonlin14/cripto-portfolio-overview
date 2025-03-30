import { FC, useState } from "react";
import { requestData } from "../app/action";
import { CurrencieItem } from "./CurrencieItem";

interface modalProps {
  active: boolean,
  setActive: (arg: boolean) => void,
  currencies: requestData[]
}

export interface currencieItem {
  currencie: string,
  fixedPrice: string
}

export const Modal: FC<modalProps> = ({ active, setActive, currencies }) => {
  const [currencie, setCurrencie] = useState<currencieItem | null>(null);

  if(active === false) {
    return null;
  }  

  return (
      <div className="h-screen w-screen bg-black/40 fixed inset-0 flex items-center justify-center" onClick={() => setActive(false)}>
        <div className="p-10 rounded-3xl bg-white flex flex-col gap-5 max-h-fit w-96" onClick={(e) => e.stopPropagation()}>
          <input type="text" placeholder="Поиск валюты"
          className="border-b-1 border-solid focus:outline-none pb-1.5"
          />
          <div className="overflow-y-scroll p-4 mb-5 max-h-48">
            <ul>
              {currencies.map((item) => <CurrencieItem symbol={item.symbol} bidPrice={item.bidPrice} priceChangePercent={item.priceChangePercent} set={setCurrencie} key={item.symbol}/>)}
            </ul>
          </div>
          { currencie && (
            <>
              <div className="flex gap-5 justify-center">
                <div>{currencie.currencie}</div>
                <div>{currencie.fixedPrice}</div>
              </div>
              <input type="number" placeholder="Количество"
              className="border-b-1 border-solid focus:outline-none pb-1.5 w-full" />
              <div className="flex justify-center gap-3">
                <button className="bg-[#FF5555] text-white rounded-4xl px-6 py-3 ease-in duration-150 text-lg hover:bg-[#D75555]">добавить</button>
                <button className="bg-[#FF5555] text-white rounded-4xl px-6 py-3 ease-in duration-150 text-lg hover:bg-[#D75555]">отмена</button>
              </div>
            </>
          )}
        </div>
      </div>
    )
}