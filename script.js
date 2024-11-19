document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModal');
    const modalContainer = document.getElementById('modalContainer');
    const body = document.body;

    const modals = [
        { title: "Welcome!", content: "This is the first modal.", icon: "fas fa-smile", bgColor: "bg-red-500" },
        { title: "Info", content: "Here's some information.", icon: "fas fa-info-circle", bgColor: "bg-green-500" },
        { title: "Alert", content: "This is an alert modal.", icon: "fas fa-exclamation-triangle", bgColor: "bg-yellow-500" },
        { title: "Success", content: "Operation was successful.", icon: "fas fa-check-circle", bgColor: "bg-blue-500" },
        { title: "Warning", content: "This is a warning modal.", icon: "fas fa-exclamation-circle", bgColor: "bg-orange-500" },
        { title: "Error", content: "An error has occurred.", icon: "fas fa-times-circle", bgColor: "bg-purple-500" },
        { title: "Notice", content: "Please take note of this.", icon: "fas fa-bell", bgColor: "bg-pink-500" },
        { title: "Update", content: "Here's an update for you.", icon: "fas fa-sync-alt", bgColor: "bg-teal-500" },
        { title: "Reminder", content: "Don't forget this.", icon: "fas fa-calendar-check", bgColor: "bg-indigo-500" },
        { title: "Goodbye", content: "This is the last modal.", icon: "fas fa-hand-peace", bgColor: "bg-gray-500" }
    ];

    let currentModalIndex = 0;

    openModalButton.addEventListener('click', () => {
        showModal(currentModalIndex);
    });

    function showModal(index) {
        if (index >= modals.length) return;

        const modalData = modals[index];
        const modalElement = document.createElement('div');
        modalElement.className = `bg-white p-6 rounded shadow-lg w-1/3 ${modalData.bgColor}`;
        modalElement.innerHTML = `
            <div class="flex items-center mb-4">
                <i class="${modalData.icon} text-3xl mr-3"></i>
                <h2 class="text-xl font-bold">${modalData.title}</h2>
            </div>
            <p class="mb-4">${modalData.content}</p>
            <div class="flex justify-end">
                <button class="closeModal bg-gray-300 text-black px-4 py-2 rounded mr-2">Tutup</button>
                <button class="nextModal bg-white text-black px-4 py-2 rounded">Next Modal</button>
            </div>
        `;

        const nextButton = modalElement.querySelector('.nextModal');
        const closeButton = modalElement.querySelector('.closeModal');

        nextButton.addEventListener('click', () => {
            modalElement.remove();
            showModal(index + 1);
        });

        closeButton.addEventListener('click', () => {
            modalElement.remove();
            modalContainer.classList.add('hidden');
        });

        modalContainer.appendChild(modalElement);
        modalContainer.classList.remove('hidden');
    }
});