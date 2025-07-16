const checks = document.querySelectorAll(".check");
checks.forEach(target => {
    target.addEventListener("click", function(){
        this.style.color="#aaaaaa";
        this.style.textDecoration="line-through";
    });
});