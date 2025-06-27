import { GoogleOAuthProvider } from "@react-oauth/google";

// components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const clientId =
    "383202512806-12ktdtttnbo86o7365mg0b97rco8gt4n.apps.googleusercontent.com";
  return (
    <ErrorBoundary>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </ErrorBoundary>
  );
}

export default App;
