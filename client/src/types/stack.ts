import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { screens } from "../screens/config";

type RootStackParamList = {
  [key in keyof typeof screens]: Omit<
    React.ComponentProps<(typeof screens)[key]>,
    "navigation"
  >;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type PropsWithNavigation<K extends keyof RootStackParamList, T = {}> = {
  navigation: RootStackNavigationProp<K>;
} & T;
