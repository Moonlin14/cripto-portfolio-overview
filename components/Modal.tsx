import { FC, useState } from "react";
import { request } from "../app/action";
import { requestData } from "../app/action";

interface modalProps {
  active: boolean,
  setActive: (arg: boolean) => void
}

export const Modal: FC<modalProps> = ({ active, setActive }) => {
  const [currencies, setCurrencies] = useState<requestData[]>([]);
  
  if(active === false) {
    return null;
  }  

  const handleSearch = async () => {
    const currencies = await request();
    const maped = currencies.map((item) => item.symbol = item.symbol.slice(0, -4))
    setCurrencies([...maped]);
  }

  handleSearch();
  
  return (
      <div className="h-screen w-screen bg-black/40 fixed inset-0 flex items-center justify-center" onClick={() => setActive(false)}>
        <div className="p-10 rounded-3xl bg-white flex flex-col gap-5 h-96 w-96">
          <input type="text" value="Поиск валюты"
          className="border-b-1 text-gray-500"
          />
          <div className="overflow-y-scroll">
            <ul>
              {currencies.map((item) => <li>{item.symbol}</li>)}
            </ul>
          </div>
        </div>
      </div>
    )
}