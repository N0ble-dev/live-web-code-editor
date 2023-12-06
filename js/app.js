function getStoredValue(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
}

function setAndStoreValue(key, value) {
    localStorage.setItem(key, value);
}

function setInitialValues() {
    document.getElementById("htmlCode").value = getStoredValue("htmlCode", "<div>\n\n</div>");
    document.getElementById("cssCode").value = getStoredValue("cssCode", "<style>\n\n</style>");
    document.getElementById("jsCode").value = getStoredValue("jsCode", "<script>\n\n</script>");
    showPreview()
}

function showPreview() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = document.getElementById("cssCode").value;
    var jsCode = document.getElementById("jsCode").value;
    var frame = document.getElementById("preview-window").contentWindow.document;

    setAndStoreValue("htmlCode", htmlCode);
    setAndStoreValue("cssCode", cssCode);
    setAndStoreValue("jsCode", jsCode);

    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
}

// Set initial values on page load
setInitialValues();

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}


