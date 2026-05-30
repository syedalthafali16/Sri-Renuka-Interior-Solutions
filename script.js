// ==================== SCRIPT.JS ====================

// DOM Elements
const themeBtn = document.getElementById('themeBtn');
const menuBtn = document.getElementById('menuBtn');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryContainer = document.getElementById('galleryContainer');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close-modal');
const submitBtn = document.getElementById('submitBtn');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const currentSectionSpan = document.getElementById('currentSection');

// ========== PORTFOLIO DATA (Updated with your actual folder structure) ==========
const portfolioItems = [
  // Living Rooms (from Livingroom folder)
  { category: "living", title: "Elegant Living Room", label: "Modern Comfort", imageUrl: "images/Livingroom/Livingroom1.jpg" },
  { category: "living", title: "Minimalist Serene Hall", label: "Neutral Palette", imageUrl: "images/Livingroom/Livingroom2.jpg" },
  { category: "living", title: "Luxury Living by RIS", label: "Velvet & Marble", imageUrl: "images/Livingroom/Livingroom3.jpg" },
  { category: "living", title: "Contemporary Cozy", label: "Warm Tones", imageUrl: "images/Livingroom/Livingroom4.jpg" },
  { category: "living", title: "Modern Living Space", label: "Elegant Design", imageUrl: "images/Livingroom/Livingroom5.jpg" },
  { category: "living", title: "Classic Living Room", label: "Timeless Style", imageUrl: "images/Livingroom/Livingroom6.jpg" },
  
  // Furniture (from Furniture folder)
  { category: "furniture", title: "Luxury Sofa Set", label: "Italian Design", imageUrl: "images/Furniture/Furniture1.png" },
  { category: "furniture", title: "Custom Wooden Dining", label: "Solid Teak", imageUrl: "images/Furniture/Furniture2.png" },
  { category: "furniture", title: "Modern TV Console", label: "Walnut Finish", imageUrl: "images/Furniture/Furniture3.jpg" },
  { category: "furniture", title: "Elegant Bed Frame", label: "Upholstered", imageUrl: "images/Furniture/Furniture4.jpg" },
  { category: "furniture", title: "Designer Accent Chair", label: "Statement Piece", imageUrl: "images/Furniture/Furniture5.jpg" },
  { category: "furniture", title: "Modern Wardrobe", label: "Sliding Doors", imageUrl: "images/Furniture/Furniture6.png" },
  
  // Kitchens (from Kitchens folder)
  { category: "kitchen", title: "Modular Kitchen", label: "Handle-less Design", imageUrl: "images/Kitchens/Kitchen1.jpg" },
  { category: "kitchen", title: "Warm Wood Kitchen", label: "Rustic Charm", imageUrl: "images/Kitchens/Kitchen2.jpg" },
  { category: "kitchen", title: "Italian Marble Top", label: "Luxury Finish", imageUrl: "images/Kitchens/Kitchen3.jpg" },
  { category: "kitchen", title: "Contemporary Kitchen", label: "High Gloss", imageUrl: "images/Kitchens/Kitchen4.jpg" },
  { category: "kitchen", title: "Modern L-Shape Kitchen", label: "Efficient Design", imageUrl: "images/Kitchens/Kitchen5.png" },
  { category: "kitchen", title: "Premium Kitchen Setup", label: "Luxury Appliances", imageUrl: "images/Kitchens/Kitchen6.png" },
  
  // Bedrooms (from Bedrooms folder)
  { category: "bedroom", title: "Master Suite", label: "Ambient Lighting", imageUrl: "images/Bedrooms/Bedroom1.jpg" },
  { category: "bedroom", title: "Modern Panel Headboard", label: "Velvet Accent", imageUrl: "images/Bedrooms/Bedroom2.jpg" },
  { category: "bedroom", title: "Minimalist Grey", label: "Calm Retreat", imageUrl: "images/Bedrooms/Bedroom3.jpg" },
  { category: "bedroom", title: "Royal Bedroom", label: "Gold Details", imageUrl: "images/Bedrooms/Bedroom4.jpg" },
  { category: "bedroom", title: "Smart Storage Bedroom", label: "Functional Design", imageUrl: "images/Bedrooms/Bedroom5.jpg" },
  { category: "bedroom", title: "Luxury Master Bedroom", label: "Elegant Suite", imageUrl: "images/Bedrooms/Bedroom6.jpg" },
  
  // Kids Rooms (from KidsRoom folder)
  { category: "kids", title: "Playful Jungle Theme", label: "Adventure", imageUrl: "images/KidsRoom/KidsRoom1.jpg" },
  { category: "kids", title: "Princess Room", label: "Soft Pink", imageUrl: "images/KidsRoom/KidsRoom2.jpg" },
  { category: "kids", title: "Space Explorer", label: "Starry Ceiling", imageUrl: "images/KidsRoom/KidsRoom3.jpg" },
  { category: "kids", title: "Ocean Explorer Room", label: "Blue Waves", imageUrl: "images/KidsRoom/KidsRoom4.jpg" },
  { category: "kids", title: "Creative Study Nook", label: "Bright & Fun", imageUrl: "images/KidsRoom/KidsRoom5.jpg" },
  { category: "kids", title: "Cartoon Theme Room", label: "Colorful", imageUrl: "images/KidsRoom/KidsRoom6.jpg" },
  
  // Commercial / Common Areas (from Common Areas folder)
  { category: "commercial", title: "Modern Dining Area", label: "Rattan Lighting", imageUrl: "images/Common Areas/CommonArea1.jpg" },
  { category: "commercial", title: "Balcony Oasis", label: "Vertical Garden", imageUrl: "images/Common Areas/CommonArea2.jpg" },
  { category: "commercial", title: "Commercial Office", label: "Workspace", imageUrl: "images/Common Areas/CommonArea3.jpg" },
  { category: "commercial", title: "Reception Lounge", label: "Executive Style", imageUrl: "images/Common Areas/CommonArea4.jpg" },
  { category: "commercial", title: "Conference Room", label: "Professional Setup", imageUrl: "images/Common Areas/CommonArea5.jpg" },
  { category: "commercial", title: "Waiting Area", label: "Comfortable Seating", imageUrl: "images/Common Areas/CommonArea6.jpg" },
  
  // 3D Designs (from 3D folder)
  { category: "3d", title: "Living Room 3D", label: "Photorealistic", imageUrl: "images/3D/3d1.jpg" },
  { category: "3d", title: "Kitchen Visualization", label: "Detailed Render", imageUrl: "images/3D/3d2.jpg" },
  { category: "3d", title: "Bedroom Concept", label: "3D Precision", imageUrl: "images/3D/3d3.jpg" },
  { category: "3d", title: "Commercial Space 3D", label: "Office Layout", imageUrl: "images/3D/3d4.jpg" },
  { category: "3d", title: "Bathroom Rendering", label: "Luxe Design", imageUrl: "images/3D/3d5.jpg" },
  { category: "3d", title: "Exterior 3D Model", label: "Facade Design", imageUrl: "images/3D/3d6.jpg" }
];

function getCategoryName(cat) {
  const names = { living: 'Living Room', furniture: 'Furniture', kitchen: 'Kitchen', bedroom: 'Bedroom', kids: 'Kids Room', commercial: 'Commercial', '3d': '3D Design' };
  return names[cat] || cat;
}

let currentCategory = 'living';

function renderGallery(category) {
  if (!galleryContainer) return;
  currentCategory = category;
  const filtered = portfolioItems.filter(item => item.category === category);
  
  if (filtered.length === 0) {
    galleryContainer.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px;"><i class="fas fa-images"></i> No photos in this category. Add your images to the folder</div>`;
    return;
  }
  
  galleryContainer.innerHTML = filtered.map((item) => {
    return `
      <div class="gallery-item" data-title="${item.title}" data-label="${item.label}" data-imgurl="${item.imageUrl}">
        <div class="gallery-img" style="background-image: url('${item.imageUrl}'); background-size: cover; background-position: center;"></div>
        <div class="gallery-caption">
          <strong>${item.title}</strong> <span>✦ ${getCategoryName(item.category)}</span>
        </div>
      </div>
    `;
  }).join('');
  
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const title = item.dataset.title;
      const label = item.dataset.label;
      const imgUrl = item.dataset.imgurl;
      openModal(title, label, imgUrl);
    });
  });
}

function openModal(title, label, imgUrl) {
  if (!modal || !modalImage) return;
  modalImage.src = imgUrl;
  modalImage.onerror = () => { modalImage.src = 'https://via.placeholder.com/800x600?text=Add+Your+Photo+Here'; };
  modalCaption.innerHTML = `<strong>${title}</strong> — ${label}`;
  modal.style.display = 'flex';
}

function closeModalFunc() {
  if (modal) modal.style.display = 'none';
}

// ========== DARK / LIGHT MODE ==========
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const icon = themeBtn?.querySelector('i');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (icon) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const icon = themeBtn?.querySelector('i');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    if (icon) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if (icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
}

// ========== SECTION INDICATOR (Scroll Spy) ==========
function updateSectionIndicator() {
  const sections = document.querySelectorAll('section');
  let current = '';
  const scrollPos = window.scrollY + 150;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  if (current) {
    const sectionNames = { home: 'Home', about: 'About', services: 'Services', portfolio: 'Portfolio', contact: 'Contact' };
    if (currentSectionSpan) currentSectionSpan.textContent = sectionNames[current] || current;
    
    // Update active state for desktop links
    document.querySelectorAll('.nav-links li a').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
}

// Scroll indicator click to go to about section
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ========== FILTERS ==========
function initFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderGallery(category);
    });
  });
}

// ========== MOBILE MENU (FIXED) ==========
function openMobileMenu() {
  if (mobileNavOverlay) {
    mobileNavOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  if (mobileNavOverlay) {
    mobileNavOverlay.classList.remove('active');
    document.body.style.overflow = '';
    // Reset menu button icon
    if (menuBtn) {
      const icon = menuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
}

function initMobileMenu() {
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (mobileNavOverlay.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
        // Change menu button to X
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    });
  }
  
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMobileMenu);
  }
  
  // Close menu when clicking on a mobile link
  document.querySelectorAll('.mobile-nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
  
  // Close menu when clicking outside (on overlay background)
  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', (e) => {
      if (e.target === mobileNavOverlay) {
        closeMobileMenu();
      }
    });
  }
}

// ========== CONTACT FORM ==========
function initContactForm() {
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const name = contactName?.value.trim();
      const email = contactEmail?.value.trim();
      if (!name || !email) {
        alert('Please fill in your name and contact details');
        return;
      }
      alert(`✨ Thank you ${name}! We'll get back to you at ${email} within 24 hours.`);
      if (contactName) contactName.value = '';
      if (contactEmail) contactEmail.value = '';
    });
  }
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderGallery('living');
  initFilters();
  initMobileMenu();
  initContactForm();
  initSmoothScroll();
  
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (closeModal) closeModal.addEventListener('click', closeModalFunc);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModalFunc(); });
  
  window.addEventListener('scroll', updateSectionIndicator);
  updateSectionIndicator();
});