import { useAuth } from "../../hooks/useAuth";

export default function HomeDashboard() {
  const { logout, user } = useAuth();
  
  return (
    <div>
      <h1>Dashboard, { user.email }</h1>
      <button type="button" onClick={() => logout()}>Logout</button>
    </div>
  )
}
