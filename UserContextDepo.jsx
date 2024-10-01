import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode"; // default import
import { isPast } from "date-fns";

export const UserContext = createContext(); //UserContext context'in kendisi

export const UserContextDepo = ({ children }) => {
  //bu component kısmı, bunu app.jsx'te browser router gibi kullandık işimiz onunla bitti
  const token = localStorage.getItem("kiwitter_user");

  let initialUser = null;

  if (token) {
    const decodedUser = jwtDecode(token);
    const gecmisMi = isPast(new Date(decodedUser.exp * 1000));

    if (gecmisMi) {
      localStorage.removeItem("kiwitter_user"); //son kullanma tarihi geçtiyse silecek
    } else {
      initialUser = decodedUser;
    }
  }

  const [user, setUser] = useState(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
