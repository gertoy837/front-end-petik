import Counter from "../Counter/Counter";
import Hero from "../Hero/Hero";
import Movies from "../Movies/Movies";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      <Hero />
      <Movies />
      <Counter />
    </div>
  );
};

export default Main;
