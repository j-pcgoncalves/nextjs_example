import Link from "next/link";

const Robots = ({ robots }) => {
    return (
        <div>
            <h1>Robots</h1>
            <Link href="/">
                <button>Home</button>
            </Link>
            <div>
                {
                    robots.map(robot => (
                        <li key={robot.id}>
                            <Link href={`robots/${robot.id}`}>
                                {robot.name}
                            </Link>
                        </li>
                    ))
                }
            </div>
        </div>
    );
};

export const getStaticProps = async function() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: {
            robots: data,
        }
    };
}

export default Robots;