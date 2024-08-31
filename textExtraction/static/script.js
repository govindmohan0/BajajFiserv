document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', document.getElementById('image').files[0]);

    fetch('/convert', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.text) {
                document.getElementById('output').innerText = data.text;
            } else if (data.message) {
                document.getElementById('output').innerText = data.message;
            } else if (data.error) {
                document.getElementById('output').innerText = data.error;
            }
        })
        .catch(error => console.error('Error:', error));
});
