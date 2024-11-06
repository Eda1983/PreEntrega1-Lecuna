import CartWidget from "../CartWidget/CartWidget";

export default function NavBar () {
    return(
        <nav style={{backgroundColor: "#1C1C1C", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <ul style={{listStyle: "none", display: "flex", gap: "20px", margin: "0", padding: "0"}}>
                <li style={{color: "#FFFFFF", cursor: "pointer"}}>Home</li>
                <li style={{color: "#FFFFFF", cursor: "pointer"}}>Phones</li>
                <li style={{color: "#FFFFFF", cursor: "pointer"}}>Tablets</li>
                <li style={{color: "#FFFFFF", cursor: "pointer"}}>Laptops</li>

            </ul>
            <CartWidget />
        </nav>
    );
} 