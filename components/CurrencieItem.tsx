import { FC } from "react";

interface itemProps {
  symbol: string,
  bidPrice: string,
  priceChangePercent: string
}

export const CurrencieItem: FC<itemProps> = (data) => {
  const currencie = data.symbol.slice(0, -4);
  const fixedPrice = `$${Number(data.bidPrice).toFixed(5)}`;
  const fixedPercent = Number(data.priceChangePercent).toFixed(2);
  
  return (
    <li className="flex flex-row justify-between">
      <div>{currencie}</div>
      <div>{fixedPrice}</div>
      <div className={fixedPercent[0] === '-' ? 'text-red-500' : 'text-green-500'}>{fixedPercent}</div>
    </li>
  )
}