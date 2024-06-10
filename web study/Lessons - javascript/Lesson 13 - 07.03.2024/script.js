
//
//lesson
//

// const tBody = document.querySelector("tbody");
// for (const p of products) {
//     const trE = document.createElement("tr")

//     const finalPrice = p.price - (p.price * p.discount / 100);
//     const rounded = Math.round(finalPrice);
//     trE.innerHTML = `
//     <td>${p.id}</td>
// <td>${p.name}</td>
// <td>${p.price}</td>
// <td>${p.discount || 0}%</td>
// <td>${rounded}</td>
// <td>${p.madeIn}</td>
// <td style="color:${p.color}">${p.color}</td>
// `



//     tBody.appendChild(trE)
// }


// 
// practice lesson
// 

// get tbody element
const tbodyElem = document.querySelector("tbody");


for (const ListItem of products) {
    const trElem = document.createElement("tr")

    trElem.innerHTML =
        `
            <td>${ListItem.id}</td>
            <td>${ListItem.name}</td>
            <td>${ListItem.price}</td>
            <td>${ListItem.discount}</td>
            <td>${ListItem.madeIn}</td>
            <td>${ListItem.color}</td>
        `;


    tbodyElem.appendChild(trElem);
}