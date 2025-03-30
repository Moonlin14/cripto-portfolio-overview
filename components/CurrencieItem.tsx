import { FC } from "react";
import { currencieItem } from './Modal';

interface itemProps {
  symbol: string,
  bidPrice: string,
  priceChangePercent: string,
  set: (arg: currencieItem) => void
}

export const CurrencieItem: FC<itemProps> = ({ symbol, bidPrice, priceChangePercent, set }) => {
  const currencie = symbol.slice(0, -4);
  const fixedPrice = `$${Number(bidPrice).toFixed(5)}`;
  const fixedPercent = Number(priceChangePercent).toFixed(2);
  
  return (
    <li className="flex flex-row justify-between p-2 text-sm" onClick={() => set({ currencie, fixedPrice})}>
      <div>{currencie}</div>
      <div>{fixedPrice}</div>
      <div className={fixedPercent[0] === '-' ? 'text-red-500' : 'text-green-500'}>{`${fixedPercent}%`}</div>
    </li>
  )
}