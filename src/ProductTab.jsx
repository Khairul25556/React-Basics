import Product from "./Product";

function ProductTab() {
    // let options1 = ["Hi-Tech", "Optimize", "Powerful"];
    let options1 = ["Hi-Tech", "Optimize", "Powerful"];
    let options2 = {a: "Premium", b: "VIP", c: "Long-Lusting"};
    return(
        <>
            {/* <Product title="Phone" price={25000} feature1={options1} feature2={options2}/> */}
            <Product title="Phone" price={25000}/>
            <Product title="Computer" price={68000} feature1={["High Quality", "Premium Display"]} feature2={{a: "Low Battery", b: "Low brightness"}}/>
            <Product title="Keyboard"/>
        </>
    );
}

export default ProductTab;