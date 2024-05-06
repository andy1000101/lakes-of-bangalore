const lakeData = {
    "lake-ulsoor": {
        text: "Ulsoor Lake",
        text2: "Water hyacinth tracking - Ulsoor Lake",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7806.27741934765!2d77.61897135542117!3d12.982439959282981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16902ac7025b%3A0x5cda8d215b70772c!2sUlsoor%20Lake!5e1!3m2!1sen!2sin!4v1713880158368!5m2!1sen!2sin"
    },
    "lake-bellandur": {
        text: "Bellandur Lake",
        text2: "Water hyacinth tracking - Bellandur Lake",
        src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9742.181539331446!2d77.66841490694787!3d12.936018219448446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1713880032813!5m2!1sen!2sin"
    },
};

function displayLakeInfo() {

    const dropdown = document.getElementById("lakeDropdown");
    const selectedLake = dropdown.value;
    const displayDiv = document.getElementById("lakeInfoDisplay");
    const displayDiv2 = document.getElementById("headings")

    // Clear previous content
    displayDiv.innerHTML = "";
    displayDiv2.innerHTML = "";

    // Display selected lake information
    if (lakeData[selectedLake]) {
        const lakeInfo = lakeData[selectedLake];


        // Create paragraph element for text
        const infoParagraph = document.createElement("h2");
        infoParagraph.textContent = lakeInfo.text;

        //create iframe for google map integration
        const mapvar = document.createElement("iframe")
        mapvar.src = lakeInfo.src;
        mapvar.height = "800px";
        mapvar.width = "100%";
        mapvar.style = "border:0"
        mapvar.loading = "lazy";
        mapvar.allowFullscreen = "";
        mapvar.referrerPolicy = "no-referrer-when-downgrade"

        //heading rewriter
        const hyacinthHeading = document.createElement("h2");
        hyacinthHeading.textContent = lakeInfo.text2;

        // Append image and text to displayDiv
        displayDiv.appendChild(infoParagraph);
        displayDiv.appendChild(mapvar);
        displayDiv2.appendChild(hyacinthHeading);
    } else {
        const errorParagraph = document.createElement("h2");
        errorParagraph.textContent = "No information available.";
        displayDiv.appendChild(errorParagraph);
    }
}

// Event listener for dropdown change
document.getElementById("lakeDropdown").addEventListener("change", displayLakeInfo);

// Initial display
displayLakeInfo();

window.onload = function() {
    displayLakeInfo(); // Invoke the function when the page loads
};
