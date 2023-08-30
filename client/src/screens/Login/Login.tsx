import { Button, ProgressBar, Text } from "@ui-kitten/components";
import { Formik } from "formik";
import React, { FC, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import {
  AuthUIWrapper,
  InputField,
  Logo,
  PasswordInput,
} from "../../components";
import { LoginRequestModel } from "../../models";
import { useLoginMutation } from "../../store/services/auth";
import { userSlice } from "../../store/slices";
import { PropsWithNavigation } from "../../types";
import { CustomErrors, RequestError } from "../../types/error";
import { useLoginValidationSchema } from "../../validators";

const initialValues: LoginRequestModel = {
  username: "",
  password: "",
};

const Login: FC<PropsWithNavigation<"Login">> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const validationSchema = useLoginValidationSchema();

  const [login, { data, error, isLoading }] = useLoginMutation();

  const errorTexts = useMemo<Record<string, string>>(
    () => ({
      [CustomErrors.InvalidCredentials]: t("invalidCredentials"),
    }),
    []
  );

  useEffect(() => {
    if (!data) return;

    dispatch(userSlice.actions.addUser(data));
    navigation.reset({
      index: 0,
      routes: [{ name: "CVList" }],
    });
  }, [data]);

  return (
    <AuthUIWrapper>
      <View style={{ marginBottom: 30 }}>
        <Logo style={{ marginBottom: 10 }} />

        {isLoading && <ProgressBar />}

        {error && !isLoading && (
          <Text status="danger">
            {errorTexts[(error as RequestError).data.status_code] || ""}
          </Text>
        )}
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          !isLoading && login(data);
        }}
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
              component={PasswordInput}
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
    </AuthUIWrapper>
  );
};

export default Login;
