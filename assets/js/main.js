import { subscribeToHellfireClub } from "./firebase/hellfire-clube.js";


const txtName=document.getElementById("txtName");
const txtEmail=document.getElementById("txtEmail");
const txtLevel=document.getElementById("txtLevel");
const txtCharacter=document.getElementById("txtCharacter");

const btnSubscribe=document.getElementById("btnSubscribe");


//console.log(txtName,txtEmail,txtLevel,txtCharacter);

btnSubscribe.addEventListener('click', async () =>{
    
    const subscription = {
        name:txtName.value,
        email:txtEmail.value,
        level:txtLevel.value,
        character:txtCharacter.value
    }
    //salvar no banco de dados
    const subscriptionId=await subscribeToHellfireClub(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    //pra esvaziar as caixinhas:
    txtName.value=""
    txtEmail.value=""
    txtLevel.value=""
    txtCharacter.value=""
})
