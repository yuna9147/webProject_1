document.getElementById("btn1").addEventListener("click", function() {
    const div1 = document.getElementById("div1");
    div1.innerHTML = "";
    
    //a(일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += `<br/>
        <h3>문자열 내에 a라는 문자열이 존재하는지 검색</h3>
        /a/, apple : ${regExp1.test("apple")} <hr/>
        /a/, pink : ${regExp1.test("pink")} <hr/>
        `;

    //[abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    let regExp2 = /[abcd]/;
    div1.innerHTML+=`<br/>
    <h3>문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 확인</h3>
        /[abcd]/ , apple : ${regExp2.test("apple")} <hr/>
        /[abcd]/ , sub : ${regExp2.test("sub")} <hr/>
        /[abcd]/ , qwer : ${regExp2.test("qwer")} <hr/>
    `;

    regExp2 = /[^abcd]/;
    div1.innerHTML += `<br/>
     <h3>문자열 내 abcd가 포함되지 않았는지 확인</h3>
        /[^abcd]/ , html : ${regExp2.test("html")} <hr/>`;


    //^(캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; //문자열의 시작이 "group" 인지 확인
    div1.innerHTML += `<br/>
        <h3>문자열의 시작이 "group" 인지 확인</h3>
        /^group/ , group100 : ${regExp3.test("group100")} <hr/>
        /^group/ , 100group : ${regExp3.test("100group")} <hr/>
    `;


    //$ : 문자열의 끝을 의미
     const regExp4 = /group$/; //문자열의 끝이 "group" 인지 확인
    div1.innerHTML += `<br/>
        <h3>문자열의 끝이 "group" 인지 확인</h3>
        /group$/ , 100group : ${regExp4.test("100group")} <hr/>
        /group$/ , group100 : ${regExp4.test("group100")} <hr/>
    `;
});