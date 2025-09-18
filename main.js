const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');

openBtn.addEventListener('click', () => dlg.showModal());
closeBtn.addEventListener('click', () => dlg.close());

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    } else {
        e.preventDefault();
        alert('Форма отправлена!');
        form.reset();
        dlg.close();
    }
});