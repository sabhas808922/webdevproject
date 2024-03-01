// document.addEventListener('DOMContentLoaded', function () {
//     // Sample data for news articles
//     const newsData = [
//         {
//             title: 'Lorem Ipsum News 1',
//             image: 'https://placekitten.com/300/200',
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//         },
//         {
//             title: 'Lorem Ipsum News 2',
//             image: 'https://placekitten.com/301/200',
//             content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//         },
        // Add more news articles as needed
//     ];

//     const newsSection = document.getElementById('news-section');

//     // Populate news articles
//     newsData.forEach(article => {
//         const articleElement = document.createElement('div');
//         articleElement.classList.add('article');

//         const imageElement = document.createElement('img');
//         imageElement.src = article.image;
//         imageElement.alt = article.title;

//         const contentElement = document.createElement('div');
//         contentElement.classList.add('article-content');

//         const titleElement = document.createElement('h2');
//         titleElement.textContent = article.title;

//         const paragraphElement = document.createElement('p');
//         paragraphElement.textContent = article.content;

//         contentElement.appendChild(titleElement);
//         contentElement.appendChild(paragraphElement);

//         articleElement.appendChild(imageElement);
//         articleElement.appendChild(contentElement);

//         newsSection.appendChild(articleElement);
//     });
// });

function showAlert() {
    alert("Button clicked!");
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest1 = document.getElementById('interest1').checked;
    const interest2 = document.getElementById('interest2').checked;
    const dropdownValue = document.getElementById('dropdown').value;

    alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nInterest 1: ${interest1}\nInterest 2: ${interest2}\nDropdown: ${dropdownValue}`);
}

// document.addEventListener('DOMContentLoaded', function () {
//     const menuIcon = document.querySelector('.menu-icon');
//     const navList = document.querySelector('.nav-list');

//     menuIcon.addEventListener('click', function () {
//         navList.classList.toggle('show');
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const parallax-bg = document.getElementById('parallax-bg');
//     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

//     window.addEventListener('scroll', function () {
//         const scrollPercentage = (window.scrollY / scrollHeight) * 100;
//         const backgroundPosition = 10% ${scrollPercentage}%;

//         parallax-bg.style.backgroundImage ; `url('https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg?size=626&ext=jpg'),

//             url('https://img.freepik.com/premium-photo/sunset-mountainsgenerative-ai_218381-14276.jpg?size=626&ext=jpg')`;
//         parallax-bg.style.backgroundSize = 'cover, cover';
//         parallax-bg.style.backgroundPosition = backgroundPosition;
//     });
// });