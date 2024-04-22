import Link from "next/link";

export default function Header() {
    return (
        // TODO space between logo, buttons and profile pic
        // TODO add profile pic
        // TODO add mobile version -> add dropdown menu
        <div className="container">
            <div className="row">
                <div className="col">
                    <HeaderButton value={"LOGO"} href={"/"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"EVENTS"} href={"/events"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"ETC"} href={"/events"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"ETC"} href={"/events"}></HeaderButton>
                </div>
                <div className="col">
                    <HeaderButton value={"PROFILE_PIC"} href={"/profile"}></HeaderButton>
                </div>
            </div>
        </div>
    )
}

type HeaderButtonProps = {
    value: string;
    href: string;
}

function HeaderButton({value, href}: HeaderButtonProps) {
    return (
        <Link href={href} passHref>
            <h1 style={{cursor: 'pointer'}}>{value}</h1>
        </Link>
    )
}