const generateOrRemoveDetails = (rootElement:HTMLElement, item:any) => {
    let detailsElement = rootElement.querySelector(".pnet-eclc-details");

    if (!!detailsElement) {
      detailsElement.remove();          
    } else {
        detailsElement = generateDetails(item);
        rootElement.append(detailsElement);        
  }
    
  }
  
const generateDetails = (item: any) => {
  const element = document.createElement(`div`);
  const title = document.createElement(`div`);
  const reviewCount = document.createElement(`div`);
  const score = document.createElement(`div`);
  const bg = document.createElement(`div`);
  const metas = document.createElement(`div`);
  const button = document.createElement(`button`);

  element.classList.add(`pnet-eclc-details`);
  bg.classList.add(`pnet-eclc-bg`);
  title.classList.add(`pnet-eclc-title`);
  reviewCount.classList.add(`pnet-eclc-reviewCount`);
  score.classList.add(`pnet-eclc-score`);
  button.classList.add(`pnet-eclc-button`);
  metas.classList.add(`pnet-eclc-meta`);

  score.classList.add(`movein`);

  title.innerHTML = item.title;
  reviewCount.innerHTML = item.reviewCount;
  score.innerHTML = item.average_score;
  button.textContent = `Kooste`;

  bg.style.background = `url(${item.coverimage})`;

  element.append(bg);
  element.append(title);
  element.append(metas);
  
  metas.append(reviewCount);
  metas.append(score);

  element.append(button);

  return element;
};

const generateElements = (items: any) => {
  const root = document.createElement(`div`);

  document.querySelectorAll(".pnet-expcardlist").forEach((tmp) => {
    items.body.games.forEach((item: any, index: number) => {
      const root = document.createElement(`div`);
      const imgCol = document.createElement(`div`);

      root.classList.add(`pnet-ecl-card`);
      imgCol.classList.add(`pnet-eclc-img`);
      imgCol.style.background = `url(${item.coverimage})`;

      const title = document.createElement(`div`);
      title.classList.add(`pnet-eclc-card-title`);

      root.append(imgCol);

      if (index == 6) {
        generateOrRemoveDetails(root, item)
      }

      imgCol.addEventListener("click", () => generateOrRemoveDetails(root, item));

      tmp.append(root);
    });
  });
};

fetch("./fake.json")
  .then((res) => res.json())
  .then((data) => generateElements(data));
