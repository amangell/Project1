
async function fetchExchangeRates() {
    try {
        const response = await fetch('http://api.exchangerate.host/live?access_key=2e6db9098796585b84e8bc29146194b1');
        const data = await response.json();
        return data.quotes; // Return the rates for further use
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

            //used AI to generate the cities to save time. Some of these seem wrong, but I'll go with it for now. I also now understand why databases are useful.
            const cityMap = {
                USDAED: { name: 'Abu Dhabi', lat: 24.4539, lon: 54.3773 },
                USDAFN: { name: 'Kabul', lat: 34.5553, lon: 69.2075 },
                USDALL: { name: 'Tirana', lat: 41.3275, lon: 19.8189 },
                USDAMD: { name: 'Yerevan', lat: 40.1792, lon: 44.4991 },
                USDANG: { name: 'Willemstad', lat: 12.1001, lon: -68.9335 },
                USDAOA: { name: 'Luanda', lat: -8.8390, lon: 13.2894 },
                USDARS: { name: 'Buenos Aires', lat: -34.6037, lon: -58.3816 },
                USDAUD: { name: 'Canberra', lat: -35.2809, lon: 149.1300 },
                USDAWG: { name: 'Oranjestad', lat: 12.5111, lon: -70.0212 },
                USDAZN: { name: 'Baku', lat: 40.4093, lon: 49.8671 },
                USDBAM: { name: 'Sarajevo', lat: 43.8486, lon: 18.3564 },
                USDBBD: { name: 'Bridgetown', lat: 13.1060, lon: -59.6131 },
                USDBDT: { name: 'Dhaka', lat: 23.8103, lon: 90.4125 },
                USDBGN: { name: 'Sofia', lat: 42.6977, lon: 23.3219 },
                USDBHD: { name: 'Manama', lat: 26.0275, lon: 50.5528 },
                USDBIF: { name: 'Gitega', lat: -3.4260, lon: 29.9309 },
                USDBMD: { name: 'Hamilton', lat: 32.2942, lon: -64.7814 },
                USDBND: { name: 'Bandar Seri Begawan', lat: 4.9031, lon: 114.9415 },
                USDBOB: { name: 'Sucre', lat: -19.0333, lon: -65.2619 },
                USDBRL: { name: 'Brasília', lat: -15.7801, lon: -47.9292 },
                USDBSD: { name: 'Nassau', lat: 25.0343, lon: -77.3963 },
                USDBTC: { name: 'Unknown', lat: null, lon: null },
                USDBTN: { name: 'Thimphu', lat: 27.5149, lon: 89.6330 },
                USDBWP: { name: 'Gaborone', lat: -24.6282, lon: 25.9231 },
                USDBYN: { name: 'Minsk', lat: 53.9045, lon: 27.5590 },
                USDBYR: { name: 'Minsk', lat: 53.9045, lon: 27.5590 }, // Old currency
                USDBZD: { name: 'Belmopan', lat: 17.2510, lon: -88.7590 },
                USDCAD: { name: 'Ottawa', lat: 45.4215, lon: -75.6972 },
                USDCDF: { name: 'Kinshasa', lat: -4.4419, lon: 15.2663 },
                USDCHF: { name: 'Bern', lat: 46.9480, lon: 7.4474 },
                USDCLF: { name: 'Santiago', lat: -33.4489, lon: -70.6693 },
                USDCLP: { name: 'Santiago', lat: -33.4489, lon: -70.6693 },
                USDCNY: { name: 'Beijing', lat: 39.9042, lon: 116.4074 },
                USDCNH: { name: 'Beijing', lat: 39.9042, lon: 116.4074 },
                USDCOP: { name: 'Bogotá', lat: 4.6110, lon: -74.0823 },
                USDCRC: { name: 'San José', lat: 9.9281, lon: -84.0907 },
                USDCUC: { name: 'Havana', lat: 23.1136, lon: -82.3666 },
                USDCUP: { name: 'Havana', lat: 23.1136, lon: -82.3666 },
                USDCVE: { name: 'Praia', lat: 14.9330, lon: -23.5139 },
                USDCKZ: { name: 'Astana', lat: 51.1694, lon: 71.4491 },
                USDKZT: { name: 'Astana', lat: 51.1694, lon: 71.4491 },
                USDNOK: { name: 'Oslo', lat: 59.9139, lon: 10.7522 },
                USDGEL: { name: 'Tbilisi', lat: 41.7151, lon: 44.8271 },
                USDGGP: { name: 'St. Peter Port', lat: 49.4616, lon: -2.5303 },
                USDGHS: { name: 'Accra', lat: 5.6037, lon: -0.1870 },
                USDGIP: { name: 'Gibraltar', lat: 36.1408, lon: -5.3536 },
                USDGMD: { name: 'Banjul', lat: 13.4549, lon: -16.5790 },
                USDGNF: { name: 'Conakry', lat: 9.6412, lon: -13.5784 },
                USDGTQ: { name: 'Guatemala City', lat: 14.6349, lon: -90.5069 },
                USDGYD: { name: 'Georgetown', lat: 6.8013, lon: -58.1551 },
                USDHKD: { name: 'Hong Kong', lat: 22.3964, lon: 114.1095 },
                USDHNL: { name: 'Tegucigalpa', lat: 14.0723, lon: -87.1921 },
                USDHRK: { name: 'Zagreb', lat: 45.8150, lon: 15.9819 },
                USDHTG: { name: 'Port-au-Prince', lat: 18.5392, lon: -72.3350 },
                USDHUF: { name: 'Budapest', lat: 47.4979, lon: 19.0402 },
                USDIDR: { name: 'Jakarta', lat: -6.2088, lon: 106.8456 },
                USDILS: { name: 'Jerusalem', lat: 31.7683, lon: 35.2137 },
                USDIMP: { name: 'Douglas', lat: 54.1528, lon: -4.4823 },
                USDINR: { name: 'New Delhi', lat: 28.6139, lon: 77.2090 },
                USDIQD: { name: 'Baghdad', lat: 33.3152, lon: 44.3661 },
                USDIRR: { name: 'Tehran', lat: 35.6762, lon: 51.3890 },
                USDISK: { name: 'Reykjavik', lat: 64.1355, lon: -21.8954 },
                USDJEP: { name: 'Saint Helier', lat: 49.1865, lon: -2.1005 },
                USDJMD: { name: 'Kingston', lat: 17.9714, lon: -76.7936 },
                USDJOD: { name: 'Amman', lat: 31.9516, lon: 35.9304 },
                USDJPY: { name: 'Tokyo', lat: 35.682839, lon: 139.759455 },
                USDKES: { name: 'Nairobi', lat: -1.2864, lon: 36.8172 },
                USDKGS: { name: 'Bishkek', lat: 42.8746, lon: 74.5698 },
                USDKHR: { name: 'Phnom Penh', lat: 11.5564, lon: 104.9282 },
                USDKMF: { name: 'Moroni', lat: -11.7020, lon: 43.2402 },
                USDKPW: { name: 'Pyongyang', lat: 39.0392, lon: 125.7625 },
                USDKRW: { name: 'Seoul', lat: 37.5665, lon: 126.9780 },
                USDKWD: { name: 'Kuwait City', lat: 29.3759, lon: 47.9774 },
                USDKYD: { name: 'George Town', lat: 19.2867, lon: -81.2546 },
                USDKZT: { name: 'Almaty', lat: 43.2220, lon: 76.8512 },
                USDLAK: { name: 'Vientiane', lat: 17.9757, lon: 102.6331 },
                USDLBP: { name: 'Beirut', lat: 33.8938, lon: 35.5018 },
                USDLKR: { name: 'Sri Jayawardenepura Kotte', lat: 6.9271, lon: 79.9585 },
                USDLRD: { name: 'Monrovia', lat: 6.4281, lon: -9.4295 },
                USDLSL: { name: 'Maseru', lat: -29.3134, lon: 27.4897 },
                USDLTL: { name: 'Vilnius', lat: 54.6872, lon: 25.2797 },
                USDLVL: { name: 'Riga', lat: 56.9496, lon: 24.1052 },
                USDLYD: { name: 'Tripoli', lat: 32.8872, lon: 13.1910 },
                USDMAD: { name: 'Rabat', lat: 34.0209, lon: -6.8416 },
                USDMDL: { name: 'Chișinău', lat: 47.0105, lon: 28.9757 },
                USDMGA: { name: 'Antananarivo', lat: -18.8792, lon: 47.5079 },
                USDMKD: { name: 'Skopje', lat: 41.9973, lon: 21.4280 },
                USDMMK: { name: 'Naypyidaw', lat: 19.7454, lon: 96.1445 },
                USDMNT: { name: 'Ulaanbaatar', lat: 47.8864, lon: 106.9057 },
                USDMOP: { name: 'Macau', lat: 22.1987, lon: 113.5439 },
                USDMRU: { name: 'Nouakchott', lat: 18.0780, lon: -15.9780 },
                USDMUR: { name: 'Port Louis', lat: -20.1602, lon: 57.5012 },
                USDMVR: { name: 'Malé', lat: 4.1755, lon: 73.5093 },
                USDMWK: { name: 'Lilongwe', lat: -13.9626, lon: 33.7741 },
                USDMXN: { name: 'Mexico City', lat: 19.4326, lon: -99.1332 },
                USDMYR: { name: 'Kuala Lumpur', lat: 3.139, lon: 101.6869 },
                USDMZN: { name: 'Maputo', lat: -25.9687, lon: 32.5732 },
                USDNAD: { name: 'Windhoek', lat: -22.5597, lon: 17.0834 },
                USDNGN: { name: 'Abuja', lat: 9.0579, lon: 7.4951 },
                USDNIO: { name: 'Managua', lat: 12.1364, lon: -86.2514 },
                USDNOK: { name: 'Oslo', lat: 59.9139, lon: 10.7522 },
                USDNPR: { name: 'Kathmandu', lat: 27.7172, lon: 85.324 },
                USDNZD: { name: 'Wellington', lat: -41.2865, lon: 174.7762 },
                USDOMR: { name: 'Muscat', lat: 23.5884, lon: 58.3823 },
                USDPAB: { name: 'Panama City', lat: 8.9833, lon: -79.5167 },
                USDPEN: { name: 'Lima', lat: -12.0464, lon: -77.0428 },
                USDPGK: { name: 'Port Moresby', lat: -9.4432, lon: 147.1807 },
                USDPHP: { name: 'Manila', lat: 14.5995, lon: 120.9842 },
                USDPKR: { name: 'Islamabad', lat: 33.6844, lon: 73.0479 },
                USDPLN: { name: 'Warsaw', lat: 52.2297, lon: 21.0122 },
                USDPYG: { name: 'Asunción', lat: -25.2637, lon: -57.5759 },
                USDQAR: { name: 'Doha', lat: 25.276987, lon: 51.520008 },
                USDRON: { name: 'Bucharest', lat: 44.4268, lon: 26.1025 },
                USDRSD: { name: 'Belgrade', lat: 44.7866, lon: 20.4489 },
                USDRUB: { name: 'Moscow', lat: 55.7558, lon: 37.6173 },
                USDRWF: { name: 'Kigali', lat: -1.9642, lon: 30.0619 },
                USDSAR: { name: 'Riyadh', lat: 24.7136, lon: 46.6753 },
                USDSBD: { name: 'Honiara', lat: -9.4325, lon: 160.7030 },
                USDSCR: { name: 'Victoria', lat: -4.6167, lon: 55.4512 },
                USDSDG: { name: 'Khartoum', lat: 15.5000, lon: 32.5599 },
                USDSEK: { name: 'Stockholm', lat: 59.3293, lon: 18.0686 },
                USDSGD: { name: 'Singapore', lat: 1.3521, lon: 103.8198 },
                USDSHP: { name: 'Jamestown', lat: -15.9345, lon: -5.7080 },
                USDSLE: { name: 'Freetown', lat: 8.4657, lon: -13.2472 },
                USDSLL: { name: 'Freetown', lat: 8.4657, lon: -13.2472 },
                USDSOS: { name: 'Mogadishu', lat: 2.0469, lon: 45.3182 },
                USDSRD: { name: 'Paramaribo', lat: 5.8663, lon: -55.1679 },
                USDSTD: { name: 'São Tomé', lat: 0.3340, lon: 6.7333 },
                USDSVC: { name: 'San Salvador', lat: 13.6929, lon: -89.2182 },
                USDSYP: { name: 'Damascus', lat: 33.5138, lon: 36.2765 },
                USDSZL: { name: 'Mbabane', lat: -26.3052, lon: 31.1367 },
                USDTHB: { name: 'Bangkok', lat: 13.7563, lon: 100.5018 },
                USDTJS: { name: 'Dushanbe', lat: 38.5599, lon: 68.7870 },
                USDTMT: { name: 'Ashgabat', lat: 37.9601, lon: 58.3261 },
                USDTND: { name: 'Tunis', lat: 33.8869, lon: 9.5375 },
                USDTOP: { name: 'Nukualofa', lat: -21.1394, lon: -175.1982 },
                USDTRY: { name: 'Ankara', lat: 39.9334, lon: 32.8597 },
                USDTTD: { name: 'Port of Spain', lat: 10.6542, lon: -61.5125 },
                USDTWD: { name: 'Taipei', lat: 25.0330, lon: 121.5654 },
                USDTZS: { name: 'Dodoma', lat: -6.1629, lon: 35.7516 },
                USDUAH: { name: 'Kyiv', lat: 50.4501, lon: 30.5234 },
                USDUGX: { name: 'Kampala', lat: 0.3476, lon: 32.5825 },
                USDUYU: { name: 'Montevideo', lat: -34.9011, lon: -56.1645 },
                USDUZS: { name: 'Tashkent', lat: 41.2995, lon: 69.2401 },
                USDVEF: { name: 'Caracas', lat: 10.4880, lon: -66.8792 },
                USDVES: { name: 'Caracas', lat: 10.4880, lon: -66.8792 },
                USDVND: { name: 'Hanoi', lat: 21.0285, lon: 105.8542 },
                USDVUV: { name: 'Port Vila', lat: -17.7332, lon: 168.3219 },
                USDWST: { name: 'Apia', lat: -13.8331, lon: -171.7840 },
                USDXAF: { name: 'Yaoundé', lat: 3.8480, lon: 11.5021 },
                USDXAG: { name: 'Unknown', lat: null, lon: null },
                USDXAU: { name: 'Unknown', lat: null, lon: null },
                USDXCD: { name: 'Saint John\'s', lat: 17.1174, lon: -61.8450 },
                USDXDR: { name: 'Unknown', lat: null, lon: null },
                USDXOF: { name: 'Bamako', lat: 12.6392, lon: -8.0029 },
                USDXPF: { name: 'Papeete', lat: -17.5350, lon: -149.5690 },
                USDYER: { name: 'Sana\'a', lat: 15.3694, lon: 44.1910 },
                USDZAR: { name: 'Pretoria', lat: -25.7461, lon: 28.1881 },
                USDZMK: { name: 'Lusaka', lat: -15.3875, lon: 28.3228 },
                USDZMW: { name: 'Lusaka', lat: -15.3875, lon: 28.3228 },
                USDZWL: { name: 'Harare', lat: -17.8292, lon: 31.0522 },
            };

            async function displayTopRates() {
                const rates = await fetchExchangeRates();
                const rateEntries = Object.entries(rates);
                const topRates = rateEntries.sort((a, b) => b[1] - a[1]).slice(0, 3);
                
                console.log(topRates);
                
                const currencyRatesDiv = document.getElementById('currency-rates');
                currencyRatesDiv.innerHTML = '';
                
                topRates.forEach(([currency, rate]) => {
                    const cityInfo = cityMap[currency];
                    const city = cityInfo ? cityInfo.name : 'Unknown City'; // Access the city name
                    const rateElement = document.createElement('p');
                    rateElement.textContent = `${currency}: ${rate} (City: ${city})`;
                    currencyRatesDiv.appendChild(rateElement);
                });
            }
            

            async function fetchUVIndex(lat, lon) {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=uv_index`);
                const data = await response.json();
                // Assuming you want the maximum UV index from the hourly data
                const maxUV = Math.max(...data.hourly.uv_index);
                return maxUV;
            }

            function calculateRating(rate, uv) {
                if (rate < 1 || uv < 2) return '0/5 - Bad';
                if (rate > 1 && uv >= 2 && uv < 4) return '1/5 - Lame';
                if (rate > 1 && uv >= 4 && uv < 7) return '2/5 - Not It';
                if (rate > 2 && uv >= 7 && uv < 8) return '3/5 - Mid';
                if (rate > 10 && uv >= 8) return '4/5 - Aight';
                if (rate > 20 && uv >= 8) return '5/5 - LETS GO!!';
                return 'N/A'; // In case none of the conditions are met
            }
            
            async function searchExchangeRate(rates) {
                const input = document.getElementById('currency-input').value.toUpperCase();
                const currency = `USD${input}`;
                const rate = rates[currency];
                const resultDiv = document.getElementById('search-result');
                resultDiv.innerHTML = '';
            
                if (rate) {
                    const cityInfo = cityMap[currency];
                    const city = cityInfo ? cityInfo.name : 'Unknown City';
                    const lat = cityInfo ? cityInfo.lat : null;
                    const lon = cityInfo ? cityInfo.lon : null;
            
                    let uv = 'N/A'; // Default value if lat/lon are not available
                    if (lat && lon) {
                        uv = await fetchUVIndex(lat, lon);
                    }
            
                    const rating = calculateRating(rate, uv);
            
                    const resultElement = document.createElement('p');
                    resultElement.textContent = `${currency}: ${rate} (City: ${city} (UV: ${uv}) | Rating: ${rating})`;
                    resultDiv.appendChild(resultElement);
                } else {
                    resultDiv.textContent = 'Currency not found. Please try again.';
                }
            }
            
            document.getElementById('search-button').addEventListener('click', async () => {
                const rates = await fetchExchangeRates();
                await searchExchangeRate(rates);
            });
            displayTopRates();

            document.getElementById('money-image').addEventListener('click', function() {
                const audio = document.getElementById('audio');
                audio.currentTime = 0; // Reset the audio to the beginning
                audio.play(); // Play the audio
            });



