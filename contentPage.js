/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./chrome/src/contentPage.ts ***!
  \***********************************/
var contentText;
var mySiteUrl = "http://localhost:3000";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsOENBQThDLFdBQVc7QUFDekQscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25nLWJvb20tY29uc29sZS8uL2Nocm9tZS9zcmMvY29udGVudFBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbnRlbnRUZXh0O1xyXG52YXIgbXlTaXRlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxudmFyIHByZXZVcmwgPSB1bmRlZmluZWQ7XHJcbmZ1bmN0aW9uIGdldFRva2VuKCkge1xyXG4gICAgdmFyIGN1cnJVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGlmIChjdXJyVXJsLmluY2x1ZGVzKG15U2l0ZVVybCkpIHtcclxuICAgICAgICAvL2l0J3MgdGhlIHJpZ2h0IHdlYnNpdGVcclxuICAgICAgICB2YXIgZnJvbUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZmlsZVwiKTtcclxuICAgICAgICBpZiAoZnJvbUxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlOiBmcm9tTG9jYWxTdG9yYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5nZXRUb2tlbigpO1xyXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY3VyclVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgaWYgKGN1cnJVcmwgIT0gcHJldlVybCkge1xyXG4gICAgICAgIC8vIFVSTCBjaGFuZ2VkXHJcbiAgICAgICAgaWYgKGN1cnJVcmwuaW5jbHVkZXMobXlTaXRlVXJsKSkge1xyXG4gICAgICAgICAgICAvL2l0J3MgdGhlIHJpZ2h0IHdlYnNpdGVcclxuICAgICAgICAgICAgcHJldlVybCA9IGN1cnJVcmw7XHJcbiAgICAgICAgICAgIHZhciBsb2dvdXRCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmtfbG9nb3V0XCIpO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGxvZ291dEJ1dHRvbnMpLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHt9KTtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGtleTogZGF0YSB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0sIDYwKTtcclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaDtcclxuICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHRoZV9tZXNzYWdlID0gcmVxdWVzdC5tZXNzYWdlO1xyXG4gICAgaWYgKHRoZV9tZXNzYWdlID09IFwidmlzdWFsX3RleHRcIikge1xyXG4gICAgICAgIHZhciBtYXN0ZXIgPSAoX2QgPSAoX2MgPSAoX2IgPSAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYXJ0aWNsZVwiKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm1haW5cIikpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFpbmVyXCIpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbnRlbnRcIikpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5XCIpO1xyXG4gICAgICAgIHZhciBjb250ZW50VGV4dF8xID0gXCJcIjtcclxuICAgICAgICBtYXN0ZXIuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICBjb250ZW50VGV4dF8xICs9IHguaW5uZXJUZXh0LnRyaW0oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBtZXNzYWdlOiBjb250ZW50VGV4dF8xIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhlX21lc3NhZ2UgPT0gXCJvbmx5X2ltYWdlc1wiIHx8XHJcbiAgICAgICAgdGhlX21lc3NhZ2UgPT0gXCJ0ZXh0X3BpY3R1cmVzXCIpIHtcclxuICAgICAgICB2YXIgbWFzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcclxuICAgICAgICB2YXIgaW1hZ2VzXzEgPSBbXTtcclxuICAgICAgICBtYXN0ZXIuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IHguc3JjLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHguYWx0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltYWdlc18xLnB1c2goZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbWVzc2FnZTogaW1hZ2VzXzEgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgodGhlX21lc3NhZ2UgPT0gXCJhbGxfYnV0X2Nzc1wiKSkge1xyXG4gICAgICAgIHZhciBtYXN0ZXIgPSAoX2ggPSAoX2cgPSAoX2YgPSAoX2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYXJ0aWNsZVwiKSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm1haW5cIikpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFpbmVyXCIpKSAhPT0gbnVsbCAmJiBfZyAhPT0gdm9pZCAwID8gX2cgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbnRlbnRcIikpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5XCIpO1xyXG4gICAgICAgIHZhciBjb250ZW50VGV4dF8yID0gXCJcIjtcclxuICAgICAgICBtYXN0ZXIuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICBjb250ZW50VGV4dF8yICs9IHguaW5uZXJIVE1MLnRyaW0oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBtZXNzYWdlOiBjb250ZW50VGV4dF8yIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKHRoZV9tZXNzYWdlID09IFwiYWxsX2RhdGFcIikpIHtcclxuICAgICAgICB2YXIgbWFzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImh0bWxcIik7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRUZXh0XzMgPSBcIlwiO1xyXG4gICAgICAgIG1hc3Rlci5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRUZXh0XzMgKz0geC5pbm5lckhUTUwudHJpbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG1lc3NhZ2U6IGNvbnRlbnRUZXh0XzMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgodGhlX21lc3NhZ2UgPT0gXCJjaGF0X2dwdF9kYXRhXCIpKSB7XHJcbiAgICAgICAgdmFyIG1hc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJtYWluID4gLmZsZXgtMVwiKVswXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtYXN0ZXIpO1xyXG4gICAgICAgIHZhciBjb250ZW50VGV4dF80ID0gXCJcIjtcclxuICAgICAgICBjb250ZW50VGV4dF80ICs9IG1hc3Rlci5pbm5lckhUTUwudHJpbSgpO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG1lc3NhZ2U6IGNvbnRlbnRUZXh0XzQgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=