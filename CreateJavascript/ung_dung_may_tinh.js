     function calculate(operation) {
                let so1 = parseFloat(document.getElementById("so1").value) || 0;
                let so2 = parseFloat(document.getElementById("so2").value) || 0;
                let operations = {
                    '+': so1 + so2,
                    '-': so1 - so2,
                };
                document.getElementById("result").innerHTML = "Kết quả: " + operations[operation];
            }


