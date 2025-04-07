function showStep(stepId, previousStep) {
    // Hide current visible step
    document.querySelectorAll('.box').forEach(element => {
        element.classList.add('hidden');
    });

    // Show the new step
    document.getElementById(stepId).classList.remove('hidden');

    // Store previous step for back functionality
    document.getElementById(stepId).setAttribute('data-previous', previousStep);
}

function showResult(skinType, imageSrc) {
    // Hide all question steps
    document.querySelectorAll('.box').forEach(element => {
        element.classList.add('hidden');
    });

    // Show the result
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('skinType').innerText = skinType;

    // Display the skin type image
    document.getElementById('skinImage').src = imageSrc;
    document.getElementById('skinImage').classList.remove('hidden');

    // Store the last question for restarting
    document.getElementById('result').setAttribute('data-previous', document.querySelector('.box:not(.hidden)').id);
}

function goBack(previousStep, currentStep) {
    // Hide current step
    document.getElementById(currentStep).classList.add('hidden');

    // Show previous step
    document.getElementById(previousStep).classList.remove('hidden');
}
