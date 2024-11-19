document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModal');
    const modalContainer = document.getElementById('modalContainer');
    const body = document.body;

    const modals = [{
            title: "Welcome!",
            content: "This is the first modal.",
            icon: "fas fa-smile",
            bgColor: "bg-red-500",
            details: "Welcome to our application. We hope you have a great experience using it."
        },
        {
            title: "Info",
            content: "Here's some information.",
            icon: "fas fa-info-circle",
            bgColor: "bg-green-500",
            details: "This section provides you with all the necessary information you need to get started."
        },
        {
            title: "Alert",
            content: "This is an alert modal.",
            icon: "fas fa-exclamation-triangle",
            bgColor: "bg-yellow-500",
            details: "Please pay attention to this alert. It contains important information regarding your account."
        },
        {
            title: "Success",
            content: "Operation was successful.",
            icon: "fas fa-check-circle",
            bgColor: "bg-blue-500",
            details: "Congratulations! Your operation was completed successfully without any issues."
        },
        {
            title: "Warning",
            content: "This is a warning modal.",
            icon: "fas fa-exclamation-circle",
            bgColor: "bg-orange-500",
            details: "This is a warning. Please proceed with caution to avoid any potential issues."
        },
        {
            title: "Error",
            content: "An error has occurred.",
            icon: "fas fa-times-circle",
            bgColor: "bg-purple-500",
            details: "Unfortunately, an error has occurred. Please try again later or contact support."
        },
        {
            title: "Notice",
            content: "Please take note of this.",
            icon: "fas fa-bell",
            bgColor: "bg-pink-500",
            details: "This is a notice to inform you about recent changes to our policy."
        },
        {
            title: "Update",
            content: "Here's an update for you.",
            icon: "fas fa-sync-alt",
            bgColor: "bg-teal-500",
            details: "We have recently updated our application to include new features and improvements."
        },
        {
            title: "Reminder",
            content: "Don't forget this.",
            icon: "fas fa-calendar-check",
            bgColor: "bg-indigo-500",
            details: "This is a friendly reminder to complete your pending tasks before the deadline."
        },
        {
            title: "Goodbye",
            content: "This is the last modal.",
            icon: "fas fa-hand-peace",
            bgColor: "bg-gray-500",
            details: "Thank you for using our application. We hope to see you again soon!"
        }
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
            <p class="mb-4 text-sm">${modalData.details}</p>
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