const moduleMessages={
  editor:["TALLER PIXEL ART","El editor de píxeles interactivo se incorporará en una siguiente versión. La ruta actual incluye prácticas para aplicar cada concepto."],
  layers:["CAPAS Y VISTAS","La comparación de capas anatómicas se desarrollará después del atlas y las lecciones."],
  progress:["MI PROGRESO","Tu avance de lecciones y resultados de retos se guarda en este navegador. El panel ampliado se desarrollará en una siguiente etapa."]
};
document.querySelectorAll("[data-go-atlas]").forEach(button=>button.addEventListener("click",()=>document.getElementById("atlas-section").scrollIntoView({behavior:"smooth"})));
document.querySelectorAll("[data-module]").forEach(button=>button.addEventListener("click",()=>{
  const key=button.dataset.module;
  const workspace=document.getElementById("workspace");
  const title=document.getElementById("workspace-title");
  const message=document.getElementById("workspace-message");
  const content=document.getElementById("module-content");
  if(key==="lessons"){
    title.textContent="LECCIONES ANATÓMICAS";
    message.textContent="Avanza por seis lecciones breves con conceptos, traducción a Pixel Art y una práctica guiada.";
    window.Lessons?.open();
  } else if(key==="quiz"){
    title.textContent="RETOS ANATÓMICOS";
    message.textContent="Pon a prueba tus conocimientos. Las preguntas se mezclan en cada intento y podrás revisar tus respuestas al finalizar.";
    window.Quiz?.open();
  } else {
    const data=moduleMessages[key];
    if(!data)return;
    title.textContent=data[0];
    message.textContent=data[1];
    content.hidden=true;
    content.innerHTML="";
  }
  workspace.scrollIntoView({behavior:"smooth",block:"start"});
}));
