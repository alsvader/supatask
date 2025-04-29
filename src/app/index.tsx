import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import { AuthProvider } from "@/components";
import AppRouter from "./router";

function App() {
  return (
    <AuthProvider>
      <ReactNotifications />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
