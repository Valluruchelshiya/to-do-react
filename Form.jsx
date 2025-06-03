function handleSubmit(event){
    event.preventDefault();
    console.log("form has been submitted");
}
function Form(){
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder = "write something"/>
            <button>Submit</button>
        </form>

    );
}
export default Form;