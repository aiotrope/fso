const Parts = ({ id, name, exercises }) => {
  return (
    <>
      <p key={id}>
        {name} {exercises}
      </p>
    </>
  );
};

export default Parts;
