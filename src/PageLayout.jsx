import { useContext } from "react";
import { UserContext } from "./UserContextDepo";
import { PersonSimpleRun } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function PageLayout({ children }) {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("kiwitter_user");
    setUser(null);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 bg-white shadow-md">
        <header className="container mx-auto p-6 flex items-center justify-between">
          <h1 className="text-lg font-bold text-lime-800">KIWITTER</h1>
          {user ? (
            <div className="flex gap-2 items-center">
              <p>{user.nickname}</p>
              <button onClick={handleLogout}>
                <PersonSimpleRun size={24} />
              </button>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link to="/login">Giriş yap</Link>
              <Link to="/signup">Kayıt ol</Link>
            </div>
          )}
        </header>
      </div>
      <div className="pt-6 pb-12">
        <main className="max-w-xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
