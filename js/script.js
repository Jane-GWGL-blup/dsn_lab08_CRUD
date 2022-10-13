var selectedRow = null;
function onSubmit(){
    event.preventDefault();
    var formData = readFormData();
    //llamar el metodo de inserción de nuevo registro
    if(selectedRow === null){
        insertNewRecord(formData)
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
//Recuperamos la data
function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["productName"] = document.getElementById("productName").value;
    formData["productBrand"] = document.getElementById("productBrand").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    formData["stock"] = document.getElementById("stock").value;
    return formData;
}
//Insert the data
    ///Como tenemos más de un elemento a llamar, podemos usar el tag
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    ///Variable para agregar nueva fila
    var newRow = table.insertRow(table.length)
    //Variable para cada elemento en el formulario
    var cell1= newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2= newRow.insertCell(1);
        cell2.innerHTML = data.productName;
    var cell3= newRow.insertCell(2);
        cell3.innerHTML = data.productBrand;
    var cell4= newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5= newRow.insertCell(4);
        cell5.innerHTML = data.stock;
    var cell6= newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onEdit(this)' class="btn btn-success">Edit</button>
                            <button onClick='onDelete(this)' class="btn btn-danger">Delete</button>`;
}

//Add edit data function
function onEdit(td){
    ///Seleccionando una fila particular
    selectedRow = td.parentElement.parentElement;
    ///Para poblar el valor en el campo de entrada una vez se hace el click en lo boton de enviar
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("productBrand").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPriceroductCode").value = selectedRow.cells[3].innerHTML;
    document.getElementById("stock").value = selectedRow.cells[4].innerHTML;
}

    ///Estableciendo el valor actualizado
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.productName;
    selectedRow.cells[2].innerHTML = formData.productBrand;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    selectedRow.cells[4].innerHTML = formData.stock;
}

//Add delete data function
function onDelete(td){
    ///Mensaje de confirmación
    if(confirm('¿Quieres eliminar este registro?')){
        ////Almacenar la fila correspondiente dentro de este td
        ///Luego eliminar  la fila se menciona el ID del elemento
        row= td.parentElement.parentElement;
            document.getElementById('storeList').deleteRow(row.rowIndex);
    }

    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('productCode').value='';
    document.getElementById('productName').value='';
    document.getElementById('productBrand').value='';
    document.getElementById('perPrice').value='';
    document.getElementById('stock').value='';
}
