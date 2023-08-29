import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices";

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector(selectUser);

  if (!user) return null;

  return children;
};

export default AuthGuard;
