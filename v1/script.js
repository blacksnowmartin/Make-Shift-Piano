document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const notes = {
        'C': 'sounds/C.mp3',
        'C#': 'sounds/Cs.mp3',
        'D': 'sounds/D.mp3',
        'D#': 'sounds/Ds.mp3',
        'E': 'sounds/E.mp3',
        'F': 'sounds/F.mp3',
        'F#': 'sounds/Fs.mp3',
        'G': 'sounds/G.mp3',
        'G#': 'sounds/Gs.mp3',
        'A': 'sounds/A.mp3',
        'A#': 'sounds/As.mp3',
        'B': 'sounds/B.mp3',
    };

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const note = key.getAttribute('data-note');
            playNote(note);
        });
    });

    function playNote(note) {
        const audio = new Audio(notes[note]);
        audio.play();
    }
});
