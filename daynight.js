function showStep(step) {
    const amHeading = document.getElementById("am-heading");
    const pmHeading = document.getElementById("pm-heading");
    const amText = document.getElementById("am-text");
    const pmText = document.getElementById("pm-text");
    const amImage = document.getElementById("am-image");
    const pmImage = document.getElementById("pm-image");

    const steps = {
        1: { 
            headingAM: "1: CLEANSER", 
            headingPM: "1: FACEWASH",
            am: { text: "Face Wash – Gently cleanse your skin to remove sweat and oils that build up overnight.", img: "assets/dayface.jpg" },
            pm: { text: "Face Wash – Use a gentle or oil-based cleanser to remove dirt, makeup, and excess oil.", img: "assets/nightface.jpg" }
        },
        2: { 
            headingAM: "2: TONER",
            headingPM: "2: TONER",
            am: { text: "Helps balance the skin’s pH and preps it for the next steps.", img: "assets/daytoner.jpg" },
            pm: { text: "Refreshes the skin and prepares it for better absorption of skincare products.", img: "assets/nighttoner.jpg" }
        },
        3: { 
            headingAM: "3: SERUM",
            headingPM: "3: SERUM",
            am: { text: "Apply a hydrating or antioxidant-rich serum, like Vitamin C, to brighten and protect.", img: "assets/dayserum.jpg" },
            pm: { text: "Opt for a repairing serum like Hyaluronic Acid (for hydration) or Retinol (for anti-aging).", img: "assets/nightserum.jpg" }
        },
        4: { 
            headingAM: "4: MOISTURIZER",
            headingPM: "4: MOISTURIZER",
            am: { text: "Locks in hydration and strengthens the skin barrier.", img: "assets/daymoisturizer.jpg" },
            pm: { text: "Nourishes and restores the skin overnight.", img: "assets/nightmoisturizer.jpg" }
        },
        5: { 
            headingAM: "5: SUNSCREEN",
            headingPM: "5: LIP CARE",
            am: { text: "Protects against UV damage and premature aging (SPF 30+ is a must!).", img: "assets/sunscreen.jpg" },
            pm: { text: "Hydrates and softens lips while you sleep.", img: "assets/lip.jpg" }
        }
    };

    amHeading.textContent = steps[step].headingAM;
    pmHeading.textContent = steps[step].headingPM;
    amText.textContent = steps[step].am.text;
    pmText.textContent = steps[step].pm.text;
    amImage.src = steps[step].am.img;
    pmImage.src = steps[step].pm.img;

    // Highlight the clicked button
    document.querySelectorAll('.step').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.step')[step - 1].classList.add('active');
    
}
