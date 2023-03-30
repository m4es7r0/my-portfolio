import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import style from "./Button.module.scss";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className={style.button}>
      <>
        {children}
        <span className="ml-[10px]">➜</span>
      </>
    </button>
  );
};

export const FilButton: FC<
  PropsWithChildren<React.ComponentPropsWithRef<"button">>
> = (props) => {
  return (
    <button className={`${style.fillButton}`} {...props}>
      {props.children}
    </button>
  );
};
