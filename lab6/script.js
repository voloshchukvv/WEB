    var form = document.querySelector('#form'),
        fname = document.querySelector('#name'),
        fvariant = document.querySelector('#variant'),
        fgroup = document.querySelector('#group'),
        fphone = document.querySelector('#phone'),
        fid_card  = document.querySelector('#id_card');

    var errors= [];
    errors['name'] = true;
    errors['variant'] = true;
    errors['group'] = true;
    errors['phone'] = true;
    errors['id_card'] = true;
        
    function check (input, expression) { 
        if(input.value === ''){
            input.classList.add('error');
            errors[input.id] = true;
        }
        else if (!expression.test(input.value)){
            input.classList.add('error');
            errors[input.id] = true;
        }
        else {
            input.classList.remove('error');   
            errors[input.id] = false;   
        } 
    }

    fname.addEventListener('focusout', () =>{
        var exp = /^[A-ZА-ЯІЇa-zа-яії]*\s[A-ZА-ЯІЇ]\.[A-ZА-ЯІЇ]\.$/;
        check(fname, exp);
    });

    fvariant.addEventListener('focusout', () =>{
        var exp = /^\d{2}$/;
        check(fvariant, exp);
    });

    fgroup.addEventListener('focusout', () =>{
        var exp = /^[A-ZА-ЯІЇa-zа-яії]{2}[-]\d{2}$/;
        check(fgroup, exp);
    });

    fphone.addEventListener('focusout', () =>{
        var exp = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
        check(fphone, exp);
    });

    fid_card.addEventListener('focusout', () =>{
        var exp = /^[A-ZА-ЯІЇa-zа-яії]{2}[№]\d{6}$/;
        check(fid_card, exp);
    });

    form.onsubmit = function() {
        if(errors.name === false && errors.variant === false && errors.group === false && errors.phone === false && errors.id_card === false) {
        var element = document.getElementById("form_container"); 
        element.innerHTML += '<p>ПІБ: <b>'+ fname.value+ '</b><br />Варіант: <b>'+ fvariant.value+ '</b><br />Група: <b>'+ fgroup.value+ '</b><br />Телефон: <b>'+ fphone.value+ '</b><br />ID-card:<b>'+ fid_card.value+ '</b></p>';
    }
        else 
            alert ('Присутні помилки при введенні форми!');
    }

//table

    var function_mode = 0;
    table_td1 = document.getElementById('my_variant');

    table_td1.addEventListener('mouseover', ()=> {
        var Rcolor = Math.floor(Math.random()*16777215).toString(16);
        table_td1.style.backgroundColor = '#'+Rcolor;
        function_mode = 1;
    });
    table_td1.addEventListener('mouseout', ()=> {
        if (function_mode === 1)
            table_td1.style.backgroundColor = 'transparent';
    });

    table_td1.addEventListener('click', ()=> {
        var select_color = document.getElementById('select_color').value;
        table_td1.style.backgroundColor = select_color;
        function_mode = 2;
    });

    table_td1.addEventListener('dblclick', ()=> {
        var select_color = document.getElementById('select_color').value;
        var table_row = document.getElementById('my_table').rows.item(0);
        table_row.style.backgroundColor = select_color;
        function_mode = 3;
    });