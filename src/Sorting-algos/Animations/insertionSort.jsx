import { timer } from "../SortingAlgos";

const animationsFromInsertionSort = async () => {
  const arr = document.getElementsByClassName("array-bar");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      arr[j - 1].style.backgroundColor = "red";
      arr[j].style.backgroundColor = "red";
      const hi = parseInt(arr[j - 1].style.height);
      const hj = parseInt(arr[j].style.height);

      await timer();

      let flag = true;
      if (hi > hj) {
        flag = false;
        arr[j - 1].style.height = `${hj}px`;
        arr[j].style.height = `${hi}px`;
      }

      arr[j - 1].style.backgroundColor = "green";
      arr[j].style.backgroundColor = "green";
      if (flag) break;
    }
  }
};

export default animationsFromInsertionSort;