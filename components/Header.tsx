import React from "react";
import Image from "next/image";

function Header(props) {
console.log(props);
return (
<div className="header-with-logo">
    <Image src="/logo-transparent-small.svg" width={200} height={70} alt="icon"/>
    <div className="app-header">
        <div className="user-initial-circle">{props.user?.username.slice(0,1).toUpperCase()}</div>
    </div>

</div>
);
}

export default Header;