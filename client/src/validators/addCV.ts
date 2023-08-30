import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Schema, object, string } from "yup";

export const useAddCVValidationSchema = () => {
  const { t } = useTranslation();

  const validationSchema = useMemo<Schema<{ name: string }>>(
    () =>
      object().shape({
        name: string()
          .required(t("validations.required"))
          .min(2, t("validations.min").replace("?", "2"))
          .max(50, t("validations.max").replace("?", "50")),
      }),
    [t]
  );

  return validationSchema;
};
