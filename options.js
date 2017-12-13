var toggle = chrome.storage.sync.get("timetab");
$("#timetab_check").click(function() {
        $("input[type=checkbox]").attr("checked",!toggle);
        chrome.storage.sync.set({"timetab":!toggle});
        toggle = !toggle;
        console.log("logging")
});

window.onload = function(e){
    document.getElementById("timetab_check").checked = chrome.storage.sync.get("timetab");
    console.log("fsda")
}