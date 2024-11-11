import Job from "./Job";

const Jobs = (props) => {
  console.log("props jobs = " + props);
  return (
    <>
      <Job
        ClassName="job-card"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Autralia"
        city="Sydney"
      />
    </>
  );
};

export default Jobs;
