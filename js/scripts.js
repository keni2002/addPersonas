(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        class Persona {
            constructor() {
                this.personas = [];
            }
            updateTable() {

            }
            addPersona(indice, name, age, sex) {
                let people = { indice: indice, nombre: name, edad: age, sexo: sex };
                this.personas.push(people);
            }
            deletePersona(index) {
                delete(this.personas[index]);
            }
        };
        var agregar = document.getElementById('agregador');
        var borrar = document.getElementById('remove');
        var radioSexo = document.getElementsByName('sexo');
        var inputNombre = document.getElementById('nombre');
        var inputEdad = document.getElementById('age');
        var contador = document.getElementsByClassName('indice')[0];



        var personas = new Persona();


        function renderHtml() {
            //caja donde va adentro codigo:

            var tabla = document.getElementById('tabla');
            tabla.innerHTML = "";
            for (const i in personas.personas) {
                var tr = document.createElement('tr');


                var td0 = document.createElement('td');
                td0.appendChild(document.createTextNode(personas.personas[i].indice));
                tr.appendChild(td0);


                var td1 = document.createElement('td');
                td1.appendChild(document.createTextNode(personas.personas[i].nombre));
                tr.appendChild(td1);


                var td2 = document.createElement('td');
                td2.appendChild(document.createTextNode(personas.personas[i].edad));
                tr.appendChild(td2);


                var td3 = document.createElement('td');
                td3.appendChild(document.createTextNode(personas.personas[i].sexo));
                tr.appendChild(td3);




                tabla.appendChild(tr);
            }

        }

        function addi(event) {

            event.preventDefault();

            var sexo = radioSexo[0].checked || radioSexo[1].checked;


            if (sexo == false || inputNombre.value === "" || inputEdad.value === "") {
                alert("Algo anda mal rellena todo correctamente");
            } else {

                let esMasculino = radioSexo[0].checked;
                personas.addPersona(Number(contador.innerHTML), inputNombre.value, inputEdad.value, esMasculino ? "M" : "F");
                contador.innerHTML = Number(contador.innerHTML) + 1;
                renderHtml();
                inputNombre.value = "";
                inputEdad.value = "";
                radioSexo[0].checked = false;
                radioSexo[1].checked = false;
                console.log(personas.personas.length);
            }

        }

        function fBorrar() {
            var index = prompt("Que elemento deseas borrar?");
            console.log(`Length: ${personas.personas.length}`);
            if (index > 0 && index <= personas.personas.length) {

                personas.deletePersona(index - 1);

                renderHtml();


            } else {
                alert("FUera de rango");
            }

        }
        agregar.addEventListener('click', addi);
        borrar.addEventListener('click', fBorrar);







    });
})();