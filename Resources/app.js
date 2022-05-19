function showDiv() {
    if (outerWidth < 800) {
        document.getElementById('hidden-id').style.visibility = "visible";
    } else if (outerWidth > 800) {
        document.getElementById('second-hidden-div').style.visibility = "visible";
    }

}

function hideDiv() {
    if (outerWidth < 800) {
        document.getElementById('hidden-id').style.visibility = 'hidden';
    } else if (outerWidth > 800) {
        document.getElementById('second-hidden-div').style.visibility = 'hidden';
    }

}



