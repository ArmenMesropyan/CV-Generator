import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Button, Layout, ProgressBar, Text } from "@ui-kitten/components";
import React, { FC, PropsWithChildren, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { storageConstants } from "../../configs";
import { selectUser, userSlice } from "../../store/slices";
import { RootStackNavigationProp } from "../../types";
import { Logo } from "../Logo";
import { styles } from "./style";

export interface PageWrapperProps {
  isLoading?: boolean;
  error?: string;
}

const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  children,
  isLoading,
  error,
}) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const { t } = useTranslation();

  const navigation = useNavigation() as RootStackNavigationProp<"Login">;

  const onLogoutBtnPress = useCallback(() => {
    AsyncStorage.removeItem(storageConstants.TOKEN);

    dispatch(userSlice.actions.logout());

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }, [dispatch, navigation]);

  return (
    <Layout style={styles.layout}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Logo style={styles.logo} />

            {user && (
              <Button
                onPress={onLogoutBtnPress}
                appearance="ghost"
                status="danger"
              >
                {t("logout")}
              </Button>
            )}
          </View>

          {isLoading && <ProgressBar />}

          {error && !isLoading && <Text status="danger">{error}</Text>}
        </View>

        {children}
      </View>
    </Layout>
  );
};

export default PageWrapper;
