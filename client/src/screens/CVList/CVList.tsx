import { ButtonProps, Spinner } from "@ui-kitten/components";
import React, { FC, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import {
  CVItem,
  EmptyResult,
  PageTopWrapper,
  PageWrapper,
} from "../../components";
import { AddCVContainer } from "../../containers";
import { withAuthGuard } from "../../hoc";
import { useGetCVSQuery } from "../../store/services";
import { PropsWithNavigation } from "../../types";

const CVList: FC<PropsWithNavigation<"CVList">> = ({ navigation }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  const { data: cvList, isLoading } = useGetCVSQuery();

  const { t } = useTranslation();

  const closeAddModal = useCallback(() => setShowAddModal(false), []);

  const buttonProps = useMemo<ButtonProps>(
    () => ({
      children: t("add"),
      onPress: () => setShowAddModal(true),
    }),
    [t]
  );

  return (
    <PageWrapper>
      <PageTopWrapper title={t("yourCvs")} buttonProps={buttonProps}>
        <AddCVContainer
          closeAddModal={closeAddModal}
          showAddModal={showAddModal}
        />
      </PageTopWrapper>

      {cvList?.length ? (
        <ScrollView style={{ height: "60%" }}>
          {cvList.map((cv) => (
            <CVItem
              navigation={navigation}
              key={cv.id}
              id={cv.id}
              name={cv.name}
            />
          ))}
        </ScrollView>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <EmptyResult>{t("noCVAdded")}</EmptyResult>
      )}
    </PageWrapper>
  );
};

export default withAuthGuard(CVList);
