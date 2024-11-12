import Title from "./Title";

const Header = (props) => {
  return (
    <>
      <header>
        <Title name={props.name} />
      </header>
    </>
  );
};

export default Header;
