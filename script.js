let playlist = [];

function addSong() {
    const songName = document.getElementById("songName").value;
    const artistName = document.getElementById("artistName").value;

    if (songName === "" || artistName === "") {
        alert("Please enter both Song Name and Artist Name");
        return;
    }

    playlist.push({
        song: songName,
        artist: artistName
    });

    document.getElementById("songName").value = "";
    document.getElementById("artistName").value = "";

    displayPlaylist();
}

function displayPlaylist() {
    const playlistElement = document.getElementById("playlist");
    playlistElement.innerHTML = "";

    playlist.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.song} - ${item.artist}</span>
            <button class="delete-btn" onclick="deleteSong(${index})">
                Delete
            </button>
        `;

        playlistElement.appendChild(li);
    });
}

function deleteSong(index) {
    playlist.splice(index, 1);
    displayPlaylist();
}