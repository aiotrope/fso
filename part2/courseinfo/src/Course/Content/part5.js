const Part5 = ({ id, name, exercises }) => {
    return (
      <p key={id}>
        {name} {exercises}
      </p>
    );
  };
  
  export default Part5;
  