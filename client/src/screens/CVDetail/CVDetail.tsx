import { useRoute } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { PageTopWrapper, PageWrapper } from "../../components";
import { withAuthGuard } from "../../hoc";
import { PropsWithNavigation } from "../../types";

export interface CVDetailProps {
  id: number;
  name: string;
}

const CVDetail: FC<PropsWithNavigation<"CVDetail", CVDetailProps>> = () => {
  const { id, name } = useRoute().params as CVDetailProps;

  const { t } = useTranslation();

  return (
    <PageWrapper>
      <PageTopWrapper title={name}>
        <Text>Hello!</Text>
      </PageTopWrapper>
    </PageWrapper>
  );
};

export default withAuthGuard(CVDetail);
