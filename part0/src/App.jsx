const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };
  const Parts = (props) => {
    return (
      <div>
        {props.part} {props.exercise}
      </div>
    );
  };
  const Content = (props) => {
    return (
      <div>
        <Parts part={part1} exercise={exercises1} />
        <Parts part={part2} exercise={exercises2} />
        <Parts part={part3} exercise={exercises3} />
      </div>
    );
  };
  const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises{" "}
          {props.exercises1 + props.exercises2 + props.exercises3}
        </p>
      </div>
    );
  };
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
