import React from 'react';
//was immer in den []klammern des Ordners steht wird als params angenommen

const UserDetails = async ({params} : {params: Promise <{id: string}>}) =>{
    const {id} = await params; 
    return( 
        <div>
            <h1>Informationen von Kunde {id} </h1>
        </div>
    )
}

export default UserDetails;