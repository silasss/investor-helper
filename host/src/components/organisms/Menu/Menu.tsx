import Link from "next/link";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUserLogged } from "shared";
import { fetchUserLogged } from "shared";

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
    {user && (
      <li>
        Olá, {user?.name}
      </li>)
    }
  </ul>
}

export default Menu;
