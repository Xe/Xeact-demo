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
const r = (callback)=>window.addEventListener('DOMContentLoaded', callback);
const jsx = (tag, data)=>{
    let children = data.children;
    delete data.children;
    const result = h(tag, data, children);
    result.classList.value = result.class;
    return result;
};
const jsxs = jsx;
const Page = async ()=>{
    return jsxs("div", {
        children: [
            jsx("h1", {
                children: "hi there friends!"
            }),
            jsx("p", {
                children: "holy cow these are some WORDS like 'lumbersexual macchiatto'. I don't know what they mean though!"
            })
        ]
    });
};
r(async ()=>{
    const root = g("app");
    const contents = await Page();
    x(root);
    root.appendChild(contents);
});
