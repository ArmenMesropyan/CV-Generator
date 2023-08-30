import { Spinner, Text } from "@ui-kitten/components";
import { Formik } from "formik";
import React, { FC, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { ConfirmationModal, InputField } from "../../components";
import { useAddCVMutation } from "../../store/services";
import { CustomErrors, RequestError } from "../../types/error";
import { useAddCVValidationSchema } from "../../validators";

export interface AddCVContainerProps {
  showAddModal: boolean;

  closeAddModal(): void;
}

const initialValues = {
  name: "",
};

const AddCVContainer: FC<AddCVContainerProps> = ({
  showAddModal,
  closeAddModal,
}) => {
  const [addCV, { isLoading, isSuccess, error, reset }] = useAddCVMutation();

  const validationSchema = useAddCVValidationSchema();

  const { t } = useTranslation();

  const errorTexts = useMemo<Record<string, string>>(
    () => ({
      [CustomErrors.AlreadyExists]: t("nameAlreadyExists"),
    }),
    []
  );

  useEffect(() => {
    if (isSuccess) closeAddModal();
  }, [isSuccess]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(data) => {
        !isLoading && addCV(data.name);
      }}
    >
      {(form) => (
        <ConfirmationModal
          onClose={closeAddModal}
          visible={showAddModal}
          closeBtnProps={{
            children: t("close"),
          }}
          confirmBtnProps={{
            children: isLoading ? (
              <View>
                <Spinner />
              </View>
            ) : (
              t("add")
            ),
            onPress: form.submitForm,
          }}
        >
          <InputField onChangeText={reset} name="name" label={t("name")} />

          {error && (
            <Text status="danger">
              {errorTexts[(error as RequestError).data.status_code] || ""}
            </Text>
          )}
        </ConfirmationModal>
      )}
    </Formik>
  );
};

export default AddCVContainer;
