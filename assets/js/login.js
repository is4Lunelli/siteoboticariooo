    function formatDate(input) {
        const dateValue = input.value;

        if (dateValue) {
            // Divide a string da data
            const [year, month, day] = dateValue.split('-');

            // Formata a data para o formato brasileiro (dd/mm/aaaa)
            const formattedDate = `${day}/${month}/${year}`;

            // Mostra a data formatada
            document.getElementById('formatted-date').innerText = `Data selecionada: ${formattedDate}`;
        }
    }


    document.getElementById('estadoGranel').addEventListener('change', function () {
        const selectBox = this;
        
        // Remova classes de estado previamente adicionadas
        selectBox.classList.remove('aprovado', 'reprovado');
    
        // Verifica o valor selecionado e adiciona a classe correspondente
        if (selectBox.value === 'aprovado') {
          selectBox.classList.add('aprovado');
        } else if (selectBox.value === 'reprovado') {
          selectBox.classList.add('reprovado');
        }
      });