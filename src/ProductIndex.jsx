import  {Product}  from "./Product";

function ProductIndex(){
    // let options = ["Hi-Durable", "Long Lating Battery", "Premium Quality"];
    let options2 = {a: "Broken", b:"cheap"};
    return(
    <>
    <Product title="Phone" price={200} features={["fast", "reliable"]} features2={options2.a}/>
    <Product title="Laptop" price={500} features={["baterry-700mh", "premium"]} features2={options2.b}/>
    <Product title="PC" price={700} features={["High Performance", "High GPU"]} features2={options2.a}/>
    <Product title="PC" price={600} features={["High Performance", "High GPU"]} features2={options2.b}/>
    </>
)};

export default ProductIndex;