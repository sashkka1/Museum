export default function exploreImgChange() {
    let resizableBox = document.querySelector('.for-line-separation');
    let handle = resizableBox.querySelector('.resize-handle');
    let container = document.querySelector('.right-explore');
    let beforeImgExplore = document.querySelector('.before-img-explore');
    let afterImgExplore = document.querySelector('.after-img-explore');

    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    let startWidthBefore = 0;
    let startWidthAfter = 0;

    handle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        isResizing = true;
        startX = e.clientX;
        startWidth = resizableBox.offsetWidth;
        startWidthBefore = beforeImgExplore.offsetWidth;
        startWidthAfter = afterImgExplore.offsetWidth;
        function onMouseMove(e) {
            // непосредственно ползунок
            if (!isResizing) return;

            let dx = e.clientX - startX;
            let newWidth = startWidth + dx;
            let maxWidth = container.offsetWidth;
            let minWidth = 30;

            if (newWidth < minWidth) newWidth = minWidth;
            if (newWidth > maxWidth) newWidth = maxWidth;

            resizableBox.style.width = newWidth + 'px';

            // картинка before
            let newWidthBefore = startWidthBefore + dx;
            let minWidthBefore = 20;

            if (newWidthBefore < minWidthBefore) newWidthBefore = minWidthBefore;
            if (newWidthBefore > maxWidth) newWidthBefore = maxWidth;
            beforeImgExplore.style.width = newWidthBefore + 'px';

            // картинка after
            let newWidthAfter = startWidthAfter - dx;
            let minWidthAfter = 10;
            let maxWidthAfter = maxWidth - 20;

            if (newWidthAfter < minWidthAfter) newWidthAfter = minWidthAfter;
            if (newWidthAfter > maxWidthAfter) newWidthAfter = maxWidthAfter;
            afterImgExplore.style.width = newWidthAfter + 'px';;
        }

        function onMouseUp() {
            isResizing = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
};