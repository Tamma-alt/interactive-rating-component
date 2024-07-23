let selectedRating = null;

function buttonClicked(rating) {
  selectedRating = rating;
  console.log('Rating selected:', rating) //debugging purposes
}

function submitResult() {
  if (selectedRating !== null) {
    document.querySelector('.rate-section').classList.add('hidden');
    document.querySelector('.thank-you').classList.remove('hidden');
    document.getElementById('result').innerText = 'You selected ' +  selectedRating +  ' out of 5';

  } else {
    alert('Please select a rating before submitting.')
  }
}