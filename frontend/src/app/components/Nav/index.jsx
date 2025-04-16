import Link from "next/link";

function NavBar() {
    return (
        <nav>
            {/* external links */}
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}

            {/* internal links */}
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contacts">Contacts</Link>
        </nav>
    );
}

export default NavBar;