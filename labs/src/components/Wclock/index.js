import "./style.css"

function InCLock({cityName, muiGio}) {
    const time = new Date();
    function convertTime(offset) {
        // create Date object for current location
        var localTime = new Date();
  
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        const utcTime = localTime.getTime() + (localTime.getTimezoneOffset() * 60000);
  
        // create new Date object for different city
        // using supplied offset
        const cityTime  = new Date(utcTime + (3600000*offset));
  
        // return time as a string
        return cityTime.toLocaleString()
    }
  
    return(
        <div className='wrapper' >
        <div>
        <p className='city-name'>{cityName}:</p>
        <p>{convertTime(muiGio)}</p>
        </div>
        </div>
    )
};
export default InCLock;