import { useStateProvider } from "../context/StateContext";

import { isEmailVerified, isLoggedIn } from "../hooks/helpers";
import redirectTo from "../hooks/redirectTo";

export default function withAuth(Component) {
  const AuthComponent = (props) => {
    const [{ userInfo }] = useStateProvider();

   return <Component {...props} userInfo={userInfo} />;
  };

  AuthComponent.getInitialProps = async (context) => {
    const isUserLoggedIn = isLoggedIn(context?.req?.headers?.cookie || "");
    const isUserVerified = isEmailVerified(context?.req?.headers?.cookie || "");

    if (!isUserLoggedIn) {
      redirectTo(`/login?redirect=${context.asPath || "/"}`, context);
    } else if (isUserLoggedIn && !isUserVerified) {
      redirectTo(`/verify?redirect=${context.asPath || "/"}`, context);
    }


    const componentProps =
      Component.getInitialProps && (await Component.getInitialProps(context));

    return {
      ...componentProps,
      user: { isLoggedIn: isUserLoggedIn, isEmailVerified: isUserVerified },
    };
  };

  return AuthComponent;
}
