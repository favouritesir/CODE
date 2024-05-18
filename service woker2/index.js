const blob = new Blob([atob("Ly8gc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50KSA9PiB7DQovLyAgICAgY29uc29sZS5sb2coJ1NlcnZpY2UgV29ya2VyIGluc3RhbGxlZCcpOw0KLy8gICB9KTsNCg0KLy8gICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKGV2ZW50KSA9PiB7DQovLyAgICAgY29uc29sZS5sb2coJ1NlcnZpY2UgV29ya2VyIGFjdGl2YXRlZCcpOw0KLy8gICB9KTsNCg0KLy8gICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKGV2ZW50KSA9PiB7DQovLyAgICAgY29uc29sZS5sb2coJ1NlcnZpY2UgV29ya2VyIGludGVyY2VwdGVkIGEgZmV0Y2g6JywgZXZlbnQucmVxdWVzdC51cmwpOw0KLy8gICB9KTs=")], { type: 'application/javascript' });

  // Create a URL for the Blob
  const blobURL = URL.createObjectURL(blob);
if("serviceWorker" in navigator){
    window.addEventListener("load",function(){
        navigator.serviceWorker.register("blob:https://resultjam.blogspot.com/ca4df0d2-989c-4198-b842-abf1ead09434").then(
            function(registration){
                console.log("alhamdulillah",registration.scope);
            },
            function(err){
                console.log("oho")
            }
        )
    })
}