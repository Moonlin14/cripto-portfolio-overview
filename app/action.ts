export interface requestData {
  symbol: string,
  bidPrice: string,
  priceChangePercent: string
}

export const request = async (): Promise<requestData[]> => {
  const res = await fetch('https://api.binance.com/api/v3/ticker/24hr');
  const data = await res.json();
  const result: [requestData] = data.filter(({ symbol }: { symbol: string; }) => symbol.endsWith('USDT'));
  return result.slice(0, 50);
}
