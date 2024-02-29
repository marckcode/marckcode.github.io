let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    if (!navigator.clipboard) {
        return;
    }

    let button = document.createElement("button");
    button.className = "button-copy-code";
    button.innerHTML = copyIcon;
    block.appendChild(button);

    button.addEventListener("click", async () => {
        await copyCode(block);
    });
});

async function copyCode(block) {
    let copiedCode = block.cloneNode(true);
    copiedCode.removeChild(copiedCode.querySelector("button.button-copy-code"));

    const html = copiedCode.outerHTML.replace(/<[^>]*>?/gm, "");

    block.querySelector("button.button-copy-code").innerHTML = copiedIcon;
    setTimeout(function () {
        block.querySelector("button.button-copy-code").innerHTML = copyIcon;
    }, 2000);

    const parsedHTML = htmlDecode(html);

    await navigator.clipboard.writeText(parsedHTML);
}

function htmlDecode(input) {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}