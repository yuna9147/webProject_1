const library = {

    books: [ 
            {"title" : '자바스크립트 입문',  "author":'홍길동', "pubYear" : "2021"},
            {"title" : 'HTML/CSS/JavaScript', "author":'김철수', "pubYear" : "2020"},
            {"title" : '오라클', "author":'이영희', "pubYear" : "2022" }
          ]
};



const renderTable = function() {
    const tableBody = document.querySelector("#bookTable tbody");
    tableBody.innerHTML="";

    library.books.forEach( book => {
        let row = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pubYear}</td>
            </tr>
            `;

        tableBody.innerHTML += row;
    });
};



document.getElementById("addBtn").addEventListener("click", ()=>{
    const titleTxt = document.getElementById("title");
    const authorTxt = document.getElementById("author");
    const pubYearTxt = document.getElementById("pubYear");

    const title = titleTxt.value.trim();
    const author = authorTxt.value.trim();
    const pubYear = pubYearTxt.value;

    if(!title || !author || isNaN(pubYear)){
        alert('빠짐없이 입력해 주세요');
        return;
    }

    library.books.push(
        {"title": title,
            "author": author,
            "pubYear" : pubYear
        });
        //library.books.push({title,author,year});

        titleTxt.value="";
        authorTxt.value="";
        pubYearTxt.value="";

        renderTable();
});


//초기 테이블 호출
renderTable();