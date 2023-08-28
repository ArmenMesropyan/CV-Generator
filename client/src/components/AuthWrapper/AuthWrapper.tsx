import { Layout } from "@ui-kitten/components";
import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";

const AuthWrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Layout
    style={{
      height: "100%",
    }}
  >
    <View style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      {children}
    </View>
  </Layout>
);

export default AuthWrapper;
