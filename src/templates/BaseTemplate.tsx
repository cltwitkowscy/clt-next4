import React from "react";
import {useTranslations} from "next-intl";

import BaseTemplate from '@/templates/BaseTemplate';
  const t = useTranslations("BaseTemplate");
  return (
    <div className="space-y-4">
      <h2 className="text-xl">{t("description")}</h2>
      {children}
      <footer>
        {t.rich("made_with", { strong: (chunks) => <strong>{chunks}</strong> })}
      </footer>
    </div>
  );
}
