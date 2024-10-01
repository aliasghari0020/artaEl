
const openCloseDesktopSearch = () => {
  const searchBox = element('.search');
  const searchInput = element('input', searchBox);
  const searched = element('.searched', searchBox);
  const defaulted = element('.default');
  const deleteBranchBtn = element('.delete-branch-results');
  const mobileDeleteBranchBtn = element('.mobile-delete-branch-results');
  const boxResults = element('.results-you')
  const mobileBoxResult = element('.mobile-result-you')


  searchBox.addEventListener('click', (e) => openAction(e));  //open click
  document.addEventListener('click', (e) => closeAction(e)); // close click
  const openAction = (event) => {
    defaulted.contains(event.target) ? searchInput.focus() : null;
    show();
  }
  const closeAction = (event) => {
    searchBox.classList.contains('active') && !searchBox.contains(event.target) && !deleteBranchBtn.contains(event.target)
    ? hide()
    : null;
  }
  const show = () => {
    toggleClass(searched, "remove", "hidden");  // remove class hidden
    toggleClass(searchBox, "add", "active");     // add class active
    searched.classList.contains('hide')
    ? toggleClass(searched, "replace", "hide", "show")
    : toggleClass(searched, "add", "show");
  }

  const hide = () => {
    toggleClass(searchBox, "remove", "active");
    searched.classList.contains('show')
    ? toggleClass(searched, "replace", "show", "hide")
    : toggleClass(searched, "add", "hide");
  }


  deleteBranchBtn.addEventListener('click', () => {
    boxResults.innerHTML = "";
  })
  mobileDeleteBranchBtn.addEventListener('click', () => {
   mobileBoxResult.innerHTML = "";
  })

}
openCloseDesktopSearch()
const deleteSearchBtn = element('.delete-value-search');
const desktopSearched = element('.searched');
const desktopStep1 = element('.step-1');
const desktopStep2 = element('.step-2');

const mobileDeleteSearchBtn = element('.mobile-delete-value-search');
const  mobileSearched = element('.mobile-searched');
const  mobileStep1 = element('.mobile-step-1');
const  mobileStep2 = element('.mobile-step-2');

const ResultsHandler = (searched, deleteBtn , step1, step2 )=>{
  const input = element('input', searched);
  let value = input.value;
  input.addEventListener('input', (e) => {
    value = e.target.value;
    if (value.length >= 3) {
      toggleClass(deleteBtn, 'replace', 'd-none', 'd-block');
      toggleClass(step1,'replace', 'd-block', 'd-none');
      toggleClass(step2,'replace', 'd-none', 'd-block');
    } else {
      toggleClass(deleteBtn, 'replace', 'd-block', 'd-none');
      toggleClass(step1,'replace', 'd-none', 'd-block');
      toggleClass(step2,'replace', 'd-block', 'd-none');
    }
  });
  deleteBtn.addEventListener('click', () => {
    input.value = "";
    value = "";
    toggleClass(deleteBtn, 'replace', 'd-block', 'd-none');
    toggleClass(step1,'replace', 'd-none', 'd-block');
    toggleClass(step2,'replace', 'd-block', 'd-none');
  })
}

ResultsHandler(desktopSearched , deleteSearchBtn , desktopStep1, desktopStep2);
// mobile
ResultsHandler(mobileSearched , mobileDeleteSearchBtn , mobileStep1, mobileStep2);


