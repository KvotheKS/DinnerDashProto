let users = [
    {id:1,first_name:"Lauren",last_name:"Shaxby",email:"lshaxby0@php.net",created_at:"16/10/2021"},
    {id:2,first_name:"Ardenia",last_name:"Paddingdon",email:"apaddingdon1@nsw.gov.au",created_at:"27/07/2021"},
    {id:3,first_name:"Renaldo",last_name:"Alenichev",email:"ralenichev2@ftc.gov",created_at:"10/06/2021"},
    {id:4,first_name:"Nichole",last_name:"OHeneghan",email:"noheneghan3@flavors.me",created_at:"28/06/2021"},
    {id:5,first_name:"Haywood",last_name:"Daintry",email:"hdaintry4@nhs.uk",created_at:"18/03/2021"},
    {id:6,first_name:"Leslie",last_name:"Daile",email:"ldaile5@vimeo.com",created_at:"23/05/2021"},
    {id:7,first_name:"Byrann",last_name:"Slorance",email:"bslorance6@kickstarter.com",created_at:"15/05/2021"},
    {id:8,first_name:"My",last_name:"Swendell",email:"mswendell7@moonfruit.com",created_at:"15/12/2021"},
    {id:9,first_name:"Brier",last_name:"Esson",email:"besson8@usa.gov",created_at:"14/03/2021"},
    {id:10,first_name:"Seth",last_name:"Piddle",email:"spiddle9@nationalgeographic.com",created_at:"20/10/2021"},
    {id:11,first_name:"Fer",last_name:"Piddle",email:"ferspiddle9@nationalgeographic.com",created_at:"20/10/2022"},
];

function baseDiv(name, email, date) {
    return (
        `
        <tr>
            <td class="a">${name}</td>
            <td class="b">${email}</td>
            <td class="c">${date}</td>
        </tr>
        `
    )
}

function deleteEl(idx, page) {
    users.splice(idx, 1)
    createArr(page)
}

function buttonLinks(idx,page) {
    return (
        `
        <tr>
            <td class="editar">editar</td>
            <td onclick="deleteEl(${idx},${page})" class="excluir">excluir</td>
        </tr>
        `
    )
}

function buttonEl(page, name) {
    return (
        `
        <div onclick="createArr(${page})" class="button">
            <div class="button_text">${name}</div>
        </div>
        `
    )
}

function buttons(page, tam, cnt){
    let width = 10 + tam;
    let marg = 48 - (width/2);
    let heigh = [4.75 , 7.65 , 10.6 , 13.5 , 16.4, 19.4];
    let tableLine = document.getElementById('button_line')
    tableLine.setAttribute('style', `width:${width}%; margin-left:${marg}%; margin-bottom:${heigh[5-cnt]}%;`)
    tableLine.innerHTML += buttonEl((page==1?1:page-1), '<<')
    for(i = 1; i<= tam; i++){
        tableLine.innerHTML += buttonEl(i,`${i}`)
    }
    tableLine.innerHTML += buttonEl((page==tam?tam:page+1), '>>')
}

function clearHTML() {
    var tableBtts = document.getElementById('table_buttons');
    var tableId = document.getElementById('table_info');
    var tableLine = document.getElementById('button_line')
    tableBtts.innerHTML = ""
    tableId.innerHTML = ""
    tableLine.innerHTML = ""
}

function createArr(page) {
    clearHTML()
    var tableBtts = document.getElementById('table_buttons');
    var tableId = document.getElementById('table_info');
    if(page*5-5 == users.length) {
        page -= 1
    }
    let last = Math.min(users.length, page*5)
    
    for(i = Math.max(0,page*5-5); i < last; i++) {
        tableId.innerHTML += baseDiv(users[i].first_name + users[i].last_name, 
                                    users[i].email, users[i].created_at)       
        tableBtts.innerHTML += buttonLinks(i,page)        
    }
    buttonLinks(page, last)
    buttons(page, Math.ceil(users.length/5), last - Math.max(0,page*5-5))
    let tam = Math.min(users.length, page*5) - Math.max(0,page*5-5)
    tableId.setAttribute("style", `height:${Math.floor((tam/5)*100)}%`)
    tableBtts.setAttribute("style", `height:${Math.floor((tam/5)*100)}%`)
}