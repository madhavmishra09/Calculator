document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("result");
  const button = document.querySelectorAll(".btn");
  const clear = document.getElementById("btn");
  button.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;
      if (value === "C") {
        result.value = "";
      } else if (value === "=") {
        try {
          result.value = eval(result.value);
        } catch (error) {
          result.value = "Error";
        }
      } else {
        result.value += value;
      }
    });
  });
});
