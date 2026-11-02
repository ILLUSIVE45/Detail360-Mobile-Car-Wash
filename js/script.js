if (document.getElementById('map')) {
  var map = L.map('map').setView([-25.746, 28.173], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  L.marker([-25.746, 28.173]).addTo(map)
    .bindPopup('<b>Detail360</b><br>We service Pretoria West and surrounding areas.')
    .openPopup();
}

var galleryImages = document.querySelectorAll('.gallery-img');
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightboxImg');
var closeLightbox = document.getElementById('closeLightbox');

if (lightbox) {
  galleryImages.forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      lightbox.style.display = 'flex';
      lightboxImg.src = this.src;
    });
  });

  closeLightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
  
  lightbox.addEventListener('click', function(e) {
    if(e.target === lightbox) lightbox.style.display = 'none';
  });
}

var searchInput = document.getElementById('serviceSearch');
if (searchInput) {
  searchInput.addEventListener('keyup', function() {
    var filter = this.value.toLowerCase();
    var rows = document.querySelectorAll('tbody tr');

    rows.forEach(function(row) {
      var text = row.textContent.toLowerCase();
      if (text.includes(filter)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

var enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    var name = document.getElementById('fullname').value;
    var phone = document.getElementById('phone').value;
    var pkgDropdown = document.getElementById('package');
    var selectedPkg = pkgDropdown.options[pkgDropdown.selectedIndex].text;
    var responseBox = document.getElementById('responseMessage');

    if (name.length < 2) {
      responseBox.style.color = "red";
      responseBox.innerHTML = "Error: Please enter a valid full name.";
      return;
    }
    if (phone.length < 10) {
      responseBox.style.color = "red";
      responseBox.innerHTML = "Error: Please enter a valid phone number (at least 10 digits).";
      return;
    }

    responseBox.style.color = "blue";
    responseBox.innerHTML = "Processing your booking request...";

    setTimeout(function() {
      responseBox.style.color = "green";
      responseBox.innerHTML = "Thank you, " + name + "! Your request for <strong>" + selectedPkg + "</strong> has been received. We will WhatsApp you at " + phone + " shortly to confirm availability.";
      enquiryForm.reset(); 
    }, 1200);
  });
}

var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    var responseBox = document.getElementById('contactResponse');
    
    responseBox.style.color = "blue";
    responseBox.innerHTML = "Sending your email...";

    setTimeout(function() {
      responseBox.style.color = "green";
      responseBox.innerHTML = "Success! Your message has been sent to info@detail360.co.za. We will reply soon.";
      contactForm.reset();
    }, 1500);
  });
}