document.addEventListener('DOMContentLoaded', function() {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
        .then(response => response.json())
        .then(data => {
            
            const usd = data.USDBRL;
            const eur = data.EURBRL;
            const btc = data.BTCBRL;

            
            const currencyTable = document.getElementById('moedasaqui');

            const currencies = [
                { name: 'USD', flag: 'https://flagcdn.com/us.svg', value: usd.bid, change: usd.pctChange },
                { name: 'EUR', flag: 'https://flagcdn.com/eu.svg', value: eur.bid, change: eur.pctChange },
                { name: 'BTC', flag: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg', value: btc.bid, change: btc.pctChange }
            ];

            currencies.forEach(currency => {
                const row = `
                    <tr>
                        <td><img src="${currency.flag}" alt="${currency.name} flag" width="30"> ${currency.name}</td>
                        <td>${currency.value}</td>
                        <td>${currency.change}</td>
                    </tr>
                `;
                currencyTable.innerHTML += row;
            });
        })
        .catch(error => console.error('Erro ao buscar cotações:', error));
});
