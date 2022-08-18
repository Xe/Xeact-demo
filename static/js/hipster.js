// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const h = (name, data = {}, children = [])=>{
    const result = typeof name == "function" ? name(data) : Object.assign(document.createElement(name), data);
    if (!Array.isArray(children)) {
        children = [
            children
        ];
    }
    result.append(...children);
    return result;
};
const x = (elem)=>{
    while(elem.lastChild){
        elem.removeChild(elem.lastChild);
    }
};
const g = (name)=>document.getElementById(name);
const u = (url = "", params = {})=>{
    let result = new URL(url, window.location.href);
    Object.entries(params).forEach((kv)=>{
        let [k, v] = kv;
        result.searchParams.set(k, v);
    });
    return result.toString();
};
const r = (callback)=>window.addEventListener('DOMContentLoaded', callback);
const jsx = (tag, data)=>{
    let children = data.children;
    delete data.children;
    const result = h(tag, data, children);
    result.classList.value = result.class;
    return result;
};
const jsxs = jsx;
const getHipsum = async ({ type , sentences  })=>{
    const resp = await fetch(u("http://hipsum.co/api/", {
        type,
        sentences,
        "start-with-lorem": "1"
    }));
    const text = await resp.json();
    return text;
};
const Hipsum = ({ text  })=>{
    return jsx("div", {
        children: text.map((para)=>jsx("p", {
                children: para
            }))
    });
};
const Page = async ()=>{
    let paragraph = await getHipsum({
        type: "hipster-centric",
        sentences: 8
    });
    return jsxs("div", {
        children: [
            jsx("h1", {
                children: "Lumbersexual macchiatto"
            }),
            jsx(Hipsum, {
                text: paragraph
            })
        ]
    });
};
r(async ()=>{
    let root = g("app");
    let contents = await Page();
    x(root);
    root.appendChild(contents);
});
