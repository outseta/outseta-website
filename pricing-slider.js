// Manually assigned values for each possible input value in Yearly
const valuesYearly = {
  15: { price: '$127', contacts: '15,000', savings: 'Save $480/yr', plan: 'wmjzoomV' },
  20: { price: '$157', contacts: '20,000', savings: 'Save $600/yr', plan: 'A93GJ590' },
  25: { price: '$197', contacts: '25,000', savings: 'Save $600/yr', plan: 'BWzrPgWE' },
  30: { price: '$237', contacts: '30,000', savings: 'Save $720/yr', plan: 'nmDZP29y' },
  35: { price: '$277', contacts: '35,000', savings: 'Save $840/yr', plan: 'BWzrkNWE' },
  40: { price: '$317', contacts: '40,000', savings: 'Save $960/yr', plan: 'ZmNK3AQ2' },
  45: { price: '$357', contacts: '45,000', savings: 'Save $1,080/yr', plan: '7ma5Z5mE' },
  50: { price: '$397', contacts: '50,000', savings: 'Save $1,200/yr', plan: 'ZmNKlEQ2' },
  55: { price: 'Let\u2019s talk', contacts: '50,000+', savings: 'Save over $1,200/yr' }
};

// Manually assigned values for each possible input value in Monthly
const valuesMonthly = {
  15: { price: '$167', contacts: '15,000', plan: 'wmjzoomV' },
  20: { price: '$207', contacts: '20,000', plan: 'A93GJ590' },
  25: { price: '$247', contacts: '25,000', plan: 'BWzrPgWE' },
  30: { price: '$297', contacts: '30,000', plan: 'nmDZP29y' },
  35: { price: '$347', contacts: '35,000', plan: 'BWzrkNWE' },
  40: { price: '$397', contacts: '40,000', plan: 'ZmNK3AQ2' },
  45: { price: '$447', contacts: '45,000', plan: '7ma5Z5mE' },
  50: { price: '$497', contacts: '50,000', plan: 'ZmNKlEQ2' },
  55: { price: 'Let\u2019s talk', contacts: '50,000+' }
};

// Function to update elements based on input value
function updateContent(input, price, contactsK, contactsNum, perText, values, savings, btnPlan, btnContact) {
  const value = parseInt(input.value);
  const data = values[value];
  
  if (data) {
    price.textContent = data.price;
    contactsK.textContent = value + 'K';
    contactsNum.textContent = data.contacts;
    btnPlan.setAttribute('data-plan-uid', data.plan);

    if (savings) {
      savings.textContent = data.savings;
    }

    // Set some defaults
    perText.style.display = '';
    btnContact.style.display = 'none';
    btnPlan.style.display = 'flex';
  }

  // Show 50K+ if the value is 55
  if (value === 55) {
    contactsK.textContent = '50K+';
    perText.style.display = 'none';
    btnContact.style.display = 'flex';
    btnPlan.style.display = 'none';
  }
}

// Function to sync inputs and update their corresponding content
function syncInputs(value) {
  // Sync the inputs
  inputYearly.value = value;
  inputMonthly.value = value;

  // Sync the handles
  handleYearly.style.left = `${(value - 15) / 40 * 100}%`;
  handleMonthly.style.left = `${(value - 15) / 40 * 100}%`;

  // Sync the fills
  fillYearly.style.width = `${(value - 15) / 40 * 100}%`;
  fillMonthly.style.width = `${(value - 15) / 40 * 100}%`;

  updateContent(inputYearly, priceYearly, contactsKYearly, contactsNumYearly, perTextYearly, valuesYearly, savingsYearly, btnPlanYearly, btnContactYearly);
  updateContent(inputMonthly, priceMonthly, contactsKMonthly, contactsNumMonthly, perTextMonthly, valuesMonthly, savingsMonthly, btnPlanMonthly, btnContactMonthly);
  console.log('Values for Monthly:', valuesMonthly);
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
const savingsYearly = Yearly.querySelector('.badge');
const btnPlanYearly = Yearly.querySelector('.btn.cc-dark');
const btnContactYearly = Yearly.querySelector('.btn:not(.cc-dark)');

const inputMonthly = Monthly.querySelector('input');
const priceMonthly = Monthly.querySelector('.price');
const contactsKMonthly = Monthly.querySelector('.contacts-k');
const contactsNumMonthly = Monthly.querySelector('.contacts-num');
const perTextMonthly = Monthly.querySelector('.per-text');
const savingsMonthly = Monthly.querySelector('.badge');
const btnPlanMonthly = Monthly.querySelector('.btn.cc-dark');
const btnContactMonthly = Monthly.querySelector('.btn:not(.cc-dark)');

// Get handles and fills
const handleYearly = Yearly.querySelector('[fs-rangeslider-element="handle"]');
const fillYearly = Yearly.querySelector('[fs-rangeslider-element="fill"]');
const handleMonthly = Monthly.querySelector('[fs-rangeslider-element="handle"]');
const fillMonthly = Monthly.querySelector('[fs-rangeslider-element="fill"]');

// Add event listeners to sync inputs and update content
inputYearly.addEventListener('input', () => syncInputs(inputYearly.value));
inputMonthly.addEventListener('input', () => syncInputs(inputMonthly.value));

// Initialize content based on default values
updateContent(inputYearly, priceYearly, contactsKYearly, contactsNumYearly, perTextYearly, valuesYearly, savingsYearly, btnPlanYearly, btnContactYearly);
updateContent(inputMonthly, priceMonthly, contactsKMonthly, contactsNumMonthly, perTextMonthly, valuesMonthly, savingsMonthly, btnPlanMonthly, btnContactMonthly);