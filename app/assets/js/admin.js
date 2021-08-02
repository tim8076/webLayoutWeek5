const tableBody = document.querySelector('.table tbody');
const addButton = document.querySelector('.js-addAdmin');
const tableData = [
    {
        name: 'Emir Wicks',
        email: 'emir.wicks@mail.com',
        is_verified: true
    },
    {
        name: 'Zaina Goldsmith',
        email: 'zaina.goldsmith@mail.com',
        is_verified: true
    },
    {
        name: 'Mahima Lopez',
        email: 'Mahima.Lopez@mail.com',
        is_verified: true
    },
    {
        name: 'Pharrell Murray',
        email: 'Pharrell.Murray@mail.com',
        is_verified: true
    },
    {
        name: 'Annika Mcbride',
        email: 'Annika.Mcbride@mail.com',
        is_verified: true
    },
    {
        name: 'Fatimah Clark',
        email: 'Fatimah.Clark@mail.com',
        is_verified: true
    },
    {
        name: 'Klaudia Rhodes',
        email: 'Klaudia.Rhodes@mail.com',
        is_verified: true
    },
    {
        name: 'Tillie Lucero',
        email: 'Tillie.Lucero@mail.com',
        is_verified: true
    },
    {
        name: 'Sabrina Stephenson',
        email: 'Sabrina.Stephenson@mail.com',
        is_verified: true
    },
    {
        name: 'Annie Smith',
        email: 'Annie.Smith@mail.com',
        is_verified: true
    }
]

// add admin modal
let addModal;
const modalAddForm = document.querySelector('#modalAddForm');
const modalInputs = document.querySelectorAll('#modalAddForm input,#modalAddForm select');

function renderData(data){
    let str = '';
    data.forEach((item, index)=> {
        str += `
            <tr>
                <td>#${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.is_verified? 'Yes' : 'No'}</td>
                <td class="d-flex align-items-center justify-content-end">
                    <a href="#">
                        <span class="material-icons">
                            visibility
                        </span>
                    </a>
                    <a href="#" class="ml-6"
                       data-bs-toggle="modal" data-bs-target="#editModal">
                        <span class="material-icons">
                            edit
                        </span>
                    </a>
                </td>
            </tr>`
    })
    tableBody.innerHTML = str;
}

function addData(){
    const addObject = {
        is_verified: false
    }
    modalInputs.forEach(input => {
        if (!input.value) return alert('資料未填寫完成');
        if (!addObject[input.dataset.type]) {
            if (input.type === 'checkbox') {
                addObject[input.dataset.type] = input.checked;
            } else {
                addObject[input.dataset.type] = input.value;
            }
        }
    })
    tableData.push(addObject);
    renderData(tableData);
    modalAddForm.reset();
    addModal.hide();
}

function initAdmin(){
    if (tableBody) {
        renderData(tableData);
        addButton.addEventListener('click', addData);
        addModal = new bootstrap.Modal(document.querySelector('#addModal'), {
            keyboard: false
        })
    }
}
initAdmin();