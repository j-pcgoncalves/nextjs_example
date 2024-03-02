import Link from "next/link";

const Index = () => (
    <div>
        <h1>SSR Magician</h1>
        {/* <a href="/about">About</a> */}
        <Link href="/about">
            <button>About</button>
        </Link>
    </div>
);

export default Index;