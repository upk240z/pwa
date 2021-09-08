import {Util} from "./classes/util";

window.addEventListener('load', () => {
    let alertTimeoutId: any = null;

    const parts = document.getElementById('parts') as HTMLElement;
    const errorAlert = document.getElementById('error-alert') as HTMLElement;

    errorAlert.querySelector('.alert-icon')!.addEventListener('click', () => {
        errorAlert.style.display = 'none';
        if (alertTimeoutId) {
            clearTimeout(alertTimeoutId);
        }
    });

    function showError(msg: string) {
        errorAlert.querySelector('.alert-description')!.textContent = msg;
        errorAlert.style.display = 'block';
        alertTimeoutId = setTimeout(() => {
            Util.fadeOut(errorAlert, 1000).then(() => {
            });
        }, 2000);
    }

    const regexModal = document.getElementById('regex-modal') as HTMLElement;

    Array.from(regexModal.getElementsByClassName('close-modal')).forEach((el) => {
        el.addEventListener('click', () => regexModal.classList.add('hidden'));
    });

    document.getElementById('regex-form')!.addEventListener('submit', (event) => {
        event.preventDefault();
        const regex = document.getElementById('regex') as HTMLInputElement;
        const target = document.getElementById('target-text') as HTMLTextAreaElement;
        try {
            const reg = eval(regex.value);
            const result = reg.exec(target.value);
            if (result === null) {
                showError('Unmatched!');
                return;
            }

            const results = document.getElementById('regex-results') as HTMLElement;
            results.textContent = '';
            const item = parts.querySelector('.regex-item') as HTMLElement;
            Array.from(result).forEach((value, index) => {
                const clone = item.cloneNode(true) as HTMLElement;
                clone.querySelector('.match-text')!.textContent = value as string;
                clone.querySelector('.match-number')!.textContent = index.toString();
                results.appendChild(clone);
            });

            regexModal.classList.remove('hidden');
            (<HTMLElement>regexModal.querySelector('.justify-end button.close-modal')).focus();
        } catch (e) {
            console.log(e);
            showError('regex error');
        }
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js').then(
            registration => {
                console.log(`ServiceWorker registration successful with scope: ${registration.scope}`);
            },
            error => {
                console.log(`ServiceWorker registration failed: ${error}`);
            }
        );
    }
});
