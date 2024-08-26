import Container from "@/app/components/container";
// import { EXAMPLE_PATH } from "@/lib/constants";
import { Blockquote } from "flowbite-react";
import { FatQuote} from "@/app/components/quote";

export function Header() {
  return (
    <section>
    <div style={{textAlign: "center", padding: "5%"}}>

      <h2 className="text-5xl font-bold">Emily Yu</h2>
      <div style={{textAlign: "center"}}>
        <div id="nav">
        <a href="/">Home</a>
        {/* <a href="/login">Login</a> */}
        <a href="/gallery">Gallery</a>
        <a href="/events">Events</a>
        {/* <a href="/contact">Contact</a> */}
        <a href="" style={{textDecoration: "line-through"}}>Clients</a>
        </div>
        <div>
        <FatQuote text="As an athlete turned photographer, I see with the players."/>
        </div>
        </div>
        </div>
        </section>
);
}

export default Header;
