const config = {
  classes: {
    card: `pnet-ecl-card`
  }
}

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
  const button = document.createElement(`a`);

  element.classList.add(`pnet-eclc-details`);
  bg.classList.add(`pnet-eclc-bg`);
  title.classList.add(`pnet-eclc-title`);
  reviewCount.classList.add(`pnet-eclc-reviewmetas`);
  score.classList.add(`pnet-eclc-score`);
  button.classList.add(`pnet-eclc-button`);
  metas.classList.add(`pnet-eclc-meta`);

  score.classList.add(`movein`);

  title.innerHTML = item.title;
  reviewCount.innerHTML = `${item.reviewCount} arvio${item.reviewCount > 1 ? `ta` : ``}`;
  score.innerHTML = `${item.average_score}%`;
  button.textContent = `Kooste`;

  bg.style.background = `url(${item.coverimage})`;

  button.href = item.href;

  element.append(bg);  
  element.append(title); 
  element.append(metas); 
  
  metas.append(score);
  metas.append(reviewCount);  

  element.append(button);  

  return element;
};

export const generateElements = (items: any) => {
  const root = document.createElement(`div`);

  document.querySelectorAll(".pnet-expcardlist").forEach((tmp) => {   
    generateSkeletonItems(Array.apply(null, Array(30)), tmp);    
    setTimeout(() => fillItems(items, tmp), 2500)
  });
};

export function generateSkeletonItems(items: any, tmp: Element) {
  items.forEach((item: any, index: number) => {
    const root = document.createElement(`div`);    
    root.classList.add(`pnet-eclc`);
    root.classList.add(`skeleton`);
    tmp.append(root);
  });
}

export function fillItems(items: any, tmp: Element) {        
    tmp.querySelectorAll(`.pnet-eclc`).forEach((cardElement: any, index: number) => {
    const item = items[index]
    cardElement.classList.remove(`skeleton`);
    cardElement.classList.add(`loaded`);


    const root = document.createElement(`div`);
    const imgCol = document.createElement(`div`);

    root.classList.add(`pnet-ecl-card`);
    imgCol.classList.add(`pnet-eclc-img`);
    imgCol.style.background = `url(${item.coverimage})`;

    const title = document.createElement(`div`);
    title.classList.add(`pnet-eclc-card-title`);

    root.append(imgCol);

    if (index == 6 || index == 7) {
      // generateOrRemoveDetails(root, item);
    }

    imgCol.addEventListener("click", () => generateOrRemoveDetails(root, item));

    cardElement.append(root);
  });
}