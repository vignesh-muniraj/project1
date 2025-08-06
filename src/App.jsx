import { BoxColor } from "./BoxColor";
import { ColorGame } from "./ColorGame";
import Counter from "./Counter";
import { MovieList } from "./MovieList";
import "./styles.css";
import UserList from "./UserList";

export default function App() {
  return (
    <div className="App">
    <BoxColor/>
    <ColorGame/>
     <Counter/>
     <UserList/>
     <MovieList/>
    </div>
  );
}
