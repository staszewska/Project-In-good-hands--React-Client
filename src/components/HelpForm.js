const HelpForm = ({ data }) => {
  const { description, name1, name2, name3, para, para2, para3 } = data;
  // const description = props.data.description

  return (
    <div>
      <p>{description}</p>
      <div>
        <p>{name1}</p>
        <p>{para}</p>
      </div>
      <div>
        <p>{name2}</p>
        <p>{para2}</p>
      </div>
      <div>
        <p>{name3}</p>
        <p>{para3}</p>
      </div>
    </div>
  );
};

export default HelpForm;
