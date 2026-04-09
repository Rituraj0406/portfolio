export const splitTwoLines = (text) => {
  const words = text.split(" ");

  return (
    <>
      {words[0]}
      <br />
      {words.slice(1).join(" ")}
    </>
  );
};