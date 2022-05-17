const generateDetails = (item:any) => {
    const element = document.createElement(`div`)
    const title = document.createElement(`div`)

    element.classList.add(`pnet-eclc-details`)    
    title.classList.add(`pnet-eclc-title`)

    title.innerHTML = item.title
    
    element.append(title)

    return element
}

const generateElements = (items: any) => {    
    const root = document.createElement(`div`)
    root.innerHTML = "Hellos"

    document.querySelectorAll('.pnet-expcardlist').forEach(tmp => {
        
        items.body.games.forEach((item:any, index:number) => {        
            const root = document.createElement(`div`);
            const imgCol = document.createElement(`div`);

            root.classList.add(`pnet-ecl-card`)            
            imgCol.classList.add(`pnet-eclc-img`)
            imgCol.style.background = `url(${item.coverimage})`

            const title = document.createElement(`div`);
            title.classList.add(`pnet-eclc-card-title`)
            
            root.append(imgCol)                    

            if(index == 6)
                root.append(generateDetails(item))
                
            root.addEventListener('click', () => root.append(generateDetails(item)))

            
            tmp.append(root)                    
        }) 

    })
  
};

fetch("./fake.json")
  .then((res) => res.json())
  .then(data => generateElements(data));
