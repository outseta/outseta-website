// Manually assigned values for each input value in Yearly
const valuesYearly = {
  15: { price: '$117', contacts: '15,000' },
  20: { price: '$157', contacts: '20,000' },
  25: { price: '$197', contacts: '25,000' },
  30: { price: '$237', contacts: '30,000' },
  35: { price: '$277', contacts: '35,000' },
  40: { price: '$317', contacts: '40,000' },
  45: { price: '$357', contacts: '45,000' },
  50: { price: '$397', contacts: '50,000' },
  55: { price: 'Let\u2019s talk', contacts: '50,000+' }
};

// Manually assigned values for each input value in Monthly
const valuesMonthly = {
  15: { price: '$147', contacts: '15,000' },
  20: { price: '$197', contacts: '20,000' },
  25: { price: '$247', contacts: '25,000' },
  30: { price: '$297', contacts: '30,000' },
  35: { price: '$347', contacts: '35,000' },
  40: { price: '$397', contacts: '40,000' },
  45: { price: '$447', contacts: '45,000' },
  50: { price: '$497', contacts: '50,000' },
  55: { price: 'Let\u2019s talk', contacts: '50,000+' }
};

// Function to update elements based on input value
function updateContent(input, price, contactsK, contactsNum, perText, values) {
  const value = parseInt(input.value);
  const data = values[value];
  
  if (data) {
    price.textContent = data.price;
    contactsK.textContent = value + 'K';
    contactsNum.textContent = data.contacts;
  }

  // Hide per-text if the value is 55
  perText.style.display = value === 55 ? 'none' : '';

  // Show 50K+ if the value is 55
  if (value === 55) {
    contactsK.textContent = '50K+';
  }
}

// Function to sync inputs and update their corresponding content
function syncInputs(value) {
  inputYearly.value = value;
  inputMonthly.value = value;
  updateContent(inputYearly, priceYearly, contactsKYearly, contactsNumYearly, perTextYearly, valuesYearly);
  updateContent(inputMonthly, priceMonthly, contactsKMonthly, contactsNumMonthly, perTextMonthly, valuesMonthly);
}

// Get wrapper divs
const Yearly = document.getElementById('cardYearly');
const Monthly = document.getElementById('cardMonthly');

// Get inputs and elements inside each wrapper
const inputYearly = Yearly.querySelector('input');
const priceYearly = Yearly.querySelector('.price');
const contactsKYearly = Yearly.querySelector('.contacts-k');
const contactsNumYearly = Yearly.querySelector('.contacts-num');
const perTextYearly = Yearly.querySelector('.per-text');

const inputMonthly = Monthly.querySelector('input');
const priceMonthly = Monthly.querySelector('.price');
const contactsKMonthly = Monthly.querySelector('.contacts-k');
const contactsNumMonthly = Monthly.querySelector('.contacts-num');
const perTextMonthly = Monthly.querySelector('.per-text');

// // Add event listeners to update content on input change
// inputYearly.addEventListener('input', () => updateContent(inputYearly, priceYearly, contactsKYearly, contactsNumYearly, perTextYearly, valuesYearly));
// inputMonthly.addEventListener('input', () => updateContent(inputMonthly, priceMonthly, contactsKMonthly, contactsNumMonthly, perTextMonthly, valuesMonthly));

// Add event listeners to sync inputs and update content
inputYearly.addEventListener('input', () => syncInputs(inputYearly.value));
inputMonthly.addEventListener('input', () => syncInputs(inputMonthly.value));

// Initialize content based on default values
updateContent(inputYearly, priceYearly, contactsKYearly, contactsNumYearly, perTextYearly, valuesYearly);
updateContent(inputMonthly, priceMonthly, contactsKMonthly, contactsNumMonthly, perTextMonthly, valuesMonthly);