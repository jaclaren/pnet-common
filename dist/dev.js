import { generateSkeletonItems, fillItems } from "./pnet-smallcards.js";
document.querySelectorAll(".pnet-expcardlist").forEach((el) => {
    generateSkeletonItems(Array.apply(null, Array(25)), el);
    fetch("./fake.json")
        .then((res) => res.json())
        .then((data) => fillItems(data.body.games, el));
});
