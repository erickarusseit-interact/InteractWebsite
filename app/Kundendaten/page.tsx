import Link from 'next/link';
import React from 'react';

let Kontakt = function () {
  return <div>
    <p>Kunden</p>
    <ul className=" row  space-x-5 m-5
    
    bg-gray-200 rounded-md ">
      <li> <Link href="/Kundendaten/Kudnen"> HCS</Link></li>
       <li> <Link href="/Kundendaten/Kudnen"> Reingold</Link></li>
       <li> <Link href="/Kundendaten/Kudnen"> Test</Link></li>
       <li> <Link href="/Kundendaten/Kudnen"> Test2</Link></li>
       <li> <Link href="/Kundendaten/Kudnen"> Test3</Link></li>

    </ul>  
  </div>
}


export default Kontakt;


