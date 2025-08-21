"use client";

import { PropsWithChildren } from "react";
import { useTranslations } from "next-intl";

type Props = PropsWithChildren<{ title?: string; subtitle?: string }>;

export default function BaseTemplate({ title, subtitle, children }: Props) {
  const t = useTranslations();

  return (
    <section>
      <h1 className="text-2xl">{title ?? "Demo"}</h1>
      <h2 className="text-xl">{subtitle ?? t("BaseTemplate.description")}</h2>
      <div>{children}</div>
      <footer>
        {t.rich("BaseTemplate.made_with", {
          strong: (chunk) => <strong>{chunk}</strong>,
        })}
      </footer>
    </section>
  );
}
