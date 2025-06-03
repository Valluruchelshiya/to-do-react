import Product from './Product.jsx';
function Producttab(){
    return(
        <>
        <Product title="phone" price={30000}/>
        <Product title="laptop" price={50000} />
        <Product title="pen" price ={20}/>
        </>
    );
}
export default Producttab;