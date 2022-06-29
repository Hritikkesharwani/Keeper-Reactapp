import './footer.css';

function footer() {
    const d = new Date();
    return (<div className="fcontainer">
        <div className="footer"><p>Copyright &copy; {d.getFullYear()}</p></div></div>)
}
export default footer;