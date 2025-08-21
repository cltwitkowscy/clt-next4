import { Suspense } from "react";
import CurrentCount from "@/components/CurrentCount";
import { getTranslations } from "next-intl/server";

export default async function Counter() {
  const t = await getTranslations();

  return (
    <>
      <Suspense fallback={<p>{t("Counter.loading_counter")}</p>}>
        <CurrentCount value={0} />
      </Suspense>
      <p>{t("Counter.security_powered_by")} Next-Intl</p>
    </>
  );
}
