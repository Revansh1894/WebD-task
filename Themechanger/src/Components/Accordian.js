import React, { useState } from 'react'

export default function Accordian() {
    const [istyle, nstyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btext, bftext] = useState('Dark Mode')
    function toggle() {
        if (istyle.color == 'black') {
            nstyle({
                color: 'white',
                backgroundColor: 'black'
            })
            bftext('Light Mode')
        }
        else {
            nstyle({
                color: 'black',
                backgroundColor: 'white'
            })
            bftext('Dark Mode')
        }
    }
    return (
        <>
        <div className='container' style={istyle}>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={istyle}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" style={istyle} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" style={istyle}>
                        <div className="accordion-body" style={istyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={istyle}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={istyle} data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div style={istyle} id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body" style={istyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={istyle}>
                    <h2 className="accordion-header" style={istyle} id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" style={istyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" style={istyle} className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body" style={istyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='container'>
            <br />
            <button className='btn btn-primary' onClick={toggle}>{btext}</button>
        </div>
        </>
    )
}
