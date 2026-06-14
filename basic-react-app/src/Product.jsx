import Price from "./Price.jsx";
import "./Product.css";

function Product({title, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "5 programmable buttons"], 
        ["Intutive surface", "Designed for ipad Pro"], 
        ["Designed for ipad Pro", "Intutive surface"], 
        ["Wireless", "Optical orientation"],
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

// function Product({title, price, features}) {
//     // console.log(features);
//     // const list = features.map((feature) => <li>{feature}</li>);
//     // let styles = {backgroundColor: "pink"};
//     return (
//         <div className="Product" style={styles}>
//             <h3>Title: {title}</h3>
//             <h5>Price: {price}</h5>
//             {price > 30000 ? <p>Discount of 5%</p> :null}
//         </div>
//     );
// }
export default Product;