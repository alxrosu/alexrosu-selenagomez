document.addEventListener("mousemove", function(event) {
    const estrella = document.createElement("div");
    estrella.className = "brillo";
    estrella.style.left = event.pageX + "px";
    estrella.style.top = event.pageY + "px";
    
    document.body.appendChild(estrella);
    setTimeout(() => {
      estrella.remove();
    }, 1000);
  });
  
