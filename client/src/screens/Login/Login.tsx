import { Button } from "@ui-kitten/components";
import { Formik } from "formik";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { AuthWrapper, InputField, Logo } from "../../components";
import { LoginRequestModel } from "../../models";
import { PropsWithNavigation } from "../../types";
import { useLoginValidationSchema } from "../../validators";

const initialValues: LoginRequestModel = {
  username: "",
  password: "",
};

const Login: FC<PropsWithNavigation<"Login">> = ({ navigation }) => {
  const { t } = useTranslation();

  const validationSchema = useLoginValidationSchema();

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
              style={{ marginBottom: 50 }}
            />

            <Button onPress={form.submitForm} style={{ marginBottom: 10 }}>
              {t("login")}
            </Button>

            <Button
              appearance="ghost"
              onPress={() => navigation.navigate("Register", {})}
            >
              {t("register")}
            </Button>
          </View>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default Login;
