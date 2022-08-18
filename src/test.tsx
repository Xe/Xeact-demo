/** @jsxImportSource xeact */

import { g, r, x } from "xeact";

const Page = async () => {
    return (
        <div>
            <h1>hi there friends!</h1>
            <p>holy cow these are some WORDS like 'lumbersexual macchiatto'. I don't know what they mean though!</p>
        </div>
    );
};

r(async () => {
    const root = g("app");
    const contents = await Page();
    x(root);
    root.appendChild(contents);
});
