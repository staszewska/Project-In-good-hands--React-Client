import Column from "./Column";

const ThreeColumns = () => {
  return (
    <section className="ThreeColumns">
      <div className="ThreeColumns__ColumnContainer">
        <Column title="Title 1" content="Content 1" />
      </div>

      <div className="ThreeColumns__ColumnContainer">
        <Column title="Title 2" content="Content 2" />
      </div>
      <div className="ThreeColumns__ColumnContainer">
        <Column title="Title 3" content="Content 3" />
      </div>
    </section>
  );
};

export default ThreeColumns;
