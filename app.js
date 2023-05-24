$(document).ready(function() {
    // Modelo para representar los elementos de la lista de compras
    var items = [];
  
    // Funcion para renderizar la lista de compras en la tabla
    function renderItems() {
      var tableBody = $('#itemsTable tbody');
      tableBody.empty();
  
      items.forEach(function(item) {
        var row = $('<tr>');
        row.append('<td>' + item.name + '</td>');
        row.append('<td>' + item.quantity + '</td>');
        row.append('<td>' + item.description + '</td>');
        row.append('<td><img src="' + item.image + '" alt="' + item.name + '" class="item-image"></td>');

  
        var actions = $('<td>');
        actions.append('<button class="btn btn-sm btn-primary edit-item">Editar</button>');
        actions.append('<button class="btn btn-sm btn-danger delete-item">Eliminar</button>');
        row.append(actions);
  
        tableBody.append(row);
      });
    }
  
    // Funcion para agregar un nuevo elemento a la lista de compras
    function addItem() {
      var name = $('#itemName').val();
      var quantity = $('#itemQuantity').val();
      var description = $('#itemDescription').val();
      var image = $('#itemImage').val();
  
      var newItem = {
        name: name,
        quantity: quantity,
        description: description,
        image: image
      };
  
      items.push(newItem);
      renderItems();
  
      // Restablecer el formulario
      $('#addItemForm')[0].reset();
    }
  
    // Manejador de eventos para el formulario de agregar elemento
    $('#addItemForm').submit(function(event) {
      event.preventDefault();
      addItem();
    });
  
    // Manejador de eventos para los botones de editar elemento
    $('#itemsTable').on('click', '.edit-item', function() {
      var row = $(this).closest('tr');
      var index = row.index();
  
      // Implementar logica para editar el elemento en la posicion 'index' del array 'items'
    });
  
    // Manejador de eventos para los botones de eliminar elemento
    $('#itemsTable').on('click', '.delete-item', function() {
      var row = $(this).closest('tr');
      var index = row.index();
  
      items.splice(index, 1);
      renderItems();
    });
  });
