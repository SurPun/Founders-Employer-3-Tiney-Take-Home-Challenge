// ------------------------------------------------- User Datas -------------------------------------------------

    const account1 = {
        owner: 'Jon Snow',
        pin: 1111
    };

    const accounts = [account1];

// ------------------------------------------------- Elements -------------------------------------------------

    const homeDate = document.querySelector('#time');
    const labelWelcome = document.querySelector('.welcome');
    const containerApp = document.querySelector('.app');
    const containerMovements = document.querySelector('.daily-log');
    const btnLogin = document.querySelector('.login__btn');
    const inputLoginUsername = document.querySelector('.login__input--user');
    const inputLoginPin = document.querySelector('.login__input--pin');



// ------------------------------------------------- Functions -------------------------------------------------

    // Date/Time Function --------------------

    function t() {
        homeDate.innerHTML = new Date().toLocaleString();
    }

    t();
    window.setInterval(t, 1000);

  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };
  createUsernames(accounts);

  // Event handlers --------------------

  let currentAccount;

  btnLogin.addEventListener('click', function (e) {
    // Prevent from submitting
    e.preventDefault();

    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;

      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();

    } else {
      labelWelcome.textContent = `User: js Pin: 1111`
    }
  });

  // Sign in/out Button #1 

  const btnout = document.querySelector(".sign-out")
  const stasI = document.querySelector(".mdateI");
  const iconIn = document.querySelector(".icon-in");

  btnout.addEventListener("click", signOut)

  let clicked1 = "false";
  function signOut () {
    if (clicked1) {
      signToggle(this, 'sign-in', 'sign-out');
      clicked1 = false;
    } else {
      signToggle1(this, 'sign-out', 'sign-in');
      clicked1 = true;
    }
  }

  const signToggle = (el, ...args) => args.map(e => {
    el.classList.toggle(e)
    iconIn.style.boxShadow = "0 0 0 5px rgba(132, 133, 132, 0.833)";
    btnout.innerHTML = "Sign In";
    stasI.innerHTML = `SIGNED OUT`;
   }
 )

 const signToggle1 = (el, ...args) => args.map(e => {
  el.classList.toggle(e)
  iconIn.style.boxShadow = "0 0 0 5px rgba(0, 255, 0, 0.833";
  btnout.innerHTML = "Sign Out"
  stasI.innerHTML = `SIGNED In AT ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}`;
 }
)

  // Sign in/out Button #2 
  const btnin = document.querySelector(".sign-in")
  const stasD = document.querySelector(".mdateD");
  const iconOut = document.querySelector(".icon-out");

  btnin.addEventListener("click", signIn)

  let clicked = "false";
  function signIn() {
    if (clicked) {
      classToggle(this, 'sign-out', 'sign-in');
      clicked = false;
    } else {
      classToggle1(this, 'sign-in', 'sign-out');
      clicked = true;
    }
  }

  const classToggle = (el, ...args) => args.map(e => {
     el.classList.toggle(e)
     iconOut.style.boxShadow = "0 0 0 5px rgba(0, 255, 0, 0.833";
     btnin.innerHTML = "Sign Out"
     stasD.innerHTML = `SIGNED IN AT ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}`;
    }
  )

  const classToggle1 = (el, ...args) => args.map(e => {
    el.classList.toggle(e)
    iconOut.style.boxShadow = "0 0 0 5px rgba(132, 133, 132, 0.833)";
    btnin.innerHTML = "Sign In"
    stasD.innerHTML = `SIGNED OUT`;
   }
 )

 
