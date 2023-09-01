"use client";
import style from "./error.module.css";
import { useEffect } from "react";
import { Button } from "@/components/global/Button/Button";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={style["error-container"]}>
      <h2 className={style["error-title"]}>
        Видимо сервер не доступен в данный момент
      </h2>
      <div className={style["btn-container"]}>
        <Button
          text="Попробуйте позже"
          color="orange"
          size="lrg"
          handleClick={reset}
        />
      </div>
    </div>
  );
}
