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

    const reportIcon = document.getElementById('reportIcon');
    const reportModalContainer = document.getElementById('reportModalContainer');

    reportIcon.addEventListener('click', () => {
        showReportModal();
    });

    function showModal(index) {
        if (index >= modals.length) return;

        const modalData = modals[index];
        const modalElement = document.createElement('div');
        modalElement.className = `bg-gray-800 text-white p-6 rounded shadow-lg w-1/3 ${modalData.bgColor}`;
        modalElement.innerHTML = `
            <div class="flex items-center mb-4">
                <i class="${modalData.icon} text-3xl mr-3"></i>
                <h2 class="text-xl font-bold">${modalData.title}</h2>
            </div>
            <p class="mb-4">${modalData.content}</p>
            <p class="mb-4 text-sm">${modalData.details}</p>
            <div class="flex justify-end">
                <button class="closeModal bg-gray-300 text-black px-4 py-2 rounded mr-2">Tutup</button>
                ${index === modals.length - 1 ? 
                    '<button class="doneModal bg-gray-700 text-white px-4 py-2 rounded">Done</button>' : 
                    '<button class="nextModal bg-gray-700 text-white px-4 py-2 rounded">Next Modal</button>'
                }
            </div>
        `;

        const nextButton = modalElement.querySelector('.nextModal');
        const closeButton = modalElement.querySelector('.closeModal');
        const doneButton = modalElement.querySelector('.doneModal');

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                modalElement.remove();
                showModal(index + 1);
            });
        }

        if (doneButton) {
            doneButton.addEventListener('click', () => {
                closeModal();
            });
        }

        closeButton.addEventListener('click', () => {
            closeModal();
        });

        modalContainer.addEventListener('click', (event) => {
            if (event.target === modalContainer) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function escKeyListener(event) {
            if (event.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escKeyListener);
            }
        });

        function closeModal() {
            modalElement.remove();
            modalContainer.classList.add('hidden');
        }

        modalContainer.appendChild(modalElement);
        modalContainer.classList.remove('hidden');
    }

    function showReportModal() {
        const reportModalElement = document.createElement('div');
        reportModalElement.className = 'bg-white text-black p-6 rounded shadow-lg w-1/3 relative';
        reportModalElement.innerHTML = `
            <h2 class="text-xl font-bold mb-4">Laporkan Artikel</h2>
            <form id="reportForm">
                <div class="mb-4">
                    <label class="block mb-2">Pilih alasan:</label>
                    <div class="reason-option">
                        <input type="radio" name="reason" value="konten seksual" id="sexualContent" class="mr-2">
                        <label for="sexualContent">Konten Seksual</label>
                    </div>
                    <div class="reason-option">
                        <input type="radio" name="reason" value="konten kekerasan" id="violentContent" class="mr-2">
                        <label for="violentContent">Konten Kekerasan atau Menjijikkan</label>
                    </div>
                    <div class="reason-option">
                        <input type="radio" name="reason" value="konten kebencian" id="hateContent" class="mr-2">
                        <label for="hateContent">Konten Kebencian atau Pelecehan</label>
                    </div>
                    <div class="reason-option">
                        <input type="radio" name="reason" value="tindakan berbahaya" id="dangerousActs" class="mr-2">
                        <label for="dangerousActs">Tindakan Berbahaya</label>
                    </div>
                    <div class="reason-option">
                        <input type="radio" name="reason" value="spam" id="spam" class="mr-2">
                        <label for="spam">Spam atau Misinformasi</label>
                    </div>
                    <div class="reason-option">
                        <input type="radio" name="reason" value="masalah hukum" id="legalIssues" class="mr-2">
                        <label for="legalIssues">Masalah Hukum</label>
                    </div>
                    <div class="reason-option">
                        <input type="radio" name="reason" value="teks bermasalah" id="problematicText" class="mr-2">
                        <label for="problematicText">Teks Bermasalah</label>
                    </div>
                </div>
                <div id="additionalInfoContainer" class="mb-4 hidden">
                    <label for="additionalInfo" class="block mb-2">Pilih laporan tambahan:</label>
                    <select id="additionalInfo" class="w-full p-2 border rounded">
                        <!-- Options will be dynamically added here -->
                    </select>
                </div>
                <button type="button" id="nextReportStep" class="bg-gray-400 text-white px-4 py-2 rounded" disabled>Berikutnya</button>
                <button type="button" class="closeModal bg-gray-300 text-black px-4 py-2 rounded mt-4">Tutup</button>
            </form>
        `;

        const additionalInfoContainer = reportModalElement.querySelector('#additionalInfoContainer');
        const additionalInfoSelect = reportModalElement.querySelector('#additionalInfo');
        const nextReportStepButton = reportModalElement.querySelector('#nextReportStep');
        const closeModalButton = reportModalElement.querySelector('.closeModal');

        const radioButtons = reportModalElement.querySelectorAll('input[name="reason"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                additionalInfoSelect.innerHTML = ''; // Clear previous options

                let options = [];
                switch (radio.value) {
                    case 'konten seksual':
                        options = ['Detail Tambahan A', 'Detail Tambahan B'];
                        break;
                    case 'konten kekerasan':
                        options = ['Detail Tambahan C', 'Detail Tambahan D'];
                        break;
                    case 'konten kebencian':
                        options = ['Detail Tambahan E', 'Detail Tambahan F'];
                        break;
                    case 'tindakan berbahaya':
                        options = ['Detail Tambahan G', 'Detail Tambahan H'];
                        break;
                    case 'spam':
                        options = ['Detail Tambahan I', 'Detail Tambahan J'];
                        break;
                    case 'masalah hukum':
                        options = ['Detail Tambahan K', 'Detail Tambahan L'];
                        break;
                    case 'teks bermasalah':
                        options = ['Detail Tambahan M', 'Detail Tambahan N'];
                        break;
                }

                options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option;
                    opt.textContent = option;
                    additionalInfoSelect.appendChild(opt);
                });

                additionalInfoSelect.insertAdjacentHTML('afterbegin', '<option value="">Pilih...</option>');
                additionalInfoSelect.value = '';
                nextReportStepButton.classList.add('bg-gray-400');
                nextReportStepButton.classList.remove('bg-blue-600');
                nextReportStepButton.disabled = true;

                // Move the additional info container below the selected radio button
                const reasonOption = radio.parentElement;
                reasonOption.insertAdjacentElement('afterend', additionalInfoContainer);
                additionalInfoContainer.classList.remove('hidden');
            });
        });

        additionalInfoSelect.addEventListener('change', () => {
            if (additionalInfoSelect.value) {
                nextReportStepButton.classList.remove('bg-gray-400');
                nextReportStepButton.classList.add('bg-blue-600');
                nextReportStepButton.disabled = false;
            } else {
                nextReportStepButton.classList.remove('bg-blue-600');
                nextReportStepButton.classList.add('bg-gray-400');
                nextReportStepButton.disabled = true;
            }
        });

        nextReportStepButton.addEventListener('click', () => {
            showOptionalReportModal();
            reportModalElement.remove();
        });

        closeModalButton.addEventListener('click', () => {
            closeReportModal();
        });

        reportModalContainer.addEventListener('click', (event) => {
            if (event.target === reportModalContainer) {
                closeReportModal();
            }
        });

        reportModalContainer.appendChild(reportModalElement);
        reportModalContainer.classList.remove('hidden');
    }

    function showOptionalReportModal() {
        const optionalReportModalElement = document.createElement('div');
        optionalReportModalElement.className = 'bg-white text-black p-6 rounded shadow-lg w-1/3 relative';
        optionalReportModalElement.innerHTML = `
            <h2 class="text-xl font-bold mb-4">Laporan Tambahan Opsional</h2>
            <textarea class="w-full p-2 border rounded mb-4" placeholder="Berikan detail tambahan" maxlength="500"></textarea>
            <div class="text-right text-sm text-gray-500">0/500</div>
            <button type="button" id="submitReport" class="bg-blue-600 text-white px-4 py-2 rounded mt-4">Laporkan</button>
            <button type="button" class="closeModal bg-gray-300 text-black px-4 py-2 rounded mt-4">Tutup</button>
        `;

        const submitReportButton = optionalReportModalElement.querySelector('#submitReport');
        const closeModalButton = optionalReportModalElement.querySelector('.closeModal');

        submitReportButton.addEventListener('click', () => {
            showThankYouModal();
            optionalReportModalElement.remove();
        });

        closeModalButton.addEventListener('click', () => {
            closeReportModal();
        });

        reportModalContainer.appendChild(optionalReportModalElement);
    }

    function showThankYouModal() {
        const thankYouModalElement = document.createElement('div');
        thankYouModalElement.className = 'bg-white text-black p-6 rounded shadow-lg w-1/3 relative';
        thankYouModalElement.innerHTML = `
            <h2 class="text-xl font-bold mb-4">Terima Kasih</h2>
            <p class="mb-4">Terima kasih telah melaporkan artikel ini. Laporan Anda akan kami tinjau sesegera mungkin. Jika diperlukan, tindakan lebih lanjut akan diambil sesuai dengan kebijakan kami.</p>
            <div class="flex justify-center mb-4">
                <img src="https://img.icons8.com/ios-filled/50/000000/checkmark.png" alt="Checklist Icon" class="w-16 h-16">
            </div>
            <button type="button" class="closeModal bg-gray-300 text-black px-4 py-2 rounded">Tutup</button>
        `;

        const closeModalButton = thankYouModalElement.querySelector('.closeModal');

        closeModalButton.addEventListener('click', () => {
            closeReportModal();
        });

        reportModalContainer.appendChild(thankYouModalElement);
    }

    function closeReportModal() {
        reportModalContainer.innerHTML = '';
        reportModalContainer.classList.add('hidden');
    }
});