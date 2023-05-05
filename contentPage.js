/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./chrome/src/contentPage.ts ***!
  \***********************************/
var contentText;
var mySiteUrl = "https://beta.boomconcole.com";
var prevUrl = undefined;
function getToken() {
    var currUrl = window.location.href;
    if (currUrl.includes(mySiteUrl)) {
        //it's the right website
        var fromLocalStorage = localStorage.getItem("profile");
        if (fromLocalStorage) {
            chrome.runtime.sendMessage({
                profile: fromLocalStorage
            });
        }
    }
}
getToken();
setInterval(function () {
    var currUrl = window.location.href;
    if (currUrl != prevUrl) {
        // URL changed
        if (currUrl.includes(mySiteUrl)) {
            //it's the right website
            prevUrl = currUrl;
            var logoutButtons = document.getElementsByClassName("link_logout");
            Array.from(logoutButtons).forEach(function (x) {
                x.addEventListener("click", function () {
                    var data = JSON.stringify({});
                    chrome.storage.sync.set({ key: data }).then(function () {
                    });
                });
            });
        }
    }
}, 60);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (chrome.runtime.lastError) {
        console.log("error found");
    }
    var the_message = request.message;
    if (the_message == "visual_text") {
        var master = (_d = (_c = (_b = (_a = document.querySelectorAll("article")) !== null && _a !== void 0 ? _a : document.querySelectorAll("main")) !== null && _b !== void 0 ? _b : document.querySelectorAll(".container")) !== null && _c !== void 0 ? _c : document.querySelectorAll("#content")) !== null && _d !== void 0 ? _d : document.querySelectorAll("body");
        var contentText_1 = "";
        master.forEach(function (x) {
            contentText_1 += x.innerText.trim();
        });
        sendResponse({ message: contentText_1 });
        return true;
    }
    else if (the_message == "only_images" ||
        the_message == "text_pictures") {
        var master = document.querySelectorAll("img");
        var images_1 = [];
        master.forEach(function (x) {
            var data = {
                path: x.src,
                title: x.alt
            };
            images_1.push(data);
        });
        sendResponse({ message: images_1 });
        return true;
    }
    else if ((the_message == "all_but_css")) {
        var master = (_h = (_g = (_f = (_e = document.querySelectorAll("article")) !== null && _e !== void 0 ? _e : document.querySelectorAll("main")) !== null && _f !== void 0 ? _f : document.querySelectorAll(".container")) !== null && _g !== void 0 ? _g : document.querySelectorAll("#content")) !== null && _h !== void 0 ? _h : document.querySelectorAll("body");
        var contentText_2 = "";
        master.forEach(function (x) {
            contentText_2 += x.innerHTML.trim();
        });
        sendResponse({ message: contentText_2 });
        return true;
    }
    else if ((the_message == "all_data")) {
        var master = document.querySelectorAll("html");
        var contentText_3 = "";
        master.forEach(function (x) {
            contentText_3 += x.innerHTML.trim();
        });
        sendResponse({ message: contentText_3 });
        return true;
    }
    else if ((the_message == "chat_gpt_data")) {
        var master = document.querySelectorAll("main > .flex-1")[0];
        console.log(master);
        var contentText_4 = "";
        contentText_4 += master.innerHTML.trim();
        sendResponse({ message: contentText_4 });
        return true;
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsOENBQThDLFdBQVc7QUFDekQscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25nLWJvb20tY29uc29sZS8uL2Nocm9tZS9zcmMvY29udGVudFBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbnRlbnRUZXh0O1xyXG52YXIgbXlTaXRlVXJsID0gXCJodHRwczovL2JldGEuYm9vbWNvbmNvbGUuY29tXCI7XHJcbnZhciBwcmV2VXJsID0gdW5kZWZpbmVkO1xyXG5mdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICAgIHZhciBjdXJyVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBpZiAoY3VyclVybC5pbmNsdWRlcyhteVNpdGVVcmwpKSB7XHJcbiAgICAgICAgLy9pdCdzIHRoZSByaWdodCB3ZWJzaXRlXHJcbiAgICAgICAgdmFyIGZyb21Mb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2ZpbGVcIik7XHJcbiAgICAgICAgaWYgKGZyb21Mb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZTogZnJvbUxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZ2V0VG9rZW4oKTtcclxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGN1cnJVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGlmIChjdXJyVXJsICE9IHByZXZVcmwpIHtcclxuICAgICAgICAvLyBVUkwgY2hhbmdlZFxyXG4gICAgICAgIGlmIChjdXJyVXJsLmluY2x1ZGVzKG15U2l0ZVVybCkpIHtcclxuICAgICAgICAgICAgLy9pdCdzIHRoZSByaWdodCB3ZWJzaXRlXHJcbiAgICAgICAgICAgIHByZXZVcmwgPSBjdXJyVXJsO1xyXG4gICAgICAgICAgICB2YXIgbG9nb3V0QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5rX2xvZ291dFwiKTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShsb2dvdXRCdXR0b25zKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBrZXk6IGRhdGEgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59LCA2MCk7XHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2g7XHJcbiAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIHZhciB0aGVfbWVzc2FnZSA9IHJlcXVlc3QubWVzc2FnZTtcclxuICAgIGlmICh0aGVfbWVzc2FnZSA9PSBcInZpc3VhbF90ZXh0XCIpIHtcclxuICAgICAgICB2YXIgbWFzdGVyID0gKF9kID0gKF9jID0gKF9iID0gKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFydGljbGVcIikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJtYWluXCIpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb250ZW50XCIpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keVwiKTtcclxuICAgICAgICB2YXIgY29udGVudFRleHRfMSA9IFwiXCI7XHJcbiAgICAgICAgbWFzdGVyLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgY29udGVudFRleHRfMSArPSB4LmlubmVyVGV4dC50cmltKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbWVzc2FnZTogY29udGVudFRleHRfMSB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoZV9tZXNzYWdlID09IFwib25seV9pbWFnZXNcIiB8fFxyXG4gICAgICAgIHRoZV9tZXNzYWdlID09IFwidGV4dF9waWN0dXJlc1wiKSB7XHJcbiAgICAgICAgdmFyIG1hc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7XHJcbiAgICAgICAgdmFyIGltYWdlc18xID0gW107XHJcbiAgICAgICAgbWFzdGVyLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiB4LnNyYyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB4LmFsdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWFnZXNfMS5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG1lc3NhZ2U6IGltYWdlc18xIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHRoZV9tZXNzYWdlID09IFwiYWxsX2J1dF9jc3NcIikpIHtcclxuICAgICAgICB2YXIgbWFzdGVyID0gKF9oID0gKF9nID0gKF9mID0gKF9lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFydGljbGVcIikpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJtYWluXCIpKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKSkgIT09IG51bGwgJiYgX2cgIT09IHZvaWQgMCA/IF9nIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb250ZW50XCIpKSAhPT0gbnVsbCAmJiBfaCAhPT0gdm9pZCAwID8gX2ggOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keVwiKTtcclxuICAgICAgICB2YXIgY29udGVudFRleHRfMiA9IFwiXCI7XHJcbiAgICAgICAgbWFzdGVyLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgY29udGVudFRleHRfMiArPSB4LmlubmVySFRNTC50cmltKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbWVzc2FnZTogY29udGVudFRleHRfMiB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCh0aGVfbWVzc2FnZSA9PSBcImFsbF9kYXRhXCIpKSB7XHJcbiAgICAgICAgdmFyIG1hc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJodG1sXCIpO1xyXG4gICAgICAgIHZhciBjb250ZW50VGV4dF8zID0gXCJcIjtcclxuICAgICAgICBtYXN0ZXIuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICBjb250ZW50VGV4dF8zICs9IHguaW5uZXJIVE1MLnRyaW0oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBtZXNzYWdlOiBjb250ZW50VGV4dF8zIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHRoZV9tZXNzYWdlID09IFwiY2hhdF9ncHRfZGF0YVwiKSkge1xyXG4gICAgICAgIHZhciBtYXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibWFpbiA+IC5mbGV4LTFcIilbMF07XHJcbiAgICAgICAgY29uc29sZS5sb2cobWFzdGVyKTtcclxuICAgICAgICB2YXIgY29udGVudFRleHRfNCA9IFwiXCI7XHJcbiAgICAgICAgY29udGVudFRleHRfNCArPSBtYXN0ZXIuaW5uZXJIVE1MLnRyaW0oKTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBtZXNzYWdlOiBjb250ZW50VGV4dF80IH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9