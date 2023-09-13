import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;

  //   children özel bir isimdir.
  //  Açılış ve kapanış etiketi arasındaki içerik props.children da mevcut olacak
}

export default Card;
