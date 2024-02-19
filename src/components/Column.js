function Column(props) {
  const { title, content } = props;

  return (
    <div className="Column">
      <h2 className="Column__Heading">{title}</h2>
      <p className="Column__Para">{content}</p>
    </div>
  );
}

export default Column;
