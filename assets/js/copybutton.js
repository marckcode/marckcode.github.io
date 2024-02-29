document.addEventListener("DOMContentLoaded", function() {
    let codeBlocks = document.querySelectorAll("pre");
    
    codeBlocks.forEach(function(block) {
        let copyButton = document.createElement("button");
        copyButton.className = "button-copy-code";
        copyButton.textContent = "Copy";
        
        copyButton.addEventListener("click", async function() {
            await navigator.clipboard.writeText(block.textContent);
            alert("Code copied to clipboard!");
        });
        
        block.appendChild(copyButton);
    });
});