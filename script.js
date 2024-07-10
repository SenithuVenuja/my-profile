//smooth scrolling
document.querySelectorAll('a[herf^="#"]').forEach(anchor=>{
    anchor.addEventlistener('click',
    function(e) {
        e.perventDefault();

        document.querySelector(this.getAttribute('herf')).scrollintoview({
            behavior:'smooth'
        });
     });
    });
//form validation
document.getElementById('contact-form').addEventListener('submit',function(e){
    e.preventDefault();
    //Add from validation logic here
    alert('form submitted');
});
 