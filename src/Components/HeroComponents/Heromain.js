import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Heromain.css'

export const Heromain = () => {
    return (
        <div className='mainDiv' id='hero'>
            {/* <img src = "https://partner-with-us.swiggy.com/static/images/onBoard/swiggy/home-desktop.png" className='bground'></img> */}
            <div className='topBar'>

                <div className='logo'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABZCAYAAABv2zfcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQNSURBVHgB5ZyBVdswEIZ/53UAOgFigoYJGiYgGzRMUJiAMEHDBIQJmk4QdwLoBDETkA2uOiQFJbFDLMu2JL73Lo5NSPzr7mRJlpyhQ4joRG7YkGVZgQ7J0AJa0FjaN2lC2lBvyyi0PUv7y9uuC6EWLE7arbQlNWcpbSJNIBTkyYzIj7gqHnoVzD/essD+BZMK0b64RduQ8uIT9Q+fg0AbkMrFVwqHlbQhfCK/8CeFyw/4gPrNx2NpJpbC9uQu40NasgMiOf6fEA9raedVrapB2UFSNdpvxAU3O5ekmp97DCr+6QHVbdOQEdJKr7N7oStLZAIlNGYuZAjn9oEtoTpkl4jTmzYFVL6uzYHd0GW3C8SPkHZtH9h4VHtzhW7hEn+Udgn/BczffWa8anu0/cbyPpxLXPLn+sR8wrXvxOzYQkfonld+0aX+DP9cmjdvQnVNK5Ae3BEZ8Rvj0Uuky4hfBvZOorw1+AfatSdIFx4sOGGP+u28hsmIhX5H+gxZaMphazhloQLpIz6D0Fza1ReEg88moLmPszDdtZCE3uutgKo3RMln1ngvkMLaf8H7jarC7p4ZMh5VQn8IeVIv6ADO0QKfABbqu3tUh6/oCM7Rf+ivdcSjdguoHHOl0LaWaVDZ1eMc5Y7vL6QBRycX3OPu4FhqOWpGFThSHuwx3kzvvCJNZtKzN/zmbXBMiuVBMYE0+crXVdPx/oN0EfxihLYxMBUKal4TvySep++hq9uGOdJjXTaAnWKeblLSFjpHemyctxGaaPjm5s3u3bSUwrew2767Qufotzfjk9ze2RKqw/cRabClo2wOwwLxU5T1XrbQH8gRN/nugdJ5Rvp+zBLxcrY736h0+k3kXs3LJlUNDvzDFeKsgUsr00qhulTuEBdcCc3L/nDIoyx2BuXZAnFQ6Zijl4OQtWbFEwJ+p+KxN88QIrLwpuSPyaHfGiANKnPT4PUmE+1P6F+X3fBpgQ8rTSehWtAYakmWWY51UvFZ3jxr2xtY9sCH3nSCmi/qGVnf5SNHJ8ect0uONr1PI+CP/FhvugjNEQ5Xx37QReg9wmBeZ/llbaGBNPgL1Gyeul5Hb9Avd1nNxbROQvWgU18hvHC5nDRpGU3h1o2zr7enqAf/XvfRJK9h11Sflf6/W6rPFI40Xswuf5yHXEZon0a9Ex+N+i5GIvj7L9CAxkJ17dd2xVS7lm0Nam9JdFiLAeUJDck/KwrpWQwG8jtiwEwQKuQvhGcIGVKPMGi6ur/rNXJukFtDwsCFJBAL5D4SMUFMkFsITxEj8sTHNUTG9ISAfaSA2REiVxRTXpZB6oFOqw+E9jUx2i+kWk1V+XqNlKDyS84UKSKFzS2RsT2543isfGXzeQsyPEhdXwU65j+7NwzpjF2YrAAAAABJRU5ErkJggg==" className='logoimg'></img>

                </div>
                <div className='texts'>
                    <span>
                        Need Help?
                    </span>
                    <span>
                        Contact Us: 080-46706906
                    </span>
                    <span>
                        FAQ
                    </span>
                </div>
            </div>
            <div className='content'>

                <div className='heading'>
                    <h1 color='white'>Partner with Swiggy</h1>
                    <p>Get listed on India's biggest food delivery platform</p>
                </div>
                <div className='form'>
                    <h1 className='register'>Register Now/Login</h1>
                    <p className='phone'> Phone Number</p>
                    <div className='searchbox'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">

                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>

                    </div>
                    <button className='otpbutton'> Send Otp </button>


                </div>
            </div>
        </div>
    )
}
