$(document).ready(function () {
    const iframe1 = `
        <iframe 
            class="mx-auto shadow-shadow1" 
            data-video-type="youtube"
            data-autoplay="true" 
            width="723" 
            height="407" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen 
            referrerpolicy="strict-origin-when-cross-origin"
            title="LadiPage - Nền Tảng Thiết Kế Landing Page Bán Hàng Và Quảng Cáo"
            src="https://www.youtube.com/embed/Zj1SKwVv7AA?rel=0&modestbranding=0&playsinline=1&controls=1&autoplay=1&loop=1&mute=1">
        </iframe>
    `;
    const iframe2 = `
        <iframe
            style="margin: auto; position: absolute; inset: 0px;"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            class="2xl:w-[1536px] w-11/12 2xl:h-[690px] h-3/4" frameborder="0" allowfullscreen=""
            referrerpolicy="strict-origin-when-cross-origin"
            title="LadiPage - Nền Tảng Thiết Kế Landing Page Bán Hàng Và Quảng Cáo" width="640" height="360"
            src="https://www.youtube.com/embed/Zj1SKwVv7AA?rel=0&modestbranding=0&playsinline=0&controls=1&autoplay=1&loop=1&wmode=transparent">
        </iframe>
    `;

    $('.video-background button').on('click', function () {
        $(this).closest('.video-background').remove();
        $('.section-1-iframe').html(iframe1);
    });

    // open-close youtube modal
    $('.youtube-modal__open').on('click', function () {
        $('.youtube-modal').removeClass('hidden').css('position', 'fixed');
        $('.youtube-modal__iframe').html(iframe2);

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
        $('.youtube-modal__iframe').html('');
        $('.youtube-modal').css('position', '').addClass('hidden');
    }
});