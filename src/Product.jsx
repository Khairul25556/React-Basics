import './Product.css';

function Product({title, price=0, features, features2}) {
  let isDiscount=price>500;
  let styles = {backgroundColor: isDiscount ?  "red" : "" };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price: ${price}</h5>
      <h5>{features.map((features) => <li>{features}</li>)}</h5>
      <p>Another Features: {features2}</p>
      {isDiscount && <p>Discount of 10%</p>}
    </div>
  );
}

export { Product };
