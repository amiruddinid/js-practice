import { useAuth } from "../../hooks/useAuth";

export default function HomeDashboard() {
  const { logout } = useAuth();
  
  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={() => logout()}>Logout</button>
    </div>
  )
}
