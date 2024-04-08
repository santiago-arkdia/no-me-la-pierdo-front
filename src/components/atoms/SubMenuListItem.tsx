export const SubMenuHeaderListItems = ({ data }: any) => {
  return (
    <a
      href="#"
      className={`mx-4  ${data.active ? "border-b-2 border-blue" : ""}`}
    >
      {data.name}
    </a>
  );
};
