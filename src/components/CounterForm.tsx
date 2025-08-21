"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function CounterForm() {
  const t = useTranslations();
  const [value, setValue] = useState(0);
  const [inc, setInc] = useState(1);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inc < 1 || inc > 1000) {
      alert(t("CounterForm.error_increment_range"));
      return;
    }
    setValue((v) => v + inc);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>{t("CounterForm.presentation")}</p>

      <label>
        {t("CounterForm.label_increment")}
        <input
          type="number"
          value={inc}
          onChange={(e) => setInc(parseInt(e.target.value || "0", 10))}
          min={1}
          max={1000}
        />
      </label>

      <button type="submit">{t("CounterForm.button_increment")}</button>

      <p>Value: {value}</p>
    </form>
  );
}
