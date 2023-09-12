
import './clock.css'
function Clock() {
    const data = new Date();
    return(
        <div>
        <h2>Hello, I'm clock</h2>
        <h3>Now is {data.toLocaleTimeString()}</h3>
        </div>
    );
}
 export default Clock
