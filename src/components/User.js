import React from 'react'

function User(props) {
    return (
        <div className="col-md-5 m-2" style={{border:"1px solid #d1d1d1",borderRadius:5,float:"left",display:'flex',alignItems:'center',justifyContent:'center',padding:10}}>
            <div style={{textAlign:"center"}}>
            <img style={{borderRadius:100}} src={props.user.avatar_url} width={150} height={150}/>
            <p style={{margin:"5px 0px"}}>{props.user.login}</p>
            </div>
        </div>
    )
}

export default User
