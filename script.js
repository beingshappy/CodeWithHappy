async function loadNotes() {
  try {
    const res = await fetch('http://localhost:5000/api/notes');
    const notes = await res.json();
    const grid = document.getElementById('notes-grid');
    grid.innerHTML = '';
    notes.forEach(note => {
      const d = document.createElement('div');
      d.className = 'notes-card';
      d.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="${note.title}">
        <h3>${note.title}</h3>
        <p>${note.subject || 'Notes available for download'}</p>
        <div class="btn-group">
          <a href="http://localhost:5000${note.fileUrl}" class="btn-notes" download>PDF Notes</a>
        </div>`;
      grid.appendChild(d);
    });
  } catch (err) {
    console.error(err);
  }
}

window.addEventListener('DOMContentLoaded', loadNotes);



function scrollToTop() {
    document.querySelector('.scroll-content').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function scrollToBottom() {
    const content = document.querySelector('.scroll-content');
    content.scrollTo({
      top: content.scrollHeight,
      behavior: 'smooth'
    });
  }



  // contact page
  const form = document.getElementById('contactForm');
const popup = document.getElementById('thankYouPopup');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mqaleylq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      popup.classList.remove('hidden');
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    alert("Error: " + err.message);
  }
});

function closePopup() {
  popup.classList.add('hidden');
}



// project sec
