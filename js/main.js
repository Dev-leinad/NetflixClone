// const accordion = document.getElementsByClassName('faqs-box');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }

const acccd = document.querySelectorAll('label')
 
const displayContent = document.querySelectorAll('.faq-answers')

acccd.forEach(acccds => {
   acccds.addEventListener('click', function (e) {
    displayContent.forEach(contents => {
        contents.style.maxHeight='490'
    });
  
}) 
});
