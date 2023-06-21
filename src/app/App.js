
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import routes from "./routes";

function App() {
  const content = useRoutes(routes)
  return (
    <AuthProvider>
      {content}
    </AuthProvider>
  );
}

export default App;
