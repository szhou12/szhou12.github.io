// document.addEventListener('DOMContentLoaded', function () {
//     const descriptionElement = document.getElementById('show-current-date');
//     const currentDate = new Date().toLocaleDateString(); // You can format the date as you wish

//     descriptionElement.innerHTML = descriptionElement.innerHTML.replace('{{date}}', currentDate);
// });

document.addEventListener('DOMContentLoaded', function () {
    const descriptionElements = document.querySelectorAll('.show-current-date');
    const currentDate = new Date().toLocaleDateString();

    descriptionElements.forEach(function(element) {
        element.innerHTML = element.innerHTML.replace('{{date}}', currentDate);
    });
});

