console.log("Working");

function Copy_n_Paste() {
    const inputText1 = document.getElementById("input1");
    // console.log(inputText1.value);
    const inputText2 = document.getElementById("input2");

    inputText2.value = inputText1.value;
}