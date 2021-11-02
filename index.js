function calculate () {
    const targetDiv = document.getElementById("calculate-result");

    targetDiv.innerHTML = '';

    const text = document.createElement("p");
    text.innerHTML = "Итого можете внести в качестве досрочных: ";
    text.className = "bolder text";

    targetDiv.appendChild(text);

    const salary = +document.getElementById("salary").value;
    const tax = salary * 12 * 0.13;
    let taxCounter = 0;    
    let counter = 1;

    while (taxCounter < 260000) {
        let newRow = document.createElement("div");
        newRow.className = "row";

        let newCol = document.createElement("div");
        newCol.className = "col";

        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.id = counter + "-check";
        newCheckbox.className = "newCheckbox"

        let newLabel = document.createElement("label");
        newLabel.htmlFor = newCheckbox.id;
        newLabel.className = "newLabel";

        if (taxCounter + tax >= 260000) {
            let lastTax = 260000 - taxCounter;
            newLabel.innerHTML = lastTax + " рублей <span> в " + counter + " год </span>";
        } else {
            newLabel.innerHTML = tax + " рублей <span> в " + counter + " год </span>";
        }

        targetDiv.appendChild(newRow);

        newRow.appendChild(newCol);

        newCol.appendChild(newCheckbox);

        newCol.appendChild(newLabel);



        counter++;
        taxCounter += tax;
    }
}