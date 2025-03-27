import { FC } from "react";
import { requestData } from "../app/action";
import { CurrencieItem } from "./CurrencieItem";

interface modalProps {
  active: boolean,
  setActive: (arg: boolean) => void,
  currencies: requestData[]
}

export const Modal: FC<modalProps> = ({ active, setActive, currencies }) => {
  
  if(active === false) {
    return null;
  }  

  return (
      <div className="h-screen w-screen bg-black/40 fixed inset-0 flex items-center justify-center" onClick={() => setActive(false)}>
        <div className="p-10 rounded-3xl bg-white flex flex-col gap-5 h-96 w-96" onClick={(e) => e.stopPropagation()}>
          <input type="text" placeholder="Поиск валюты"
          className="border-b-1 border-solid focus:outline-none pb-1.5"
          />
          <div className="overflow-y-scroll">
            <ul>
              {currencies.map((item) => <CurrencieItem symbol={item.symbol} bidPrice={item.bidPrice} priceChangePercent={item.priceChangePercent} />)}
            </ul>
          </div>
        </div>
      </div>
    )
}