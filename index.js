
//exchange rate fetcher with city mapper
async function fetchUSDRates() {
    try {
        const response = await fetch('http://api.exchangerate.host/live?access_key=2e6db9098796585b84e8bc29146194b1');
        const data = await response.json();

            const rates = data.quotes;

            const rateEntries = Object.entries(rates);

            const topRates = rateEntries.sort((a, b) => b[1] - a[1]).slice(0, 3);

            //used AI to generate the cities to save time. Some of these seem wrong, but I'll go with it for now. I also now understand why databases are useful.
            const cityMap = {
                USDAED: 'Abu Dhabi',
                USDAFN: 'Kabul',
                USDALL: 'Tirana',
                USDAMD: 'Yerevan',
                USDANG: 'Willemstad',
                USDAOA: 'Luanda',
                USDARS: 'Buenos Aires',
                USDAUD: 'Canberra',
                USDAWG: 'Oranjestad',
                USDAZN: 'Baku',
                USDBAM: 'Sarajevo',
                USDBBD: 'Bridgetown',
                USDBDT: 'Dhaka',
                USDBGN: 'Sofia',
                USDBHD: 'Manama',
                USDBIF: 'Gitega',
                USDBMD: 'Hamilton',
                USDBND: 'Bandar Seri Begawan',
                USDBOB: 'Sucre',
                USDBRL: 'Brasília',
                USDBSD: 'Nassau',
                USDBTC: 'Unknown', // Bitcoin does not have a city
                USDBTN: 'Thimphu',
                USDBWP: 'Gaborone',
                USDBYN: 'Minsk',
                USDBYR: 'Minsk', // Old currency, now replaced by BYN
                USDBZD: 'Belmopan',
                USDCAD: 'Ottawa',
                USDCDF: 'Kinshasa',
                USDCHF: 'Bern',
                USDCLF: 'Santiago',
                USDCLP: 'Santiago',
                USDCNY: 'Beijing',
                USDCNH: 'Beijing',
                USDCOP: 'Bogotá',
                USDCRC: 'San José',
                USDCUC: 'Havana',
                USDCUP: 'Havana',
                USDCVE: 'Praia',
                USDCKZ: 'Astana',
                USDKZT: 'Astana',
                USDNOK: 'Oslo',
                USDGEL: 'Tbilisi',
                USDGGP: 'St. Peter Port',
                USDGHS: 'Accra',
                USDGIP: 'Gibraltar',
                USDGMD: 'Banjul',
                USDGNF: 'Conakry',
                USDGTQ: 'Guatemala City',
                USDGYD: 'Georgetown',
                USDHKD: 'Hong Kong',
                USDHNL: 'Tegucigalpa',
                USDHRK: 'Zagreb',
                USDHTG: 'Port-au-Prince',
                USDHUF: 'Budapest',
                USDIDR: 'Jakarta',
                USDILS: 'Jerusalem',
                USDIMP: 'Douglas',
                USDINR: 'New Delhi',
                USDIQD: 'Baghdad',
                USDIRR: 'Tehran',
                USDISK: 'Reykjavik',
                USDJEP: 'Saint Helier',
                USDJMD: 'Kingston',
                USDJOD: 'Amman',
                USDJPY: 'Tokyo',
                USDKES: 'Nairobi',
                USDKGS: 'Bishkek',
                USDKHR: 'Phnom Penh',
                USDKMF: 'Moroni',
                USDKPW: 'Pyongyang',
                USDKRW: 'Seoul',
                USDKWD: 'Kuwait City',
                USDKYD: 'George Town',
                USDKZT: 'Almaty',
                USDLAK: 'Vientiane',
                USDLBP: 'Beirut',
                USDLKR: 'Sri Jayawardenepura Kotte',
                USDLRD: 'Monrovia',
                USDLSL: 'Maseru',
                USDLTL: 'Vilnius',
                USDLVL: 'Riga',
                USDLYD: 'Tripoli',
                USDMAD: 'Rabat',
                USDMDL: 'Chișinău',
                USDMGA: 'Antananarivo',
                USDMKD: 'Skopje',
                USDMMK: 'Naypyidaw',
                USDMNT: 'Ulaanbaatar',
                USDMOP: 'Macau',
                USDMRU: 'Nouakchott',
                USDMUR: 'Port Louis',
                USDMVR: 'Malé',
                USDMWK: 'Lilongwe',
                USDMXN: 'Mexico City',
                USDMYR: 'Kuala Lumpur',
                USDMZN: 'Maputo',
                USDNAD: 'Windhoek',
                USDNGN: 'Abuja',
                USDNIO: 'Managua',
                USDNOK: 'Oslo',
                USDNPR: 'Kathmandu',
                USDNZD: 'Wellington',
                USDOMR: 'Muscat',
                USDPAB: 'Panama City',
                USDPEN: 'Lima',
                USDPGK: 'Port Moresby',
                USDPHP: 'Manila',
                USDPKR: 'Islamabad',
                USDPLN: 'Warsaw',
                USDPYG: 'Asunción',
                USDQAR: 'Doha',
                USDRON: 'Bucharest',
                USDRSD: 'Belgrade',
                USDRUB: 'Moscow',
                USDRWF: 'Kigali',
                USDSAR: 'Riyadh',
                USDSBD: 'Honiara',
                USDSCR: 'Victoria',
                USDSDG: 'Khartoum',
                USDSEK: 'Stockholm',
                USDSGD: 'Singapore',
                USDSHP: 'Jamestown',
                USDSLE: 'Freetown',
                USDSLL: 'Freetown',
                USDSOS: 'Mogadishu',
                USDSRD: 'Paramaribo',
                USDSTD: 'São Tomé',
                USDSVC: 'San Salvador',
                USDSYP: 'Damascus',
                USDSZL: 'Mbabane',
                USDTHB: 'Bangkok',
                USDTJS: 'Dushanbe',
                USDTMT: 'Ashgabat',
                USDTND: 'Tunis',
                USDTOP: 'Nukualofa',
                USDTRY: 'Ankara',
                USDTTD: 'Port of Spain',
                USDTWD: 'Taipei',
                USDTZS: 'Dodoma',
                USDUAH: 'Kyiv',
                USDUGX: 'Kampala',
                USDUYU: 'Montevideo',
                USDUZS: 'Tashkent',
                USDVEF: 'Caracas',
                USDVES: 'Caracas',
                USDVND: 'Hanoi',
                USDVUV: 'Port Vila',
                USDWST: 'Apia',
                USDXAF: 'Yaoundé',
                USDXAG: 'Unknown', // Silver does not have a city
                USDXAU: 'Unknown', // Gold does not have a city
                USDXCD: 'Saint John\'s',
                USDXDR: 'Unknown', // Special Drawing Rights does not have a city
                USDXOF: 'Bamako',
                USDXPF: 'Papeete',
                USDYER: 'Sana\'a',
                USDZAR: 'Pretoria',
                USDZMK: 'Lusaka', // Old currency, now replaced by ZMW but we're keeping it anyway
                USDZMW: 'Lusaka',
                USDZWL: 'Harare',
            };

            const currencyRatesDiv = document.getElementById('currency-rates');
            currencyRatesDiv.innerHTML = ''; // Clear previous content
    
            topRates.forEach(([currency, rate]) => {
                const city = cityMap[currency] || 'Unknown City';
                const rateElement = document.createElement('p');
                rateElement.textContent = `${currency}: ${rate} (City: ${city})`;
                currencyRatesDiv.appendChild(rateElement);
            });
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}
fetchUSDRates();

