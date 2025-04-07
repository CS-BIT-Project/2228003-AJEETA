function showMessage(region) {
    let messageTitle = document.getElementById("messageTitle");
    let messageText = document.getElementById("messageText");
    let messageBox = document.getElementById("messageBox");

    let acneInfo = {
        1: { 
            title: "Forehead (Stress & Digestion)",
            text: "Breakouts here may be linked to stress or poor digestion. Drink more water, sleep well, and reduce processed foods."
        },
        2: { 
            title: "Cheeks (Diet & Pollution)",
            text: "Acne in this area can be caused by dirty pillowcases, phone screens, or sugary foods. Keep your face and surroundings clean!"
        },
        3: { 
            title: "Nose (Heart & Blood Pressure)",
            text: "Breakouts on the nose may be connected to high cholesterol. Reduce fried foods and eat more veggies!"
        },
        4: { 
            title: "Jawline & Chin (Hormones)",
            text: "This area is affected by hormonal changes. Stay hydrated, avoid dairy, and manage stress."
        },
        5: { 
            title: "Neck & Lower Face (Immune System)",
            text: "Neck acne may signal an immune system imbalance. Strengthen it with good sleep and a balanced diet."
        }
    };

    // Update content dynamically
    messageTitle.innerText = acneInfo[region].title;
    messageText.innerText = acneInfo[region].text;

    // Show message box
    messageBox.style.display = "block";
}

function closeMessage() {
    document.getElementById("messageBox").style.display = "none";
}
