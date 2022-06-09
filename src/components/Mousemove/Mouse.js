import React from 'react';

const Mouse = () => {
    const mousemove=(e)=>{
        const loader=window.getElementByClassName('loader');
        loader.style.left=`${e.clientX-5}`
        loader.style.top=`${e.clientY-5}`
    }
    return (
        <div className='loader-container' onMouseMove={mousemove} >
            <div className='loader' >
            </div>
        </div>
    );
};

export default Mouse;


// window.addEventListener("mousemove", function (e) {
// 	var to_append = document.getElementsByClassName('loader-container')[0];
// 	var all = document.getElementsByClassName('loader-container');

// 	var parent_div = document.createElement('div');
// 	parent_div.className = "loader-container";
// 	var inner_div = document.createElement('div');
// 	inner_div.className = "loader";
// 	parent_div.appendChild(inner_div)
// 	var d = document.body.appendChild(parent_div);

// 	parent_div.style.left = (e.clientX - 50)+'px';
// 	parent_div.style.top = (e.clientY - 50)+'px';

// 	if(document.getElementsByClassName('loader-container').length > 50) {
// 		document.body.removeChild(to_append)
// 	}
// });