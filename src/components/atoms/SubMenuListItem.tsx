export const SubMenuHeaderListItems = ({ data }) => {
  return (
    <a
      href="#"
      className={`mx-4 ${data.active ? "border-b-2 border-blue" : ""}`}
    >
      {/* className=" mx-4 hover:border-b-2 hover:border-blue"> */}

      {data.name}
    </a>
  );
};
