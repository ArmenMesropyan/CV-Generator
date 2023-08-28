import { Button } from "@ui-kitten/components";
import { Formik } from "formik";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { AuthWrapper, InputField, Logo } from "../../components";
import { RegisterRequestModel } from "../../models";
import { PropsWithNavigation } from "../../types";
import { useRegisterValidationSchema } from "../../validators";

const initialValues: RegisterRequestModel = {
  username: "",
  password: "",
  confirm_password: "",
};

const Login: FC<PropsWithNavigation<"Register">> = ({ navigation }) => {
  const { t } = useTranslation();

  const validationSchema = useRegisterValidationSchema();

  return (
    <AuthWrapper>
      <Logo style={{ marginBottom: 40 }} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={console.log}
      >
        {(form) => (
          <View>
            <InputField
              label={t("username")}
              name="username"
              style={{ marginBottom: 20 }}
            />

            <InputField
              label={t("password")}
              name="password"
              style={{ marginBottom: 20 }}
            />

            <InputField
              label={t("confirmPassword")}
              name="confirm_password"
              style={{ marginBottom: 50 }}
            />

            <Button onPress={form.submitForm} style={{ marginBottom: 10 }}>
              {t("register")}
            </Button>

            <Button
              appearance="ghost"
              onPress={() => navigation.navigate("Login", {})}
            >
              {t("login")}
            </Button>
          </View>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default Login;
