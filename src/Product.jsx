import "./Product.css"

function Product({title, price=1000, feature1 = [], feature2= {}}) {
    // let list = feature1.map((feature1)=><li>{feature1}</li>);
    let isDiscount = price >= 30000; 
    let styles = {backgroundColor: isDiscount ? "red" : null};

    return(
    <div className="Product" style={styles}>
        <h3>{title}</h3>
        <h5>Price: {price}</h5>
        {isDiscount ? <p>Discount of 5%</p> : null}
        {/* <p>{feature1.map((feature1)=><li>{feature1}</li>)}</p>
        <p>{feature2.b}</p> */}
    </div>
    );
}

export default Product;