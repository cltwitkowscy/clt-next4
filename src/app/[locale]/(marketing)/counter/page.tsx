import {Suspense} from "react";
import {useTranslations} from "next-intl";
import {CurrentCount} from "@/components/CurrentCount";

export default function Counter() {
  const t = useTranslations("Counter");
  return (
    <>
      <Suspense fallback={<p>{t("loading_counter")}</p>}>
        <CurrentCount value={0} />
      </Suspense>
      <p>{t("security_powered_by")} Next.js</p>
    </>
  );
}
