import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/cat2.jpg";

export default function NotFound() {
    return (
            <div>
            <div className="left">
                <Link to="/">
                <img
                    src={logo}
                    alt="logo"
                    className="img_Logo"
                    title="back to home page"
                />
                </Link>
            </div>

            <h2>This app made by me</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero
                voluptatibus, ducimus dignissimos nulla debitis culpa dolorem, iure
                itaque labore accusantium voluptas earum officiis quo delectus possimus
                quod magnam? Ducimus illo commodi blanditiis et dolore praesentium
                perferendis culpa asperiores dolores vel libero porro, labore eveniet
                eaque sapiente nam? Quam dolorum error dolores minima hic animi dolore
                eveniet sunt vero beatae amet reiciendis dolor, quisquam perspiciatis,
                debitis et illo deleniti ipsa. Cum numquam a accusamus doloremque
                accusantium molestiae delectus corrupti officiis totam tenetur, magni,
            </p>
            <br />
            <br />

            <a href = "mailto: abc@example.com">To contact me <span>myemail@google.com</span></a>
            </div>
        );
}
