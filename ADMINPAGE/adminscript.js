document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crudForm');
    const tableBody = document.querySelector('#crudTable tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const id = document.getElementById('ID').value;
        const namamenu = document.getElementById('namamenu').value;
        const harga = document.getElementById('harga').value;
        const gambar = document.getElementById('gambar').value;
        const deskripsi = document.getElementById('deskripsi').value;

        addRow(id, namamenu, harga, gambar, deskripsi);
        form.reset();
    });

    function addRow(id, namamenu, harga, gambar, deskripsi) {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = id;

        const namamenuCell = document.createElement('td');
        namamenuCell.textContent = namamenu;

        const hargaCell = document.createElement('td');
        hargaCell.textContent = harga;

        const gambarCell = document.createElement('td');
        gambarCell.textContent = gambar;

        const deskripsiCell = document.createElement('td');
        deskripsiCell.textContent = deskripsi;

        const actionsCell = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editRow(row, idCell, namamenuCell, hargaCell, gambarCell, deskripsiCell));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteRow(row));

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        row.appendChild(idCell);
        row.appendChild(namamenuCell);
        row.appendChild(hargaCell);
        row.appendChild(gambarCell);
        row.appendChild(deskripsiCell);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    }

    function editRow(row, idCell, namamenuCell, hargaCell, gambarCell, deskripsiCell) {
        const newId = prompt('Enter new ID:', idCell.textContent);
        const newNamaMenu = prompt('Enter new Nama Menu:', namamenuCell.textContent);
        const newHarga = prompt('Enter new Harga:', hargaCell.textContent);
        const newGambar = prompt('Enter new Gambar:', gambarCell.textContent);
        const newDeskripsi = prompt('Enter new Deskripsi Menu:', deskripsiCell.textContent);

        if (newId && newNamaMenu && newHarga && newGambar && newDeskripsi) {
            idCell.textContent = newId;
            namamenuCell.textContent = newNamaMenu;
            hargaCell.textContent = newHarga;
            gambarCell.textContent = newGambar;
            deskripsiCell.textContent = newDeskripsi;
        }
    }

    function deleteRow(row) {
        row.remove();
    }
});
