
window.onload = function () {
    let accounts=document.getElementById("accounts");
    // if local storage has accounts then filling select control
    if(localStorage.accounts!=undefined){
        let localAcounts=JSON.parse(localStorage.accounts);
        for(let v of localAcounts){
            let opt=document.createElement("option");
            opt.innerText=`Account Name: ${v.accountName}, Balance: ${v.balance}`;
            accounts.appendChild(opt);
        }
    }
    let btn = document.getElementById('btn');
    btn.onclick = function () {
        if (document.getElementById('account').value != "" &&
            !isNaN(parseFloat(document.getElementById('balance').value))) {
            let ac = new Account();
            ac.createAccount();
            Account.accountInfoList.push(ac);
            
            let account = document.createElement("option");
            account.value = Account.accountInfoList[Account.accountInfoList.length-1].getAccountDetails();
            account.innerText = Account.accountInfoList[Account.accountInfoList.length-1].getAccountDetails();
            accounts.appendChild(account);

            document.getElementById('account').value="";
            document.getElementById('balance').value="";

        }
        else
        {
            alert('Please fill the form correctly;')
        }

    };
};

function clearAccounts(){
    localStorage.clear();
    let accounts=document.getElementById("accounts");
    accounts.innerHTML="";
}

class Account {
    #accountName;
    #balance;
    static accountInfoList = [];
    createAccount() {
        this.#accountName = document.getElementById('account').value;
        this.#balance = parseFloat(document.getElementById('balance').value);

        if(localStorage.accounts==undefined){
            localStorage.setItem("accounts",JSON.stringify(new Array(this.getSerializedAccount())));
        }
        else{
            let localAccounts=JSON.parse(localStorage.accounts);
            localAccounts.push(this.getSerializedAccount());
            localStorage.accounts=JSON.stringify(localAccounts);
        }
    }
    getAccountDetails() {
        return `Account Name: ${this.#accountName}, Balance: ${this.#balance}`;
    }
    getSerializedAccount(){
        return {
            // custom serialization is needed because JSON.stringify() ignores private properties
            accountName:this.#accountName,
            balance:this.#balance
        }
    }
}

