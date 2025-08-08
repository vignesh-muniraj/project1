import Counter from "./Counter";

export function User({ pic, name }) {
  return (
    <div className="container">
      <img src={pic} alt={`${name} profile is not found`} />
      <p>
        Hello, <span>{name}</span>🙂‍↕️
        <Counter />
      </p>
    </div>
  );
}
