import Column from "./Column";

const ThreeColumns = () => {
  return (
    <section className="ThreeColumns">
      <div className="ThreeColumns__ColumnContainer">
        <Column
          number="10"
          title="ODDANYCH WORKÓW"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan bibendum efficitur. Sed placerat nisl libero, at blandit lacus vestibulum in. Vivamus in luctus tortor, quis faucibus augue. Donec feugiat massa scelerisque, efficitur est vitae, commodo tortor. Morbi sit amet tincidunt nunc, et sollicitudin tortor. "
        />
      </div>

      <div className="ThreeColumns__ColumnContainer">
        <Column
          number="5"
          title="WSPARTYCH ORGANIZACJI"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan bibendum efficitur. Sed placerat nisl libero, at blandit lacus vestibulum in. Vivamus in luctus tortor, quis faucibus augue. Donec feugiat massa scelerisque, efficitur est vitae, commodo tortor. Morbi sit amet tincidunt nunc, et sollicitudin tortor. "
        />
      </div>

      <div className="ThreeColumns__ColumnContainer">
        <Column
          number="7"
          title="ZORGANIZOWANYCH ZBIÓREK"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan bibendum efficitur. Sed placerat nisl libero, at blandit lacus vestibulum in. Vivamus in luctus tortor, quis faucibus augue. Donec feugiat massa scelerisque, efficitur est vitae, commodo tortor. Morbi sit amet tincidunt nunc, et sollicitudin tortor. "
        />
      </div>
    </section>
  );
};

export default ThreeColumns;
