import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { FC, PropsWithChildren, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetUserQuery } from "../../store/services";
import { selectUser, userSlice } from "../../store/slices";
import { RootStackNavigationProp } from "../../types";

const AuthWrapper: FC<PropsWithChildren> = ({ children }) => {
  const navigation = useNavigation() as RootStackNavigationProp<"Login">;

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [getUser] = useLazyGetUserQuery();

  const getUserByStorageToken = useCallback(async () => {
    const jwtToken = await AsyncStorage.getItem("jwt-token");

    if (!jwtToken) return;

    try {
      const user = await getUser(jwtToken).unwrap();

      const navState = navigation.getState();

      // If user first visited the app and authorized, replace to CVList
      if (!navState)
        navigation.reset({
          index: 0,
          routes: [{ name: "CVList" }],
        });

      dispatch(
        userSlice.actions.addUser({
          ...user,
          token: jwtToken,
        })
      );
    } catch (err) {
      navigation.navigate("Login", {});
    }
  }, []);

  useEffect(() => {
    if (user?.token) AsyncStorage.setItem("jwt-token", user.token);
  }, [user?.token]);

  useEffect(() => {
    getUserByStorageToken();
  }, []);

  return children;
};

export default AuthWrapper;
