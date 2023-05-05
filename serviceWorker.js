/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./chrome/src/serviceWorker.ts ***!
  \*************************************/
var tracedUrls = [];
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   tracedUrls = [];
//   chrome.storage.local.get(["trace"]).then((result) => {
//   });
// });
chrome.storage.onChanged.addListener(function (x) {
    var _a, _b;
    if (chrome.runtime.lastError) {
        console.log("error found");
    }
    console.log(x);
    console.log((_a = x["trace"]) === null || _a === void 0 ? void 0 : _a.newValue);
    if (((_b = x["trace"]) === null || _b === void 0 ? void 0 : _b.newValue) == true) {
        chrome.tabs.onUpdated.addListener(myListener);
    }
    else {
        chrome.tabs.onUpdated.removeListener(myListener);
        chrome.runtime.sendMessage({ tracedUrls: tracedUrls }, function (response) {
            console.log(response.message);
        });
    }
});
function myListener(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        tracedUrls.push(changeInfo.url);
    }
    return;
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var storedData = JSON.parse(request.profile);
    var user = {
        token: storedData === null || storedData === void 0 ? void 0 : storedData.token,
        userId: storedData === null || storedData === void 0 ? void 0 : storedData.userId
    };
    chrome.storage.sync.set({ key: user }, function () { });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZVdvcmtlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsd0JBQXdCO0FBQzdEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixXQUFXLGlCQUFpQjtBQUMxRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmctYm9vbS1jb25zb2xlLy4vY2hyb21lL3NyYy9zZXJ2aWNlV29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0cmFjZWRVcmxzID0gW107XHJcbi8vIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcclxuLy8gICB0cmFjZWRVcmxzID0gW107XHJcbi8vICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcInRyYWNlXCJdKS50aGVuKChyZXN1bHQpID0+IHtcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcbmNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoeCkge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coeCk7XHJcbiAgICBjb25zb2xlLmxvZygoX2EgPSB4W1widHJhY2VcIl0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uZXdWYWx1ZSk7XHJcbiAgICBpZiAoKChfYiA9IHhbXCJ0cmFjZVwiXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5ld1ZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKG15TGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLnJlbW92ZUxpc3RlbmVyKG15TGlzdGVuZXIpO1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHJhY2VkVXJsczogdHJhY2VkVXJscyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5mdW5jdGlvbiBteUxpc3RlbmVyKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcclxuICAgIGlmIChjaGFuZ2VJbmZvLnVybCkge1xyXG4gICAgICAgIHRyYWNlZFVybHMucHVzaChjaGFuZ2VJbmZvLnVybCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgdmFyIHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucHJvZmlsZSk7XHJcbiAgICB2YXIgdXNlciA9IHtcclxuICAgICAgICB0b2tlbjogc3RvcmVkRGF0YSA9PT0gbnVsbCB8fCBzdG9yZWREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZWREYXRhLnRva2VuLFxyXG4gICAgICAgIHVzZXJJZDogc3RvcmVkRGF0YSA9PT0gbnVsbCB8fCBzdG9yZWREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZWREYXRhLnVzZXJJZFxyXG4gICAgfTtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsga2V5OiB1c2VyIH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=