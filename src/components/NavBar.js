import React from "react";

function NavBar() {
  const links = ["home", "school", "projects"];
  
  const myLinks = links.map((link) => {
    return <a key={{ link }} href={{ link }}>{ link }</a>;
  })

  return <nav>
    {myLinks}
  </nav>;
}

export default NavBar;