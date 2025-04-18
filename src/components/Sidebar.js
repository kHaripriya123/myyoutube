import { useSelector } from "react-redux";

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if(!isMenuOpen) return null;  //early return
    return (

        <div className="shadow-lg p-2 w-32 ">

            <ul>
                <li> Home </li>
                <li> Shorts </li>
                <li> Videos </li>
                <li> Live </li>
            </ul>

<h1 className="font-bold pt-5">Subscriptions</h1>

<ul>
    <li> Music </li>
    <li> Sports </li>
    <li> Gaming </li>
    <li> Movies </li>
</ul>

<h1 className="font-bold py-2">Watch Later</h1>

<ul>
    <li> Music </li>
    <li> Sports </li>
    <li> Gaming </li>
    <li> Movies </li>
</ul>

    </div>

    )
}

export default Sidebar;