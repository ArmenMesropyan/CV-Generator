import { ComponentType } from "react";
import { AuthGuard } from "../components";

const withAuthGuard = <P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P> => {
  const WithAuthGuard: React.FC<P> = (props) => (
    <AuthGuard>
      <WrappedComponent {...props} />
    </AuthGuard>
  );

  return WithAuthGuard;
};

export default withAuthGuard;
