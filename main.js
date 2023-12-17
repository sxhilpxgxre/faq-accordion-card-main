
const q=[...NodeList=document.querySelectorAll('.que')];
const ans=[...NodeList=document.querySelectorAll('.ans')];
const im=[...NodeList=document.querySelectorAll('.idown')];

function disp(i,a,b,c){
    q[i].style.color=a;
    ans[i].style.display=b;
    im[i].style.transform=c;
}
for (let i=0;i<5;i++){
    q[i].onclick= x => {
        if(ans[i].style.display!="block"){
            disp(i,"black","block","scaleY(-1)");
        }else{
            disp(i,"hsl(240, 6%, 50%)","none","scaleY(1)");
        }
        };
    }