import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
   <nav>
     <Link href={"/about"}>About Page</Link> {"  "}
     <Link href={"/service"}>Service Page</Link>
   </nav>
  );
}
