"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pnet_smallcards_js_1 = require("./pnet-smallcards.js");
document.querySelectorAll(".pnet-expcardlist").forEach((el) => {
    pnet_smallcards_js_1.generateSkeletonItems(Array.apply(null, Array(25)), el);
    fetch("./fake.json")
        .then((res) => res.json())
        .then((data) => pnet_smallcards_js_1.fillItems(data.body.games, el));
});
