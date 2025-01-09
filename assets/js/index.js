$(document).ready(function () {
    $('.video-background button').on('click', function () {
        let iframe = $(this).closest('.relative').find('iframe')[0];

        if (iframe) {
            $(iframe).removeClass('hidden').addClass('block');
            $(this).closest('.video-background').addClass('hidden');

            iframe.contentWindow.postMessage(
                JSON.stringify({
                    event: "command",
                    func: "playVideo",
                    args: []
                }),
                "*"
            );
        } else {
            console.error('Iframe không tồn tại hoặc không hợp lệ.');
        }
    });

    // open-close youtube modal
    $('.youtube-modal__open').on('click', function () {
        $('.youtube-modal').removeClass('hidden').addClass('fixed');
    });

    $('.youtube-modal__close').on('click', function () {
        closeYoutubeModal();
    });

    $(document).mouseup(function (e) {
        const lightboxModalContainer = $('.youtube-modal iframe');
        if (!lightboxModalContainer.is(e.target) && lightboxModalContainer.has(e.target).length === 0) {
            closeYoutubeModal();
        }
    });

    function closeYoutubeModal() {
        $('.youtube-modal').removeClass('fixed').addClass('hidden');
    }
});