import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectUserId } from "../User/user.selectors";
import { setUserId } from "../User/user.actions";
import Footer from "../Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  return (
    <>
      <main>
        <h1>Welcome to my sandbox!</h1>
        This is my sandbox{" "}
        <span onClick={() => dispatch(setUserId("👻"))}>👋</span> {userId}
      </main>
      <Footer />
    </>
  );
}

export default App;
