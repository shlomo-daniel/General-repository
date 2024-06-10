fetch("https://api.shipap.co.il/contact")
    .then(obj => obj.json())
    .then(data => {
        data.forEach(item => {
            const contactRow = document.createElement("tr");

            contactRow.innerHTML = `
<td>${item.id}</td>
<td>${item.createTime}</td>
<td>${item.fullName}</td>
<td>${item.phone}</td>
<td>${item.email}</td>
<td>${item.message}</td>
`;
            document.querySelector("tbody").appendChild(contactRow);
        });
    });