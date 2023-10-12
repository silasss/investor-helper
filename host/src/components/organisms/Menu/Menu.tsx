import Link from "next/link";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { selectUserLogged } from "@/reducers/user/user.selectors";
import { fetchUserLogged } from "@/reducers/user/user.actions";

const Menu = () => {
  const dispatch = useAppDispatch()

  const user = useAppSelector(selectUserLogged)

  useEffect(() => {
    dispatch(fetchUserLogged())
  }, [dispatch])

  return <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link href="/wallet">Wallet</Link>
    </li>
    {user && (
      <li>
        Olá, {user?.name}
      </li>)
    }
  </ul>
}

export default Menu;
