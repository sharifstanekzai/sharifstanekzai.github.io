window.onload=function(){
    const params = new URLSearchParams(window.location.search);
    const transaction=params?.get('transactionType');
    if(transaction){
        let accounts=document.getElementById("accounts");
        let localAccounts=JSON.parse(localStorage.accounts);
        for(let v of localAccounts){
            let opt=document.createElement("option");
            opt.value=`${v.accountName}`;
            opt.innerText=`Account Name: ${v.accountName}, Opening Balance: ${v.balance}`;
            accounts.appendChild(opt);
        }

        document.getElementById('transactionType').innerText=transaction.toUpperCase()+' Amount';
    }
    let btn=document.getElementById('btn');
    btn.onclick=function(){
        
        let localAccounts=JSON.parse(localStorage.accounts);
        let amount=parseFloat(document.getElementById('amount').value);
        for(let i=0;i<localAccounts.length;i++){
            if(localAccounts[i].accountName===accounts.value){
                localAccounts[i].balance+=transaction==='credit'?amount:-amount;
                localStorage.accounts=JSON.stringify(localAccounts);
                window.location.href = 'accounts.html';
                break;
            }
        }
    };
};

