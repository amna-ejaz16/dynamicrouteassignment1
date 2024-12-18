import Link from "next/link";
export default function Home() {
 return (
  <div> 
    <h1>Country</h1>
    {/* we are giving the link of Pakistan page that it is present inside the country folder
    we will comment all css because it is not giving good styling */}
    <Link href="/country/pakistan" style={{ margin:"10px", borderRadius: "10px" , border:"2px solid black", padding: "10px" }}>Pakistan</Link>
    <Link href="/country/india" style={{ margin:"10px", borderRadius: "10px" , border:"2px solid black", padding: "10px" }}>India</Link>
    <Link href="/country/australia" style={{ margin:"10px", borderRadius: "10px" , border:"2px solid black", padding: "10px" }}>Australia</Link>
    <Link href="/country/china" style={{ margin:"10px", borderRadius: "10px" , border:"2px solid black", padding: "10px" }}>China</Link>
    <Link href="/country/indonesia" style={{ margin:"10px", borderRadius: "10px" , border:"2px solid black", padding: "10px" }}>Indonesia</Link>
  </div>
 );
}