 function createTable() {
      
      let rows = document.getElementById("rows").value;
      let cols = document.getElementById("cols").value;
      let table = document.createElement("table");

      for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
          let td = document.createElement("td");
          
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }

      let parent=document.getElementsByTagName("body")[0];
      parent.appendChild(table);
    }