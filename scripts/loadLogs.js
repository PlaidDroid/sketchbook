function readTextFile(file) {
  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        let allText = rawFile.responseText;
        let lines = allText.split(/\r\n|\r|\n/);
        let target = document.getElementById("content");
        let newDiv;
        let newSpan;
        let newText;
        lines.forEach(function (line, index, array) {
          if (line.startsWith("# ")) {
            newDiv = document.createElement("div");
            newSpan = document.createElement("span");
            newText = document.createTextNode(line);
            newSpan.appendChild(newText);
            newDiv.appendChild(newSpan);
            target.appendChild(newDiv);
          } else if (line.startsWith("##")) {
            newSpan = document.createElement("span");
            newText = document.createTextNode(line);
            newSpan.appendChild(newText);
            newDiv.appendChild(newSpan);
            target.appendChild(newDiv);
          } else {
            newText = document.createTextNode(line);
            newDiv.appendChild(newText);
            target.appendChild(newDiv);
          }
        });
      }
    }
  };
  rawFile.send();
}
