window.onload = function () {
  const allCheckboxesNL = document.querySelectorAll('[type="checkbox"]');

  // scratch the text of a element
  const scratchText = (parent, txtDecor) => parent.style.textDecoration = txtDecor;

  let lastChecked;
  function handleCheck(e) {
    e.stopPropagation(); // stop event bubbling

    e.target.checked ? scratchText(e.target.parentElement, "line-through") : scratchText(e.target.parentElement, "none");

    let isBetween = false;
    if (e.shiftKey) {
      allCheckboxesNL.forEach(checkbox => {
        // check if this checkbox is between the two clicked checkboxes ...
        if (checkbox === this || checkbox == lastChecked) isBetween = !isBetween;
        // ... if it is between them, check them and scratch the text
        if (isBetween) checkbox.checked = true && scratchText(checkbox.parentElement, "line-through");
      });
    }

    lastChecked = this;
  }

  allCheckboxesNL.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
}