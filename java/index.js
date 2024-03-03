function toggleMenu() {
    var menuList = document.getElementById('menuList');
    menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === '') ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel img');
    const totalItems = items.length;

    function showItem(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const newTransformValue = -currentIndex * 100 + '%';
        document.querySelector('.carousel').style.transform = 'translateX(' + newTransformValue + ')';
    }

    function nextItem() {
        showItem(currentIndex + 1);
    }

    function prevItem() {
        showItem(currentIndex - 1);
    }

    // Event listeners for next and previous buttons
    document.querySelector('.carousel-container').addEventListener('mouseover', function () {
        document.querySelector('.carousel-container').style.cursor = 'grab';
    });

    document.querySelector('.carousel-container').addEventListener('mouseout', function () {
        document.querySelector('.carousel-container').style.cursor = 'default';
    });

    document.querySelector('.carousel-container').addEventListener('mousedown', function () {
        document.querySelector('.carousel-container').style.cursor = 'grabbing';
    });

    document.querySelector('.carousel-container').addEventListener('mouseup', function () {
        document.querySelector('.carousel-container').style.cursor = 'grab';
    });

    document.querySelector('.carousel-container').addEventListener('click', nextItem);
    document.querySelector('.carousel-container').addEventListener('contextmenu', function (e) {
        e.preventDefault();
        prevItem();
    });

    // Autoplay (uncomment the line below if you want autoplay)
    // setInterval(nextItem, 3000);
});

const carousel = document.querySelector(".carousel");

let isDragStart = flase

const dragging = (e) => {
    if(!isDragStart) return;
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);
