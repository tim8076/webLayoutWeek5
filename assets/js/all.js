"use strict";

var tableBody = document.querySelector('.table tbody');
var addButton = document.querySelector('.js-addAdmin');
var tableData = [{
  name: 'Emir Wicks',
  email: 'emir.wicks@mail.com',
  is_verified: true
}, {
  name: 'Zaina Goldsmith',
  email: 'zaina.goldsmith@mail.com',
  is_verified: true
}, {
  name: 'Mahima Lopez',
  email: 'Mahima.Lopez@mail.com',
  is_verified: true
}, {
  name: 'Pharrell Murray',
  email: 'Pharrell.Murray@mail.com',
  is_verified: true
}, {
  name: 'Annika Mcbride',
  email: 'Annika.Mcbride@mail.com',
  is_verified: true
}, {
  name: 'Fatimah Clark',
  email: 'Fatimah.Clark@mail.com',
  is_verified: true
}, {
  name: 'Klaudia Rhodes',
  email: 'Klaudia.Rhodes@mail.com',
  is_verified: true
}, {
  name: 'Tillie Lucero',
  email: 'Tillie.Lucero@mail.com',
  is_verified: true
}, {
  name: 'Sabrina Stephenson',
  email: 'Sabrina.Stephenson@mail.com',
  is_verified: true
}, {
  name: 'Annie Smith',
  email: 'Annie.Smith@mail.com',
  is_verified: true
}]; // add admin modal

var addModal;
var modalAddForm = document.querySelector('#modalAddForm');
var modalInputs = document.querySelectorAll('#modalAddForm input,#modalAddForm select');

function renderData(data) {
  var str = '';
  data.forEach(function (item, index) {
    str += "\n            <tr>\n                <td>#".concat(index + 1, "</td>\n                <td>").concat(item.name, "</td>\n                <td>").concat(item.email, "</td>\n                <td>").concat(item.is_verified ? 'Yes' : 'No', "</td>\n                <td class=\"d-flex align-items-center justify-content-end\">\n                    <a href=\"#\">\n                        <span class=\"material-icons\">\n                            visibility\n                        </span>\n                    </a>\n                    <a href=\"#\" class=\"ml-6\"\n                       data-bs-toggle=\"modal\" data-bs-target=\"#editModal\">\n                        <span class=\"material-icons\">\n                            edit\n                        </span>\n                    </a>\n                </td>\n            </tr>");
  });
  tableBody.innerHTML = str;
}

function addData() {
  var addObject = {
    is_verified: false
  };
  modalInputs.forEach(function (input) {
    if (!input.value) return alert('資料未填寫完成');

    if (!addObject[input.dataset.type]) {
      if (input.type === 'checkbox') {
        addObject[input.dataset.type] = input.checked;
      } else {
        addObject[input.dataset.type] = input.value;
      }
    }
  });
  tableData.push(addObject);
  renderData(tableData);
  modalAddForm.reset();
  addModal.hide();
}

function initAdmin() {
  if (tableBody) {
    renderData(tableData);
    addButton.addEventListener('click', addData);
    addModal = new bootstrap.Modal(document.querySelector('#addModal'), {
      keyboard: false
    });
  }
}

initAdmin();
"use strict";

function initIndex() {
  var replyButton = document.querySelector('.js-reply');
  var replyArea = document.querySelector('.reply-area');
  var cancelButton = document.querySelector('.js-cancel');

  if (replyButton) {
    var toggleReplyArea = function toggleReplyArea(e) {
      e.preventDefault();
      replyArea.classList.toggle('active');
    };

    replyButton.addEventListener('click', toggleReplyArea);
    cancelButton.addEventListener('click', toggleReplyArea);
  }
}

initIndex();
"use strict";

var headerLinks = document.querySelectorAll('.header__link');
headerLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault;
    headerLinks.forEach(function (link) {
      link.classList.remove('active');
    });
    e.target.parentElement.classList.add('active');
  });
});
//# sourceMappingURL=all.js.map
