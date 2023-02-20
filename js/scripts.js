(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        class Persona {
            constructor() {
                this.personas = [];
            }
            updateTable() {

            }
            addPersona(name, age, sex) {
                let people = { nombre: name, edad: age, sexo: sex };
                this.personas.push(people);
            }
            deletePersona(index) {

            }
        };
        var agregar = document.getElementById('agregador');

        var radioSexo = document.getElementsByName('sexo');
        var inputNombre = document.getElementById('nombre');
        var inputEdad = document.getElementById('age');




        var personas = new Persona();


        function renderHtml() {
            //caja donde va adentro codigo:

            var tabla = document.getElementById('tabla');
            tabla.innerHTML = "";
            for (const i in personas.personas) {
                var tr = document.createElement('tr');

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
                personas.addPersona(inputNombre.value, inputEdad.value, esMasculino ? "M" : "F");
                renderHtml();
                inputNombre.value = "";
                inputEdad.value = "";
                radioSexo[0].checked = false;
                radioSexo[1].checked = false;
            }

        }
        agregar.addEventListener('click', addi);








    });
})();