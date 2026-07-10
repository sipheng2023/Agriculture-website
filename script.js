document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    // ລະບົບເປີດ-ປິດເມນູໃນມືຖື (Responsive Menu toggle)
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // ປ່ຽນໄອຄອນ ລະຫວ່າງ ເມນູເສັ້ນ ກັບ ເຄື່ອງໝາຍຄູນ
        const icon = burgerMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // ປິດເມນູອັດຕະໂນມັດເມື່ອຄລິກເລືອກເມນູແລ້ວ
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = burgerMenu.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
});