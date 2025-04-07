'use client'

import { FC, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { request } from "@/app/action";
import { add } from "@/slices/currenciesSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/slices";

export const Header: FC = () => {
  const [active, setActive] = useState(false);
  const  dispatch = useDispatch();
  const currencies = useSelector((state: RootState ) => state.currencies.coll);

  const fetchData = async () => {
    const currencies = await request();
    dispatch(add(currencies));
  }

  useEffect(() => {
    fetchData();
    console.log(currencies);
  }, [active])




  return (
    <div className="flex justify-between items-center max-h-fit w-full mx-auto my-0 max-w-7xl sticky">
      <h1 className="text-xl">PORTFOLIO OVERVIEW</h1>
      <button className="bg-[#FF5555] text-white rounded-4xl px-6 py-3 ease-in duration-150 text-lg hover:bg-[#D75555]"
      onClick={() => setActive(true)}
      >добавить</button>
      <Modal active={active} setActive={setActive} currencies={currencies}/>
    </div>
  )
}