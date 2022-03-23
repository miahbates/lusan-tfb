import Burger from "./Burger";

export default function Navbar({ open, setOpen }) {
  return (
    <div className="flex-row">
      <Burger open={open} setOpen={setOpen}></Burger>
    </div>
  );
}

{
  /* <Link href="/">
<a>Lusan</a>
</Link> */
}
