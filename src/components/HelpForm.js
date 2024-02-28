const HelpForm = ({ data }) => {
  const { description, items } = data;

  return (
    <div className="HelpForm__Container">
      <p className="HelpForm__Description">{description}</p>

      <div className="HelpForm__Content">
        {items &&
          items.map((item) => (
            <div className="HelpForm__ContentText">
              <div className="HelpForm__TextContainer">
                <p>{item.name}</p>
                <p>{item.para}</p>
              </div>

              <p className="HelpForm__TextDetails">{item.things}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HelpForm;
