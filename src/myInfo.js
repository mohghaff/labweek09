function MyInfo(props) {
  return (
    <>
      <h1>Welcome to Full Stack Development - I </h1>
      <h2>React JS Programming Week 09 Lab Exercise</h2>
      <h3>{props.id}</h3>
      <h4>
        {props.fname} {props.lname}
      </h4>
      <h5>
        {props.college}, {props.city}
      </h5>
    </>
  );
}

export default MyInfo;
