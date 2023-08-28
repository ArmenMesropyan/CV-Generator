import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Schema, object, ref, string } from "yup";
import { RegisterRequestModel } from "../models/request/RegisterRequestModel";
import { regexLibrary } from "./regexLibrary";

export const useRegisterValidationSchema = () => {
  const { t } = useTranslation();

  const validationSchema = useMemo<Schema<RegisterRequestModel>>(
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
        confirm_password: string()
          .required(t("validation.reqired"))
          .oneOf([ref("password")], t("validation.passwordsMatch")),
      }),
    [t]
  );

  return validationSchema;
};
