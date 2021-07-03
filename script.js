let numSum = 0.0; // Soma 
let divEmpty = 0; 
let dataLocal = JSON.parse(localStorage.getItem("transacao")); // Local Storage

if (dataLocal){ 
    for(i=0;i<dataLocal.length;i++){
        AddTrans(dataLocal[i]["Commodity"],dataLocal[i]["Value"],dataLocal[i]["TypeShop"]);
    }
} else { 
    document.getElementById("dealResul").innerHTML =`
        <div class="merc" style="width: 100%; text-align: center;">
            <span style="width: 100%;"> Nenhuma transação cadastrada</span>
        </div>
        `;
    document.getElementById("totalValue").innerHTML ="R$ 0,00";
    document.getElementById("statusValue").innerHTML = "";
    divEmpty = 1;
    dataLocal = [];
};

function myFunction(x) {
    if (x.matches) {
        document.getElementById("header").style.display = "flex";
    } else {
        document.getElementById("header").style.display = "none";
    };
};
var x = window.matchMedia("(min-width: 800px)");
myFunction(x);
x.addListener(myFunction);

function hambMenu() {
    document.getElementById("header").style.display = "flex";
};

function closeMenu() {
    document.getElementById("header").style.display = "none";
};

function validaForm() {

    data = {
        "Commodity":document.getElementById("nameCommodity").value,
        "Value":document.getElementById("valueCommodity").value,
        
    };
   
    if (data["Commodity"] == '') {
        document.getElementById("Mercadoria").style.display = "block";
        return false;
    } else {
        document.getElementById("Mercadoria").style.display = "none";
        if (data["Value"] == '') {
            document.getElementById("Mercadoria").style.display = "block";
            return false;
        } else {
            document.getElementById("Mercadoria").style.display = "none";
            AddTrans(data["Commodity"],data["Value"],data["TypeShop"]);
            document.querySelector("form").reset();
            num = "";
            dataLocal.push(data);
            localStorage.setItem("dados", JSON.stringify(dataLocal));
            return false;
        };
    };
    
};
