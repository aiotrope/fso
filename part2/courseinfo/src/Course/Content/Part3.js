const Part3 = ({ id, name, exercises }) => {
  return (
    <p key={id}>
      {name} {exercises}
    </p>
  );
};

export default Part3;
