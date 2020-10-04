import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

function WeatherHeader()
{
    let headerCss = {color :'white', fontWeight: 'bold', backgroundColor:'#253469'}
    return(<>
        <div className="card-header" style={headerCss}>
            <i className="fa fa-cog" aria-hidden="true" style={{ fontSize:'1.5em' }}></i>
            &nbsp;<span style={{ fontSize:'1.3em' }}>Weather</span>
        </div>
    </>)
}

export default WeatherHeader;