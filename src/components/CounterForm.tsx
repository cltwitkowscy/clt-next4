"use client";
import React from "react";
import {useTranslations} from "next-intl";

export default function CounterForm() {
  const t = useTranslations("CounterForm");
  return (
    <form className="space-y-3">
      <p>{t("presentation")}</p>
      <label className="block">
        <span className="mr-2">{t("label_increment")}</span>
        <input type="number" min={1} max={10} className="border px-2 py-1" />
      </label>
      <div role="alert" className="text-red-600">
        {t("error_increment_range")}
      </div>
      <button type="submit" className="border px-3 py-1">
        {t("button_increment")}
      </button>
    </form>
  );
}
