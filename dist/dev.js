"use strict";
const generateElements = (items) => {
    const root = document.createElement(`div`);
    root.innerHTML = "Hellos";
    document.querySelectorAll('.tmp').forEach(tmp => {
        items.body.games.forEach((item) => {
            const div = document.createElement(`div`);
            div.innerHTML = `${item.title}`;
            tmp.append(div);
        });
    });
};
fetch("./fake.json")
    .then((res) => res.json())
    .then(data => generateElements(data));
