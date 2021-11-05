export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error('you did not select element');
    // new syntax "throw Error()"
  }
}
