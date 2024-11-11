const Job = (props) => {
  console.log("props job = " + props);

  return (
    <>
      <div className={props.className}>
        <h2>{props.title}</h2>
        <p>{props.contractType}</p>
        <p>{props.country}</p>
        <p>{props.city}</p>
      </div>
    </>
  );
};

export default Job;
