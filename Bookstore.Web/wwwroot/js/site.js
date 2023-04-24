var url = 'https://localhost:7231/api/Products';

//fetch(url)
//    .then(response => response.text())
//    .then(data => document.getElementById('content').innerHTML = data)
//    .catch(error => console.error(error));


fetch(url)
    .then(response => response.json())
    .then(data => {
        // Tạo các phần tử HTML mới và hiển thị dữ liệu học sinh đó trên các phần tử HTML đó
        var studentsDiv = document.getElementById('content');
        for (var i in data) {
            var studentDiv = document.createElement('div');
            studentDiv.innerHTML = 'Title: ' + data[i].title;
            studentsDiv.appendChild(studentDiv);
        }
    });


function addBook() {
    var Title = document.getElementById('title').value;
    var Des = document.getElementById('Description').value;
    var Price = document.getElementById('Price').value;
    var Quantity = document.getElementById('Quantity').value;

    const data = {
        title:Title,
        description:Des,
        price:Price,
        quantity:Quantity
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}