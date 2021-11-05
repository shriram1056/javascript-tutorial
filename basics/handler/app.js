//more info in coundown-timer project and (select element and this) folder
function getRemaindingTime() {
  const today = new Date().getTime();//values in milliseconds

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds

  const oneDay = 24 * 60 * 60 * 1000;//ms in a day
  const oneHour = 60 * 60 * 1000;//ms in a day
  const oneMinute = 60 * 1000;//ms in a minite
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);// we need the days to ignore decimal
  let hours = Math.floor((t % oneDay) / oneHour);// remainder of t divided my ms in a day/ms in a hour
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];// put everything in a array
  function format(item) {
    if (item < 10) {
      //for adding zero before values[] having less than 10
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });//item is h4 in div

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}

// countdown;
let countdown = setInterval(getRemaindingTime, 1000);//this is like handler in android
// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

//set initial values
getRemaindingTime();

