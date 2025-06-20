
function showSidebar(){
  const Sidebar = document.querySelector('.Sidebar');
  Sidebar.style.display = 'flex'
}
function hideSidebar(){
  const Sidebar = document.querySelector('.Sidebar')
  Sidebar.style.display = 'none'
}

 let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        function changeSlide(n) {
            showSlide(currentSlide + n);
        }
        
        // Optional: Auto-advance slides every 3 seconds
        setInterval(() => changeSlide(1), 3000);
  
//Slightshow end 

 
      //  alert('Hello there, \n Welcome to the official website of papaye Fast Food')



    function showSidebar(){
  const Sidebar = document.querySelector('.Sidebar');
  Sidebar.style.display = 'flex'
}
function hideSidebar(){
  const Sidebar = document.querySelector('.Sidebar')
  Sidebar.style.display = 'none'
}