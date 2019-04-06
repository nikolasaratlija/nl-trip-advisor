export const htmlLoader = (element, htmlFile) => {
    fetch(htmlFile)
        .then(response => response.text())
        .then(html => {
            element.innerHTML = html;
        });
};