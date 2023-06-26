
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import routes from "./routes";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function App() {
  const content = useRoutes(routes)
  return (
    <Provider store={store}>
      <AuthProvider>
        {content}
      </AuthProvider>
    </Provider>
  );
}

export default App;
