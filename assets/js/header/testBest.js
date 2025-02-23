const createAndAppendMenuColumn = () => {
  const menuColumn = document.createElement("div");
  menuColumn.classList.add("menu-column");
  return menuColumn;
};

const distributeItemsInColumns = () => {
  const menuElements = document.querySelectorAll(".best-menu");
  menuElements.forEach(menuElement => {
    const flexColumns = menuElement.querySelectorAll(".flex-column");

    let totalChildrenCount = 0;
    const menuColumns = [];
    let currentColumnIndex = 0;

    for (let i = 0; i < 4; i++) {
      const menuColumn = createAndAppendMenuColumn();
      menuElement.appendChild(menuColumn);
      menuColumns.push(menuColumn);
    }

    flexColumns.forEach((flexColumn, index) => {
      const childCount = flexColumn.children.length;
      totalChildrenCount += childCount;
      menuColumns[currentColumnIndex].appendChild(flexColumn);
      currentColumnIndex = (currentColumnIndex + 1) % 4;

      if (totalChildrenCount >= 80) {
        totalChildrenCount = 0;
      }
    });

  });
};
if(document.querySelector(".best-menu")){
  distributeItemsInColumns();
}


