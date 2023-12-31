import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Schema, object, string } from "yup";
import { LoginRequestModel } from "../models";
import { regexLibrary } from "./regexLibrary";

export const useLoginValidationSchema = () => {
  const { t } = useTranslation();

  const validationSchema = useMemo<Schema<LoginRequestModel>>(
    () =>
      object().shape({
        username: string()
          .required(t("validations.required"))
          .min(2, t("validations.min").replace("?", "2"))
          .max(50, t("validations.max").replace("?", "50")),
        password: string()
          .required(t("validations.required"))
          .min(8, t("validations.min").replace("?", "8"))
          .max(16, t("validations.max").replace("?", "16"))
          .matches(regexLibrary.digit, t("validations.digit"))
          .matches(regexLibrary.uppercase, t("validations.uppercase"))
          .matches(regexLibrary.lowercase, t("validations.lowercase"))
          .matches(regexLibrary.specialChar, t("validations.specialChar")),
      }),
    [t]
  );

  return validationSchema;
};
