import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import Login from "./Login";
import Signup from "./Signup";
import { UserContextDepo } from "./UserContextDepo";
import PrivateRoute from "./PrivateRoute";
import Twit from "./Twit";
import MainPage from "./MainPage";
import UserTweets from "./UserTweets";
import TweetDetail from "./TweetDetail";

function App() {
  //kullanıcı ilk sayfaya geldiğinde yani login olurken buradan usercontextdepo'ya girecek. aynı browser router gibi
  return (
    <div>
      <UserContextDepo>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/" exact>
            {/* /?variant=most_liked */}
            <MainPage />
          </Route>

          <Route path="/profile/:nickname">
            <UserTweets />
          </Route>

          <PrivateRoute path="/detail/:twitId">
            <TweetDetail />
          </PrivateRoute>
        </Switch>
      </UserContextDepo>
    </div>
  );
}

export default App;
