document.getElementById('rekomendasiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let genre = document.getElementById('genre').value;
    let year = document.getElementById('year').value;
    
    fetch('rekomendasi.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'genre=' + genre + '&year=' + year
    })
    .then(response => response.json())
    .then(data => {
        let rekomendasiList = document.getElementById('rekomendasiList');
        rekomendasiList.innerHTML = '';

        if(data.length > 0) {
            data.forEach(film => {
                let filmDiv = document.createElement('div');
                filmDiv.classList.add('film');

                let img = document.createElement('img');
                img.src = film.image_url;
                filmDiv.appendChild(img);

                let title = document.createElement('p');
                title.textContent = film.title + ' (' + film.year + ')';
                filmDiv.appendChild(title);

                rekomendasiList.appendChild(filmDiv);
            });
        } else {
            rekomendasiList.textContent = 'Tidak ada rekomendasi untuk genre dan tahun yang dipilih.';
        }
    })
    .catch(error => console.error('Error:', error));
});