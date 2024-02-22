const HelpForm = ({ data }) => {
  const {
    description,
    name1,
    name2,
    name3,
    para,
    para2,
    para3,
    things,
    things2,
    things3,
  } = data;
  // const description = props.data.description

  return (
    <div className="HelpForm__Container">
      <p className="HelpForm__Description">{description}</p>

      <div className="HelpForm__Content">
        <div>
          <div>
            <p>{name1}</p>
            <p>{para}</p>
          </div>

          <p>{things}</p>
        </div>

        <div>
          <div>
            <p>{name2}</p>
            <p>{para2}</p>
          </div>
          <p>{things2}</p>
        </div>
        <div>
          <div>
            <p>{name3}</p>
            <p>{para3}</p>
          </div>

          <div>
            <p>{things3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
