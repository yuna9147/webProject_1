document.getElementById("emailAddress").addEventListener("input", (e) =>{
    const selectEmail = e.target.seleced;

    document.getElementById("emailDomain").value = selectEmail;
})

