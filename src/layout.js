const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const service = document.getElementById('services');
const buy = document.getElementById("buybutton");

home.addEventListener('click', function (){
    window.location.href="file:///C:/Users/maina/OneDrive/Desktop/DocumentsJoan/TheJitu/Assignments/css_layout_and_responsive_task/src/home.html";
    //console.log('clicked');
});

about.addEventListener('click', function(){
    window.location.href = "file:///C:/Users/maina/OneDrive/Desktop/DocumentsJoan/TheJitu/Assignments/css_layout_and_responsive_task/src/about.html";
});

contact.addEventListener('click', function(){
    window.location.href="file:///C:/Users/maina/OneDrive/Desktop/DocumentsJoan/TheJitu/Assignments/css_layout_and_responsive_task/src/contact.html";
});

service.addEventListener('click', function(){
    window.location.href= "file:///C:/Users/maina/OneDrive/Desktop/DocumentsJoan/TheJitu/Assignments/css_layout_and_responsive_task/src/service.html";
})
buy.addEventListener('click' , function(){
    window.location.href = "file:///C:/Users/maina/OneDrive/Desktop/DocumentsJoan/TheJitu/Assignments/css_layout_and_responsive_task/src/service.html";
})