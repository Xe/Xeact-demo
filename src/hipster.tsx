/** @jsxImportSource xeact */

import { g, r, x, u } from "xeact";

type HipsumProps = {
    type: "hipster-centric" | "hipster-latin";
    sentences: number;
};

const getHipsum = async ({type, sentences}: HipsumProps): Promise<string[]> => {
    const resp = await fetch(u("http://hipsum.co/api/", {
        type, sentences, "start-with-lorem": "1"
    }));

    const text: string[] = await resp.json()
    return text;
}

const Hipsum = ({text}: {text: string[]}) => {
    return (
        <div>
            {text.map(para => <p>{para}</p>)}
        </div>
    );
}

const Page = async () => {
    let paragraph = await getHipsum({type: "hipster-centric", sentences: 8});
    return (
        <div>
            <h1>Lumbersexual macchiatto</h1>
            <Hipsum text={paragraph} />
        </div>
    );
};

r(async () => {
    let root = g("app");
    let contents = await Page();
    x(root);
    root.appendChild(contents);
});
