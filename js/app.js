fetch('ssss')
.then(response => response.json())
.then(result => {
    innserHTML = result.main.temp 
})