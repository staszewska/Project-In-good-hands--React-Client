function Column(props) {
  const { number, title, content } = props;

  return (
    <div className="Column">
      <p className="Column__Number">{number}</p>
      <h2 className="Column__Heading">{title}</h2>
      <p className="Column__Para">{content}</p>
    </div>
  );
}

export default Column;
