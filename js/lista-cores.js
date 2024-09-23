document.addEventListener('DOMContentLoaded', function() {
    fetch('https://reqres.in/api/unknown')
        .then(response => response.json())
        .then(data => {
            const colors = data.data;
            const tableBody = document.getElementById('listarcores');

            colors.forEach(color => {
                const row = `<tr>
                                <td>${color.id}</td>
                                <td>${color.name}</td>
                                <td style="background-color:${color.color}; color: white;">${color.color}</td>
                            </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Erro ao buscar cores:', error));
});
