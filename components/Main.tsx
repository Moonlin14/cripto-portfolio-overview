'use client'

import { FC } from "react";

export const Main: FC = () => {

    
  return (
    <div className="flex flex-row justify-between w-full">
      <span>Актив</span>
      <span>Количество</span>
      <span>Цена</span>
      <span>Общая стоимость</span>
      <span>Изм. за 24 ч.</span>
      <span>% портфеля</span>
      <div>
        <ul>
        </ul>
      </div>
    </div>
  )
}