const Job = (props) => {
  console.log("props job = " + props);

  return (
    <>
      <div className={`job-card ${props.className}`}>
        <h2>{props.title}</h2>
        <div className="job-details">
          <p>{props.contractType}</p>
          <p>- {props.country}</p>
          <p>- {props.city}</p>
        </div>
      </div>
    </>
  );
};

export default Job;
