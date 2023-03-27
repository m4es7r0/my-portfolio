import { FC, PropsWithChildren } from "react";

import style from "./Button.module.scss";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button className={style.button}>{`${children} ➜`}</button>;
};

export const FilButton: FC<PropsWithChildren> = ({ children }) => {
  return <button className={style.fillButton}>{children}</button>;
};
