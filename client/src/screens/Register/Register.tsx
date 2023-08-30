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
import { RegisterRequestModel } from "../../models";
import { useRegisterMutation } from "../../store/services/auth";
import { userSlice } from "../../store/slices";
import { PropsWithNavigation } from "../../types";
import { CustomErrors, RequestError } from "../../types/error";
import { useRegisterValidationSchema } from "../../validators";

const initialValues: RegisterRequestModel = {
  username: "",
  password: "",
  confirm_password: "",
};

const Login: FC<PropsWithNavigation<"Register">> = ({ navigation }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const validationSchema = useRegisterValidationSchema();

  const [register, { data, error, isLoading }] = useRegisterMutation();

  const errorTexts = useMemo<Record<string, string>>(
    () => ({
      [CustomErrors.AlreadyExists]: t("userAlreadyExist"),
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
          !isLoading && register(data);
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
              style={{ marginBottom: 20 }}
            />

            <InputField
              label={t("confirmPassword")}
              component={PasswordInput}
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
    </AuthUIWrapper>
  );
};

export default Login;
